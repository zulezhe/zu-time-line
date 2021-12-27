/*
 * @Author: zulezhe
 * @Date: 2021-12-27 09:59:05
 * @LastEditors: zulezhe
 * @LastEditTime: 2021-12-27 10:10:59
 * @Path: https://gitee.com/zulezhe/
 * @Description: 
 */
export const config = require("../package.json");

export const upName = config.name.replace(/(^\w|-\w)/g, (m) =>
  m.replace("-", "").toUpperCase()
);
