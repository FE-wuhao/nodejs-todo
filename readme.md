<!--
 * @Author: 吴灏
 * @Date: 2021-08-03 21:42:34
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-08-04 20:16:15
 * @Description: file content
-->
### 项目搭建步骤
# 需求说明，API说明

1. 根据客户端筛选条件查询任务的列表(状态、页码) 
2. 新增任务的功能（名称、截止日期、任务内容） 
3. 编辑任务的功能（id、名称、截止日期、任务内容） 
4. 删除一个任务（id） 5.修改一个任务状态（id、状态）

# API实现

# 数据库的初始化
1. navicat创建一个名为todo_development的数据库
2. sequelize cli初始化项目配置
   指令：npx sequelize init
3. 生成模型文件
  1. migrate文件
  2. model文件

  指令：npx sequelize-cli model:generate --name Todo --attributes name:string, deadline:date,description:string
4. 根据模型在数据库生成对应的表
   指令：npx sequelize-cli db:migrate

# API使用ORM模型

# 项目的发布和运维
1. 工具：pm2
2. 使用步骤：
   1. yarn global add pm2
   2. pm2 init生成运维配置文件ecosystem.config.js
   3. 修改配置文件
   4. 服务器拉取代码，安装依赖
   5. pm2 start ecosystem.config.js指令，运行服务
3. pm2常用指令：
   1. pm2 start 配置文件
   2. pm2 log 
   3. pm2 restart ecosystem.config.js
