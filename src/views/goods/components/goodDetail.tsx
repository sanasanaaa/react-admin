import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Modal, Row, Select, Space, Upload, UploadFile, UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import TextArea from 'antd/es/input/TextArea';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const GoodDetail = function (props: any) { 

    const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => { 
        console.log(newFileList)
        setFileList(newFileList);
    }
     

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
    
    function submit(e:any) { 
        console.log(e)
    }
    

    return (
        <Drawer
        title={props.title }
        width={720}
            open={props.show}
            onClose={props.onclose}
            >
            <Form layout="vertical" hideRequiredMark onFinish={submit}>
            <Button htmlType="submit"  type="primary">
            Submit
            </Button>
    <Row gutter={16}>
        <Col span={12}>
        <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter name' }]}
        >
            <Input placeholder="Please enter name" />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true, message: 'Please enter Brand' }]}
        >
            <Input
            style={{ width: '100%' }}
            placeholder="Please enter Brand"
            />
        </Form.Item>
        </Col>
    </Row>
                
    <Row gutter={16}>
    <Col span={24}>
        <Form.Item
        name="description"
        label="description"
        >
    <TextArea
    showCount
    maxLength={1500}
                        onChange={() => { }}
    placeholder="disable resize"
    style={{ height: 300, resize: 'none' }}
            />
            </Form.Item>
            </Col>
    </Row>
    <Row gutter={16}>
        <Col span={24}>
        <Form.Item
            name='mainImg'
            label='mainImg'
        >
<Upload
action="http://127.0.0.1:9000/img/mainsave"
listType="picture-card"
fileList={[]}
onPreview={handlePreview}
onChange={handleChange}
>
{fileList.length >= 8 ? null : uploadButton}
</Upload>
<Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
<img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
        <Col span={24}>
            <Form.Item
                name='subImgs'
                label='subImgs'
            >
                <Upload
                    action="http://127.0.0.1:9000/img/mainsave"
                                listType="picture"
                                accept='file'
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    >
                {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </Form.Item>
        </Col>
    </Row>
</Form>
</Drawer>
    )
}
    

export default GoodDetail