/*
 * @Author: 吴灏
 * @Date: 2021-08-03 21:56:23
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-08-04 00:30:45
 * @Description: file content
 */
const express = require("express");
const bodyParser = require("body-parser");
const models = require("../db/models");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("服务启动成功");
});

// for parsing application/json
app.use(express.json());
// for parsing application/xwww-form=urlencoded
app.use(express.urlencoded());
// for parsing application/xwww-form=urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * 规定：
 * 1.所有的错误使用错误码500处理
 */

// #region 公用常量
const EStatus = {};
// #endregion

/**
 * 查询列表
 * 3种任务状态：1->待办，2->完成，3->删除，-1->全部
 */
app.get("/list/:status/:page", async (req, res, next) => {
  try {
    const { status, page } = req.params;

    const limit = 10;

    const offset = (page - 1) * limit;

    const where = {};

    if (status != -1) {
      where.status = status;
    }

    const result = await models.Todo.findAndCountAll({
      where,
      limit,
      offset,
    });

    res.json({
      code: 0,
      data: result,
      msg: "查询成功",
    });
  } catch (error) {
    next(error);
  }
});

/**
 * 创建一个任务
 */
app.post("/create", async (req, res, next) => {
  try {
    const { name, deadline, description } = req.body;

    const result = await models.Todo.create({
      name,
      deadline,
      description,
    });

    res.json({
      code: 0,
      data: result,
      msg: "创建成功",
    });
  } catch (error) {
    next(error);
  }
});

/**
 * 修改一个任务
 */
app.post("/update", async (req, res, next) => {
  try {
    const { id, name, deadline, description } = req.body;

    const result = await models.Todo.findOne({ where: { id } });

    if (result) {
      // 执行更新逻辑
      const updateResult = await result.update({
        id,
        name,
        deadline,
        description,
      });

      res.json({
        code: 0,
        data: updateResult,
        msg: "修改成功",
      });
    } else {
      next(new Error("任务项不存在"));
    }
  } catch (error) {
    next(error);
  }
});

/**
 * 修改一个任务的状态（待办/完成/删除）
 */
app.post("/updateStatus", async (req, res, next) => {
  try {
    const { id, status } = req.body;

    const result = await models.Todo.findOne({ where: { id } });

    if (result && status != result.status) {
      // 执行更新逻辑
      const updateResult = await result.update({
        id,
        status,
      });

      res.json({
        code: 0,
        data: updateResult,
        msg: "修改任务状态成功",
      });
    } else {
      next(new Error("任务项不存在"));
    }
  } catch (error) {
    next(error);
  }
});

/**
 * 全局异常处理中间件
 */
function errorHandleMiddleware(err, req, res, next) {
  if (err) {
    res.status(500).json({
      code: 1,
      data: null,
      msg: err.message,
    });
  } else {
    next();
  }
}

app.use(errorHandleMiddleware);
