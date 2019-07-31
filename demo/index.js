import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" SimpleTable","code":"/**\n*\n* @title SimpleTable\n* @description \n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport NCGrid from \"tinper-bee/lib/src\";;\nconst SimpleTable = NCGrid.SimpleTable;\n\nconst columns = [\n    { title: \"员工编号\", dataIndex: \"a\", key: \"a\", width: 150 },\n    { title: \"员工姓名\", dataIndex: \"b\", key: \"b\", width:100},\n    { title: \"性别\", dataIndex: \"c\", key: \"c\", width: 100},\n    { title: \"部门\", dataIndex: \"d\", key: \"d\", width: 100 },\n    { title: \"职级\", dataIndex: \"e\", key: \"e\", width: 100 }\n];\n  \nconst data = [\n    { a: \"ASVAL_20190328\", b: \"小张\", c: \"男\", d: \"财务二科\", e: \"M1\", key: \"1\" },\n    { a: \"ASVAL_20190320\", b: \"小明\", c: \"男\", d: \"财务一科\", e: \"T1\", key: \"2\" },\n    { a: \"ASVAL_20190312\", b: \"小红\", c: \"女\", d: \"财务一科\", e: \"T2\", key: \"3\" }\n];\n  \nclass Demo1 extends Component {\n    render () {\n        return (\n            <SimpleTable\n            columns={columns}\n            data={data}\n            showPagination={true}\n            pageInfo= {{\n                pageIndex: \"1\",\n                pageSize: \"10\",\n                total: \"3\",\n                totalPage: \"1\"\n            }}\n            />\n        )\n    }\n}\n","desc":" "},{"example":<Demo2 />,"title":" EditTable","code":"/**\r\n*\r\n* @title EditTable\r\n* @description \r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport NCGrid from \"tinper-bee/lib/src\";;\r\nconst CardTable = NCGrid.CardTable;\r\n\r\nconst columns = [\r\n    {\r\n        itemtype: 'label', //label 类型不可编辑\r\n        maxlength: '20', //限制字段长度\r\n        visible: true, //是否显示列，设置为 false 或不设置，均不显示该列\r\n        width: '100px', //列宽\r\n        label: '行号', //列名称\r\n        disabled: true, //是否禁止编辑\r\n        attrcode: 'crowno' //字段名称\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        maxlength: '20',\r\n        label: '收入合同子实体',\r\n        width: '200px',\r\n        disabled: true,\r\n        required: true, //是否必填，列名称前加 *\r\n        visible: true,\r\n        attrcode: 'crevecontbid'\r\n    },\r\n    {\r\n        itemtype: 'input',\r\n        scale: '1',\r\n        maxlength: '28',\r\n        visible: true,\r\n        width: '200px',\r\n        label: '数量',\r\n        required: true, \r\n        attrcode: 'npobnum'\r\n    },\r\n    {\r\n        itemtype: 'select',\r\n        visible: true,\r\n        label: '确认收入时点',\r\n        width: '200px',\r\n        options: [\r\n            {\r\n                display: '销售发货',\r\n                value: '0'\r\n            },\r\n            {\r\n                display: '销售开票',\r\n                value: '1'\r\n            },\r\n            {\r\n                display: '手工',\r\n                value: '2'\r\n            }\r\n        ],\r\n        attrcode: 'fconfirmpoint'\r\n    },\r\n    {\r\n        itemtype: 'number',\r\n        scale: '2',\r\n        width: '200px',\r\n        maxlength: '28',\r\n        visible: true,\r\n        label: '分配金额',\r\n        disabled: true,\r\n        attrcode: 'nallotmny'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        scale: '8',\r\n        width: '200px',\r\n        maxlength: '28',\r\n        visible: true,\r\n        label: '已履约数量',\r\n        disabled: true,\r\n        attrcode: 'nfinishnum'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        scale: '8',\r\n        width: '200px',\r\n        maxlength: '28',\r\n        label: '已履约金额',\r\n        disabled: true,\r\n        attrcode: 'nfinishmny'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        maxlength: '19',\r\n        width: '200px',\r\n        label: '时间戳',\r\n        disabled: true,\r\n        attrcode: 'ts'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        maxlength: '500',\r\n        width: '200px',\r\n        label: '行备注',\r\n        disabled: true,\r\n        attrcode: 'vrownote'\r\n    }\r\n];\r\n  \r\nconst data = [\r\n    {\r\n        status: '0',\r\n        rowid: 'hhghg-34343m43-434343wws',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8',\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9',\r\n            },\r\n            fclosetype: {\r\n                value: false,\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000',\r\n            },\r\n            fallocation: {\r\n                value: false,\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货',\r\n            },\r\n            nfinishnum: {\r\n                value: 'gggg',\r\n            },\r\n            npobnum: {\r\n                value: '10888',\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '夏侯惇,白起',\r\n            },\r\n            cunitid: {\r\n                value: false,\r\n            },\r\n            crowno: {\r\n                value: 1\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: 'hhghg-344543243-434bbb3fdsf',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nfinishnum: {\r\n                value: '哈哈哈'\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000'\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货'\r\n            },\r\n            npobnum: {\r\n                value: '10888'\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '广东,北京'\r\n            },\r\n            cunitid: {\r\n                value: true\r\n            },\r\n            crowno: {\r\n                value: 2\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: 'h2345hg-345hbvc43-434bebb3sdsc',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000'\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货'\r\n            },\r\n            nfinishnum: {\r\n                value: '1234'\r\n            },\r\n            npobnum: {\r\n                value: '10888'\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '中国,美国'\r\n            },\r\n            cunitid: {\r\n                value: true\r\n            },\r\n            crowno: {\r\n                value: 3\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: '5hhhg-345hbc43-434bebb3sddw',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            nfinishnum: {\r\n                value: 'ggefe'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nallotmny: {\r\n                value: '11955',\r\n                scale: '2',\r\n                disabled: false\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 2,\r\n                display: '手工'\r\n            },\r\n            npobnum: {\r\n                value: '10.888',\r\n                scale: '6'\r\n            },\r\n            cpobid: {\r\n                value: 1,\r\n                display: '1'\r\n            },\r\n            cunitid: {\r\n                value: false\r\n            },\r\n            crowno: {\r\n                value: 4\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: 'hhghg-34343m143-4343431wwde',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000'\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货'\r\n            },\r\n            nfinishnum: {\r\n                value: 'gggg'\r\n            },\r\n            npobnum: {\r\n                value: '10888'\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '夏侯惇,白起'\r\n            },\r\n            cunitid: {\r\n                value: false\r\n            },\r\n            crowno: {\r\n                value: 5\r\n            }\r\n        }\r\n    },\r\n];\r\n\r\nconst tabLists = [{\r\n    code: 'body', \r\n    name: '详细信息',\r\n    items: [], \r\n}];\r\n  \r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <CardTable\r\n            columns={columns}\r\n            data={data}\r\n            moduleId=\"body\"\r\n            tabLists={tabLists}\r\n            showMore={true}\r\n            showMax={true}\r\n            config={{\r\n                showCheck: true, //是否开启多选功能\r\n                hideSwitch: () => false, //表格\r\n            }}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" "},{"example":<Demo3 />,"title":" EditTable","code":"/**\r\n*\r\n* @title EditTable\r\n* @description \r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\n\nimport NCGrid from \"tinper-bee/lib/src\";;\r\nconst EditTable = NCGrid.EditTable;\r\n\r\nconst columns = [\r\n    {\r\n        itemtype: 'label', //label 类型不可编辑\r\n        maxlength: '20', //限制字段长度\r\n        visible: true, //是否显示列，设置为 false 或不设置，均不显示该列\r\n        width: '100px', //列宽\r\n        label: '行号', //列名称\r\n        disabled: true, //是否禁止编辑\r\n        attrcode: 'crowno' //字段名称\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        maxlength: '20',\r\n        label: '收入合同子实体',\r\n        width: '200px',\r\n        disabled: true,\r\n        required: true, //是否必填，列名称前加 *\r\n        visible: true,\r\n        attrcode: 'crevecontbid'\r\n    },\r\n    {\r\n        itemtype: 'input',\r\n        scale: '1',\r\n        maxlength: '28',\r\n        visible: true,\r\n        width: '200px',\r\n        label: '数量',\r\n        required: true, \r\n        attrcode: 'npobnum'\r\n    },\r\n    {\r\n        itemtype: 'select',\r\n        visible: true,\r\n        label: '确认收入时点',\r\n        width: '200px',\r\n        options: [\r\n            {\r\n                display: '销售发货',\r\n                value: '0'\r\n            },\r\n            {\r\n                display: '销售开票',\r\n                value: '1'\r\n            },\r\n            {\r\n                display: '手工',\r\n                value: '2'\r\n            }\r\n        ],\r\n        attrcode: 'fconfirmpoint'\r\n    },\r\n    {\r\n        itemtype: 'number',\r\n        scale: '2',\r\n        width: '200px',\r\n        maxlength: '28',\r\n        visible: true,\r\n        label: '分配金额',\r\n        disabled: true,\r\n        attrcode: 'nallotmny'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        scale: '8',\r\n        width: '200px',\r\n        maxlength: '28',\r\n        visible: true,\r\n        label: '已履约数量',\r\n        disabled: true,\r\n        attrcode: 'nfinishnum'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        scale: '8',\r\n        width: '200px',\r\n        maxlength: '28',\r\n        label: '已履约金额',\r\n        disabled: true,\r\n        attrcode: 'nfinishmny'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        maxlength: '19',\r\n        width: '200px',\r\n        label: '时间戳',\r\n        disabled: true,\r\n        attrcode: 'ts'\r\n    },\r\n    {\r\n        itemtype: 'label',\r\n        maxlength: '500',\r\n        width: '200px',\r\n        label: '行备注',\r\n        disabled: true,\r\n        attrcode: 'vrownote'\r\n    }\r\n];\r\n  \r\nconst data = [\r\n    {\r\n        status: '0',\r\n        rowid: 'hhghg-34343m43-434343wws',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8',\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9',\r\n            },\r\n            fclosetype: {\r\n                value: false,\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000',\r\n            },\r\n            fallocation: {\r\n                value: false,\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货',\r\n            },\r\n            nfinishnum: {\r\n                value: 'gggg',\r\n            },\r\n            npobnum: {\r\n                value: '10888',\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '夏侯惇,白起',\r\n            },\r\n            cunitid: {\r\n                value: false,\r\n            },\r\n            crowno: {\r\n                value: 1\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: 'hhghg-344543243-434bbb3fdsf',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nfinishnum: {\r\n                value: '哈哈哈'\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000'\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货'\r\n            },\r\n            npobnum: {\r\n                value: '10888'\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '广东,北京'\r\n            },\r\n            cunitid: {\r\n                value: true\r\n            },\r\n            crowno: {\r\n                value: 2\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: 'h2345hg-345hbvc43-434bebb3sdsc',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000'\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货'\r\n            },\r\n            nfinishnum: {\r\n                value: '1234'\r\n            },\r\n            npobnum: {\r\n                value: '10888'\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '中国,美国'\r\n            },\r\n            cunitid: {\r\n                value: true\r\n            },\r\n            crowno: {\r\n                value: 3\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: '5hhhg-345hbc43-434bebb3sddw',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            nfinishnum: {\r\n                value: 'ggefe'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nallotmny: {\r\n                value: '11955',\r\n                scale: '2',\r\n                disabled: false\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 2,\r\n                display: '手工'\r\n            },\r\n            npobnum: {\r\n                value: '10.888',\r\n                scale: '6'\r\n            },\r\n            cpobid: {\r\n                value: 1,\r\n                display: '1'\r\n            },\r\n            cunitid: {\r\n                value: false\r\n            },\r\n            crowno: {\r\n                value: 4\r\n            }\r\n        }\r\n    },\r\n    {\r\n        status: '0',\r\n        rowid: 'hhghg-34343m143-4343431wwde',\r\n        values: {\r\n            ts: {\r\n                value: '2018-03-21 10:53:18'\r\n            },\r\n            crevecontid: {\r\n                value: '1001A310000000005SC8'\r\n            },\r\n            crevecontbid: {\r\n                value: '1001A310000000005SC9'\r\n            },\r\n            fclosetype: {\r\n                value: false\r\n            },\r\n            nallotmny: {\r\n                value: '1199.000'\r\n            },\r\n            fallocation: {\r\n                value: false\r\n            },\r\n            fconfirmpoint: {\r\n                value: 1,\r\n                display: '销售发货'\r\n            },\r\n            nfinishnum: {\r\n                value: 'gggg'\r\n            },\r\n            npobnum: {\r\n                value: '10888'\r\n            },\r\n            cpobid: {\r\n                value: '10,3',\r\n                display: '夏侯惇,白起'\r\n            },\r\n            cunitid: {\r\n                value: false\r\n            },\r\n            crowno: {\r\n                value: 5\r\n            }\r\n        }\r\n    },\r\n]\r\n  \r\nclass Demo3 extends Component {\r\n    handleClick = () => {\r\n        this.table.getTableRows();\r\n    }\r\n    //获取表格数据时返回的回调\r\n    getTableRows = (data) => {\r\n        console.log('保存数据',data);\r\n    }\r\n    render () {\r\n        return (\r\n            <div>\r\n                <Button colors=\"primary\" onClick={this.handleClick} style={{marginBottom:'8px'}}>保存表格数据</Button>\r\n                <EditTable\r\n                columns={columns}\r\n                data={data}\r\n                moduleId=\"purchase\"\r\n                isEdit={true}\r\n                onRef={(ref) => { this.table = ref; }} //获取EditTable组件实例\r\n                getTableRows={this.getTableRows}\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" "}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
