/*
 * @Author: 吴灏
 * @Date: 2021-08-03 21:56:23
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-08-03 22:44:32
 * @Description: file content
 */
const express = require("express");
const bodyParser = require("body-parser");

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
 *
 */

// #region 公用常量
const EStatus = {};
// #endregion

/**
 * 查询列表
 */
app.get("/list/:status/:page", (req, res, next) => {
  const { status, page } = req.params;

  const code = 0;

  const data = [];

  const msg = "请求成功";

  res.json({
    code,
    data,
    msg,
  });
});

/**
 * 创建一个任务
 */
app.post("/create", (req, res) => {
  const { name, deadline, description } = req.body;

  const code = 0;

  const data = { name, deadline, description };

  const msg = "创建成功";

  res.json({
    code,
    data,
    msg,
  });
});

/**
 * 修改一个任务
 */
app.post("/update", (req, res) => {
  const { id, name, deadline, description } = req.body;

  const code = 0;

  const data = { id, name, deadline, description };

  const msg = "修改成功";

  res.json({
    code,
    data,
    msg,
  });
});

/**
 * 修改一个任务的状态（待办/完成/删除）
 */
app.post("/updateStatus", (req, res) => {
  const { id, status } = req.body;

  const code = 0;

  const data = { id, status };

  const msg = "修改任务状态成功";

  res.json({
    code,
    data,
    msg,
  });
});

/**
 * 全局错误处理中间件
 */
function errorHandleMiddleware(err, req, res, next) {
  if (err) {
    res.status(500).json({
      code: 1,
      data: null,
      msg: err.message || "sss",
    });
  } else {
    next();
  }
}

app.use(errorHandleMiddleware);
