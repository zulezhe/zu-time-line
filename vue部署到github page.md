<!--
 * @Author: wangchaoxu
 * @Date: 2020-10-15 10:55:33
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-10-15 10:59:32
 * @Description: vue项目部署到github page
-->
## 打包项目

```js
   yarn build
```

## 进入需要部署的目录
```js
cd dist

```
## 使用git
+ 初始化
```js
git init
```
+ 提交暂存

```js
  git add . 
  git commit -m "部署"
```
+ 链接远程

```js

git remote add origin git@github.com:wangchaoxu/w-time-line.git

```

+ 提交远程

```js
git push -f git@github.com:wangchaoxu/w-time-line.git master:gh-pages

```

## github设置