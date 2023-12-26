import { observer } from "mobx-react";
import { useStore } from "@/store/index";
import React, { useEffect, useState } from 'react';
import { Button, Card, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import KeyModal from "./KeysModa";
import { request } from "http";
import keyparamsApi from "@/api/keyparams";


interface DataType {
  id: string
  creater: string
  createTime: string
  name: string;
  tags: string[];
}





const testdata: any[] = [
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

    let [showKeyModal, setShowKeyModal] = useState(false)
    let [keyData, setKeyData] = useState(testdata)


    let [detailData, setDetailData] = useState(null)
    let [showDetailData,setShowDetailData ]= useState(false)

const keyColumns: ColumnsType<any> = [
    {
      title: '序号',
      dataIndex: '_id',
      key: '_id',
      render: (_, record,index) => <a>{index+1}</a>,
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
      dataIndex: 'createdAt',
      key: 'createdAt',
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
              <Button onClick={() => { setDetailData(record); setShowDetailData(true)}} >详情</Button>
          <Button onClick={(_) => {delKeyParams(record._id)}}>删除</Button>
        </Space>
      ),
    },
  ];
  
  
  function getFieldDecorator(a: any, b: any) { 
    return function (c:any) { 
      return c
    }
    
  }
    
    useEffect(() => { 
        refreshData()
    },[])
    
    function keyModalOK(data:any) { 
        setShowKeyModal(false)
        keyparamsApi.add(data).then(() => { 
            refreshData()
        })
    }

    function refreshData() { 
        keyparamsApi.getAll().then((res:any)=>{ 
            setKeyData(res)
        })
    }

    function delKeyParams(id:any) {
        keyparamsApi.del(id).then(() => { 
            refreshData()
        })
    }

    function keyModalCancel() { 

        setShowKeyModal(false)
    }

    function cancelDetail() {
        setShowDetailData(false)
        setDetailData(null)
    }

  return (<>



      <div style={{display:'flex'}}>
        <Button onClick={()=> setShowKeyModal(!showKeyModal)}>+ 新增键值选项</Button>
      </div>
      <Table pagination={{ pageSize:15} } columns={keyColumns} dataSource={keyData} style={{ marginTop: '10px' }} />
      {showKeyModal ? <KeyModal title='新增' open={showKeyModal} onOk={keyModalOK} onCancel={keyModalCancel}></KeyModal> : null}
      {showDetailData ? <KeyModal title='详情' data={detailData} open={showDetailData} onOk={cancelDetail} onCancel={cancelDetail}></KeyModal> : null}
   
    </>)
}

export default observer(Model)
