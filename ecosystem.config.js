/*
 * @Author: 吴灏
 * @Date: 2021-08-04 20:06:45
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-08-04 20:10:30
 * @Description: file content
 */
module.exports = {
  apps: [
    {
      name: "todo_api",
      script: "src/app.js",
      instance: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
