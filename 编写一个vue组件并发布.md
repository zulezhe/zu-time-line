<!--
 * @Author: wangchaoxu
 * @Date: 2020-10-15 08:54:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-10-15 10:55:04
 * @Description:
-->

# 编写一个 vue 组件并发布

## 创建项目

```js
  vue create w-time-line
```

## 调整目录

```js
  .
...
|-- examples      // 原 src 目录，改成 examples 用作示例展示
|-- packages      // 新增 packages 用于编写存放组件
...
.

```

## 项目配置

-   1.根目录下新建`vue.config.js`文件
-   2.配置入口文件

```js
module.exports = {
	// 修改 src 目录 为 examples 目录
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
};
```

-   3.配置`webpack`打包组件

```js
module.exports = {
	// 修改 src 为 examples
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
	// 扩展 webpack 配置，使 packages 加入编译
	chainWebpack: (config) => {
		config.module
			.rule('js')
			.include.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap((options) => {
				// 修改它的选项...
				return options;
			});
	},
};
```

## 编写组件

## 编写例子

## 参考文章

[文章 1](https://juejin.im/post/6844903687668629518#heading-23)
