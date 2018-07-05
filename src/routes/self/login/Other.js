import React from 'react';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Row, Col, Modal, Select, Cascader} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';
import md5 from 'blueimp-md5';
import action from '../../../store/action/index';
import {query} from '../../../api/home';



const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
    value: '中国',
    label: '中国',
}, {
    value: '美国',
    label: '美国',
}, {
    value: '英国',
    label: '英国',
}];


function loginFail() {
    const modal = Modal.error({
        title: '登录失败',
        content: '请稍后重新尝试!',
    });
    setTimeout(() => modal.destroy(), 2000);
}

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            enter: false,
            a: [],
            dataF: false,
            dataG: false
        }
    }

    componentDidMount() {
        let captchaAry = document.getElementById('captcha'),
            iphone = document.getElementById('phone');

        this.setState({})
    }

    back = () => {
        let {history} = this.props;
        history.go(-1)
    };
    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let {userName, userPass} = values;
                userPass = md5(userPass);
                let result = await query({
                    name: userName,
                    password: userPass
                });
                /*if (parseFloat(result.code) === 0) {
                    this.props.queryBaseInfo();
                    //登陆成功后 我们需要重新获取已购买的课程信息！（未登录下从服务获取的支付课程信息是获取不倒的 但是登陆后我们需要把购买信息同步到redus 这样我们才能在redux中展示信息）\
                    this.props.queryPay();
                    this.props.history.go(-1);
                    return;
                }*/
                loginFail();
            }
        });
    };

    render() {


        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 12},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 12},
                sm: {span: 8},
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );
        return <div className='personLoginBox' style={{marginTop:".25rem"}}>

<div className='title-f' style={{margin:"0 auto"}}>
    <div style={{display:"flex"}}>
        <Button style={{borderRadius:"50%",flex:"0",width:".65rem",padding:"0 .2rem 0",marginLeft:"1rem"}} className='back-ceng' onClick={this.back}>
            <Icon type='left'/>
        </Button>

        <span style={{flex:"3",lineHeight: '.65rem',
            marginLeft: '1.25rem',fontSize:'.3rem'}}>海外账号登录</span>
    </div>
</div>

            <Form onSubmit={this.handleSubmit} className="login-form">

                <FormItem style={{
                    width: '1.5rem', margin: ".5rem 0 .5rem .7rem",
                    display: 'inline-block'
                }} {...formItemLayout}>
                    {getFieldDecorator('residence', {
                        initialValue: ['中国'],
                        rules: [{type: 'array', required: true, message: '请选择地区!'}],
                    })(
                        <Cascader options={residences}/>
                    )}
                </FormItem>
                <FormItem style={{
                    marginTop: '.46rem',
                    display: 'inline-block',
                    width: '4.5rem'
                }}
                          {...formItemLayout}
                >{getFieldDecorator('phone', {
                    rules: [{required: true, message: '请输入手机号'}],
                })(
                    <Input addonBefore={prefixSelector}

                           style={{width: '100%'}}/>
                )}
                </FormItem>
                {/*密码*/}
                <FormItem style={{width: '4rem',marginLeft:".7rem"}}>
                    {getFieldDecorator('userPass', {})(
                        <Input prefix={<Icon type="lock"/>} placeholder="密码!"
                               type="password"/>)}
                </FormItem>


                {/*登录按钮*/}
                <FormItem>
                    <Button

                        id="button"
                        style={{width: "6.5rem", height: ".75rem", marginLeft: ".5rem"}} type="primary"
                        htmlType="submit" className="login-form-button">登录</Button>

                </FormItem>
            </Form>
            <div className='login-f'>
                <Link to='/login/other'> <span>海外账号登录</span></Link>
                <Link to='/login/back'> <span>账号密码登录</span></Link>
                <Link to='/sss'><span>忘记密码?</span></Link>
            </div>

        </div>

    }


    captcha = () => {



        //
        // console.log(!(captchaAry.getAttribute('value').length === 0 && iphone.getAttribute("value").length === 0) ? "" : button.innerHTML = button.setAttribute('disabled', "true"));

    };


}

export default Form.create()(connect(null, {...action.homeData, ...action.homeData})(Login));