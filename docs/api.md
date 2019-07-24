# NCGrid


 ## 何时使用


 ## 如何使用

```
import NCGrid from 'nc-grid';
import 'nc-grid/build/NCGrid.css';

const SimpleTable = NCGrid.SimpleTable;
```

 ## 代码演示

 ## API
 |参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|data|传入的表格数据|array|-|
|columns|表格列数组|array|-|
|isMultipleHead|是否为多表头|bool|false|
|multiSelect|是否使用多选功能|bool|false|
|totalData|合计行数据|array|-|
|totalColums|合计行列配置|array|-|
|totalColums|合计行列配置|array|-|
|showPagination|是否显示分页|bool|false|
|pageIndexChange|分页切换页码时的回调|function|-|
|pageSizeChange|分页改变下拉选项时的回调|function|-|
|pageInfo|包含 {pageIndex, pageSize, total, totalPage} 的对象|object|-|
|config|表格配置项|object|-|


 ## 注意事项

 暂无

 ## 更新日志