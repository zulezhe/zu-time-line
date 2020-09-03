/*
 * @Author: wangchaoxu
 * @Date: 2020-06-04 14:33:38
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-08-05 15:57:20
 * @Description:
 */
function timeFormat(time, fmt = 'yyyy-MM-dd HH:mm:ss') {
  time = new Date(time);
  var o = {
    'M+': time.getMonth() + 1, //月份
    'd+': time.getDate(), //日
    'h+': time.getHours() % 12 == 0 ? 12 : time.getHours() % 12, //小时
    'H+': time.getHours(), //小时
    'm+': time.getMinutes(), //分
    's+': time.getSeconds(), //秒
    'q+': Math.floor((time.getMonth() + 3) / 3), //季度
    S: time.getMilliseconds() //毫秒
  };
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[time.getDay() + '']);
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}
/*
* 调用实例
  timeRange('2020-06-04 00:00:00', '2020-06-04 24:00:00', 24)
*
*/
function timeRange(startDate, endDate, amount) {
  var startTime = new Date(startDate),
    endTime = new Date(endDate),
    gap = (endTime - startTime) / amount;
  var temp = [];
  for (var i = 0; i < amount; i++) {
    startTime.setMilliseconds(startTime.getMilliseconds() + gap);
    temp[i] = timeFormat(new Date(startTime.getTime()));
  }
  return temp;
}
/**
 * 从数组中找到最接近的数
 * @param {Number}  val
 * @param {Array}   data
 * @return {Number} 最接近当前值的结果
 * @author: wangchaoxu
 */
function findNearByArr(val, data) {
  if (data.indexOf(val) != -1) return val;
  data.push(val);
  let newArr = data.sort((a, b) => a - b);
  console.log(newArr);
  let pre = newArr[newArr.indexOf(val) - 1];
  let next = newArr[newArr.indexOf(val) + 1];
  return val - pre > next - val || val - pre === next - val ? next : pre;
}
export { timeFormat, timeRange, findNearByArr };
