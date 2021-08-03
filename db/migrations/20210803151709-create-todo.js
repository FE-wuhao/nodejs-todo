/*
 * @Author: 吴灏
 * @Date: 2021-08-03 23:17:09
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-08-03 23:17:36
 * @Description: file content
 */
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      deadline: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Todos");
  },
};
