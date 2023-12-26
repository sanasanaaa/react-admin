
import React, { Component, useState } from 'react';
import { Button, Card, Col, Form, Input, Modal, Row, Select, Space, Table, Tag } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { DeleteOutlined } from '@ant-design/icons';
const Option = Select.Option;

// formItem css 样式
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 22 },
    }
}
  
const optionLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    }
  }

class KeyModal extends Component<any, any> { 
    constructor(props:any) { 
        super(props);
        this.state = props.data?props.data:{
            name:'',
            field: '',
            type:'input',
            label:'',
            options:[]
        }
    }

    selectChange(e: any) { 
        if (e === 'select') { 
            this.setState({ options: [{ label: '', value: '' }] })
        }
        this.setState({ type: e })
        
    }

    OptionChange(key:any, index: any,e: any,) { 
        //修改Options中指定下标的元素
        let { options = [] } = this.state;
        options[index][key] = e.target.value
        this.setState({ options })
    }

    InputChange(key: any, e: any) { 
        this.setState({ [key]: e.target.value })
    }

    addOption() { 
        let { options = [] } = this.state;
        let newOption = { label: '', value: '' };
        let newOptions = [...options, newOption];
        this.setState({ options: newOptions })
    }

    delOption(index: any) { 
        if(this.props.title == '详情') return 
        //删除Options中指定下标的元素
        let { options = [] } = this.state;
        let newOptions = [...options];
        newOptions.splice(index, 1);
        this.setState({ options: newOptions })
    }

    onOk() { 
        console.log(this.state)
        this.props.onOk(this.state)
    }

    render() { 
        return <>
            <Modal title={ this.props.title} open={this.props.open} onOk={this.onOk.bind(this)} onCancel={this.props.onCancel}>
                <Form>
                    <FormItem {...formItemLayout} label={'名称'} hasFeedback required>
                        <Input value={this.state.name} onChange={this.InputChange.bind(this, 'name')} disabled={ this.props.title == '详情'}></Input>
                </FormItem>
                    <FormItem {...formItemLayout} label={'字段'} hasFeedback required>
                    <Input value={this.state.field} onChange={ this.InputChange.bind(this,'field')} disabled={ this.props.title == '详情'}></Input>
                    </FormItem>
                <FormItem {...formItemLayout} label={'类型'} hasFeedback required>
                    <Select value={this.state.type} onChange={this.selectChange.bind(this)} disabled={ this.props.title == '详情'}>
                    <Option value='input'>输入框</Option>
                    <Option value = 'select'>选择器</Option>
                    <Option value='text'>文本</Option>
                </Select>
                    </FormItem>
                    
                    {this.state.type == 'select' ?
                        <>
                            {
                                this.state.options.map((item:any,index:any)=>{
                                    return (
                                        
                                        <Row gutter={10}>
                                            <Col span={10}><FormItem {...optionLayout} label={'label'} required>
                                                <Input value={item.label} onInput={this.OptionChange.bind(this,'label',index)} disabled={ this.props.title == '详情'}></Input>
                                            </FormItem></Col> 
                                            <Col  span={10}><FormItem {...optionLayout} label={'value'} required>
                                            <Input value={item.value} onInput={this.OptionChange.bind(this,'value',index)} disabled={ this.props.title == '详情'}></Input>
                                            </FormItem></Col> 
                                            <Col span={4}> <div onClick={this.delOption.bind(this,index)}><DeleteOutlined /></div> </Col>
                                        </Row>)
                                })
                                
                            }
                            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}><Button onClick={this.addOption.bind(this)} disabled={ this.props.title == '详情'}>增加选项</Button></div>
                    </>:null}
            </Form>

               
      </Modal></>;
    }

} 

export default KeyModal
