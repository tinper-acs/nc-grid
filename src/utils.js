import CONFIG from './config';
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
  
/* 检测类型是否为数组 */
export function isArray(param) {
  return Object.prototype.toString.call(param).slice(8, -1) === 'Array';
}

/* 检测类型是否为字符串 */
export function isString(param) {
  return Object.prototype.toString.call(param).slice(8, -1) === 'String';
}

/* 检测类型是否为函数 */
export function isFunction(param) {
  return Object.prototype.toString.call(param).slice(8, -1) === 'Function';
}

/*
 * 检测是否是常规的 Object  {} 这种形式
 */
export function isObj(param) {
  return Object.prototype.toString.call(param).slice(8, -1) === 'Object';
}

/*
 * @method   检测是否是需要是boolean类型
 * @author   add by yangguoqiang @18/04/11
 * @params 
 *     condition     {any}         
 * @return   {boolean}       返回ture/false
 * @demo     isWrong('')    因为后台返回数据不规范
 */
export function isBoolean(param) {
  return CONFIG.boolean.includes(param);
}

/*
 * @method   if条件下为false   除去NaN、0、-0、false   剩余undefined、null、""
 * @author   add by yangguoqiang @18/03/19
 * @params 
 *     condition     {any}         
 * @return   {boolean}       返回ture/false
 * @demo     isWrong('')    因为后台返回数据不规范
 */
export function isWrong(param) {
  return typeof param === 'undefined' || param === null || param === '';
}

export function isNullOrVoid(param) {
  return typeof param === 'undefined' || param === null;
}

/*
 * @method   根据不同类型初始化 null 输出后台可用的数据格式。
 * @author   add by yangguoqiang @18/03/19
 * @params 
 *     origin    {any}      数据来源
 *     type      {string}   数据类型
 * @return   {any}          返回
 * @demo     typeFormat('', 'string')
 */
export function typeFormat(origin, type) {
  let isVoid = isWrong.call(null, origin);
  switch (true) {
      // 'input', 'textarea', 'datepicker', 'select', 'checkbox', 'radio', 'refer', 'label' 和 number的空value处理
      case [...CONFIG.string, ...CONFIG.number].includes(type) && isVoid:
          return '';
      // switch 的空value处理为boolean值
      case CONFIG.boolean.includes(type) && isVoid:
          return !!origin;
      default:
          return origin;
  }
}

//获得数据类型
export function testType(origin) {
  return Object.prototype.toString.call(origin).slice(8, -1);
}

/**
 * 控制主表的收起展开
 * @param  tableId   meta的id号
 * @param  flag      flag:true/false 是否显示
 */
export function toggleCardTable(tableId, flag = false) {
  const isArr = Array.isArray(tableId);
  if (typeof tableId == 'string' || isArr) {
    tableId = isArr ? tableId : [tableId];
    tableId.forEach(item => {
      if (this.myTable[item]) {
        this.myTable[item].state.table.showMore = flag;
        this.myTable[item].setState({
          table: this.myTable[item].state.table
        });
      }
    });
    return false;
  }
  return false;
}

// 检测是否有一个含有key
export function checkHasKey(arr, key) {
  return arr.some(item => {
    return item.dataIndex === key;
  });
}

//精度 + 补0 + 千分位综合处理
export function formatAcuracy(value, len = 0) {
  if (value === null || value === undefined || String(value).endsWith('必输项')) {
      return value;
  }
  // 将科学计数法转成数字字符串
  value = convertNum(value);
  return commafy(addZero(formatDot(value, len), len));
}

// 四舍五入 by wangyang
export function ncRounding(value, scale) {
  // 如果没有精度，不需要处理四舍五入
  if (!scale) return value;

  let [_value, _scale] = [value, scale];

  if (
    !Object.prototype.toString.call(scale) !== "[object Number]" &&
    !isNaN(Number(scale))
  )
    _scale = Number(scale);

  // 校验参数
  if (Object.prototype.toString.call(value) !== "[object String]")
    _value = String(value);

  const re = /^(\-|\+)?(\d+)?\.?(\d+)?$/;

  if (!re.test(_value)) {
    console.warn("处理参数异常");
    return value;
  }

  // 分割value
  let [beforePoint, afterPoint] = _value.split(".");

  // 有小数位数
  if (afterPoint && afterPoint !== "") {
    // 判断小数位数与精度的关系
    if (afterPoint.length > _scale) {
      _value = Number(_value);
      // 进行四舍五入操作
      _value = Number(_value.toFixed(_scale + 1));

      _value = _value * Math.pow(10, _scale);

      _value = Math.round(_value);

      _value = _value / Math.pow(10, _scale);
    }
  }

  return _value;
}