/***
 * 获取当前浏览器类型
 */
export default function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf('Opera') > -1;
    if (isOpera) {
      //判断是否Opera浏览器
      return 'Opera';
    }
    if (userAgent.indexOf('Firefox') > -1) {
      //判断是否Firefox浏览器
      return 'Firefox';
    }
    if (userAgent.indexOf('Chrome') > -1) {
      return 'Chrome';
    }
    if (userAgent.indexOf('Safari') > -1) {
      //判断是否Safari浏览器
      return 'Safari';
    }
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
      return 'IE';
    }
}

// 处理多头排序标识
export function getSortColums({ colums, sortObj }) {
  colums.forEach(eve => {
    //获取合计行的列配置
    const { children } = eve;
    if (!isUndefined(children)) {
      //判断和并列的情况
      getSortColums({ colums: children, sortObj });
    } else {
      colums.forEach(item => {
        //保存返回的column状态，没有则终止order状态
        if (sortObj[item.attrcode]) {
          item.order = sortObj[item.attrcode].order;
          item.orderNum = sortObj[item.attrcode].orderNum;
        } else {
          item.order = 'flatscend';
          item.orderNum = '';
        }
      });
    }
  });
}
  