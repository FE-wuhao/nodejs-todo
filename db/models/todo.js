/*
 * @Author: 吴灏
 * @Date: 2021-08-03 23:17:09
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-08-04 00:01:29
 * @Description: file content
 */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      name: DataTypes.STRING,
      deadline: DataTypes.DATE,
      description: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Todo",
      timestamps: false,
    }
  );
  return Todo;
};
