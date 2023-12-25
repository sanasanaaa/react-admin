import { observer } from "mobx-react";
import { useStore } from "@/store/index";
import React, { useState } from 'react';
import { Button, Card, Space, Table, Tabs, TabsProps, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import KeysTable from "./components/KeysTable";
import Models from "./components/ModelsTable";
import Modelstable from "./components/ModelsTable";


interface DataType {
  id: string
  creater: string
  createTime: string
  name: string;
  tags: string[];
}

const modelColumns: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '创建者',
    key: 'creater',
    dataIndex: 'creater',
    render: (text) => (
      <>
        {text}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button>详情</Button>
        <Button>修改</Button>
        <Button>删除</Button>
      </Space>
    ),
  },
];

const keyColumns: ColumnsType<any> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '字段',
    dataIndex: 'field',
    key: 'field',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '创建者',
    key: 'creater',
    dataIndex: 'creater',
    render: (text) => (
      <>
        {text}
      </>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button>详情</Button>
        <Button>修改</Button>
        <Button>删除</Button>
      </Space>
    ),
  },
];


const data: DataType[] = [
  {
    id:'1',
    name: '纯电车模型',
    createTime: '2023/12/01',
    creater:'zyf',
    tags: ['nice', 'developer'],
  },
  {
    id:'2',
    name: '燃油车模型',
    createTime: '2023/12/01',
    creater:'zyf',
    tags: ['nice', 'developer'],
  },
  {
    id:'3',
    name: '增程车模型',
    createTime: '2023/12/01',
    creater:'zyf',
    tags: ['nice', 'developer'],
  }
];

const KeyData: any[] = [
  {
    id:'1',
    name: '品牌',
    field:'Brand',
    createTime: '2023/12/01',
    creater:'zyf',

  },
  {
    id:'2',
    name: '最大时速',
    field:'MaxSpeed',
    createTime: '2023/12/01',
    creater:'zyf',
  
  },
  {
    id:'3',
    name: '续航',
    field:'Endurance',
    createTime: '2023/12/01',
    creater:'zyf',

  }
];

function Model(props: any) { 
    let { system } = useStore();
  let [showDetail, setShowDetail] = useState(true)
  
  function getFieldDecorator(a: any, b: any) { 
    return function (c:any) { 
      return c
    }
    
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '键值管理',
      children:  <Card>
      <KeysTable />
      </Card>,
    },
    {
      key: '2',
      label: '模型管理',
      children:  <Card>
      <Modelstable></Modelstable>
      </Card>,
    },
    
  ];
  const onChange = (key: string) => {
    console.log(key);
  };

  return (<>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>)
}

export default observer(Model)
