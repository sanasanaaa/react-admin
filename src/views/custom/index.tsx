import { observer } from "mobx-react";
import { useStore } from "@/store/index";
import React, { useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id: string
  creater: string
  createTime: string
  name: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
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

const data: DataType[] = [
  {
    id:'1',
    name: 'aaa',
    createTime: '2023/12/01',
    creater:'zyf',
    tags: ['nice', 'developer'],
  },
  {
    id:'2',
    name: 'bbb',
    createTime: '2023/12/01',
    creater:'zyf',
    tags: ['nice', 'developer'],
  },
  {
    id:'3',
    name: 'ccc',
    createTime: '2023/12/01',
    creater:'zyf',
    tags: ['nice', 'developer'],
  }
];

function CustomMessage(props: any) { 
    let { system } = useStore();
    let [showDetail, setShowDetail] = useState(true)

  return (<>
       <Table columns={columns} dataSource={data} style={{marginTop:'10px'}}/>
    </>)
}

export default observer(CustomMessage)
