/**
*
* @title EditTable
* @description 
*
*/
import React, { Component } from 'react';
import NCGrid from '../../src';
const EditTable = NCGrid.EditTable;

const columns = [
    {
        itemtype: 'label',
        maxlength: '20',
        label: '收入合同子实体',
        width: '200px',
        disabled: true,
        required: true,
        attrcode: 'crevecontbid'
    },
    {
        itemtype: 'input',
        scale: '1',
        maxlength: '28',
        visible: true,
        width: '200px',
        label: '数量',
        attrcode: 'npobnum'
    },
    {
        itemtype: 'label',
        maxlength: '20',
        visible: true,
        width: '200px',
        label: '行号',
        disabled: true,
        attrcode: 'crowno'
    },
    {
        itemtype: 'refer',
        maxlength: '20',
        width: '200px',
        visible: true,
        refcode: 'material',
        label: '履约义务编码',
        required: true,
        attrcode: 'cpobid'
    },
    {
        itemtype: 'refer',
        maxlength: '100',
        width: '200px',
        visible: true,
        label: '履约义务名称',
        //required: true,
        refcode: 'dept',
        attrcode: 'cpobidvname'
    },
    {
        itemtype: 'select',
        visible: true,
        label: '确认收入时点',
        width: '200px',
        options: [
            {
                display: '销售发货',
                value: '0'
            },
            {
                display: '销售开票',
                value: '1'
            },
            {
                display: '手工',
                value: '2'
            }
        ],
        attrcode: 'fconfirmpoint'
    },

    {
        itemtype: 'switch',
        maxlength: '20',
        width: '200px',
        visible: true,
        label: '是否启用',
        attrcode: 'cunitid'
    },
    {
        itemtype: 'number',
        scale: '2',
        width: '200px',
        maxlength: '28',
        visible: true,
        label: '分配金额',
        disabled: true,
        attrcode: 'nallotmny'
    },
    {
        itemtype: 'label',
        scale: '8',
        width: '200px',
        maxlength: '28',
        visible: true,
        label: '已履约数量',
        disabled: true,
        attrcode: 'nfinishnum'
    },
    {
        itemtype: 'label',
        scale: '8',
        width: '200px',
        maxlength: '28',
        visible: true,
        label: '已履约金额',
        disabled: true,
        attrcode: 'nfinishmny'
    },
    {
        itemtype: 'label',
        maxlength: '19',
        width: '200px',
        label: '时间戳',
        disabled: true,
        attrcode: 'ts'
    },
    {
        itemtype: 'label',
        maxlength: '500',
        width: '200px',
        visible: true,
        label: '行备注',
        disabled: true,
        attrcode: 'vrownote'
    }
];
  
const data = [
    { a: "ASVAL_20190328", b: "小张", c: "男", d: "财务二科", e: "M1", key: "1" },
    { a: "ASVAL_20190320", b: "小明", c: "男", d: "财务一科", e: "T1", key: "2" },
    { a: "ASVAL_20190312", b: "小红", c: "女", d: "财务一科", e: "T2", key: "3" }
];
  
class Demo3 extends Component {
    render () {
        return (
            <EditTable
            columns={columns}
            data={data}
            moduleId="body"
            />
        )
    }
}
export default Demo3;