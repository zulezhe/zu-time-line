# w-time-line

## 安装

```
yarn add w-time-line
```

## 使用

```js
  // main.js引入
  import Vue from 'vue';
  import wTimeLine 'w-time-line'
  Vue.use(wTimeLine)
```

```html
<!-- 页面中使用 -->
<w-time-line />
```

## 属性

| 参数     | 说明     | 类型  | 可选 | 默认             |
| -------- | -------- | ----- | ---- | ---------------- |
| lineData | 时间列表 | Array |      | 当前一天 24 小时 |

## 方法

| 方法名称          | 说明         | 回调           |
| ----------------- | ------------ | -------------- |
| handlePlay        | 播放         | 当前处于的时间 |
| handleMarkerClick | 点击时间点   | 当前点击的时间 |
| handleInit        | 时间轴初始化 | 当前时间       |
