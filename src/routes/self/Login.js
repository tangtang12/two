import React from 'react';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Row, Col, Modal, Select, Cascader} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';
import md5 from 'blueimp-md5';
import {login,isLogin} from '../../api/person';
import action from '../../store/action/index';
import '../../static/css/login.less'
import Other from './login/Other'
import Back from './login/Back'

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
            f: [],
            enter: false,
            a: [],
            isLogin: false
        }
    }


    back = () => {
        let {history} = this.props;
        history.go(-1)
    };
    handleSubmit = ev => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let {phone} = values,
                    password = md5(phone);
                let result = await login({
                    name:phone,
                    password
                });
                if (result.code === 0) {
                    this.props.isLogin(0);
                    this.props.history.go(-1);
                    return;
                }
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
        return <div className='personLoginBox'>

            {/*demo*/}
            <div className='demo-1'>
                <div>
                    <Button className='back-ceng' onClick={this.back}>
                        <Icon type='left'/>
                    </Button>
                    <Link to='/register' className='register'>注册</Link>
                </div>
                <div className='tip'>
                    Yoho!Family账号可登录Yoho!Buy有货
                    <Icon type="question-circle-o"/>
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

                <FormItem
                    style={{
                        marginLeft: '.7rem',
                        width: '6rem',
                        height: '2rem',
                        marginBottom: '0'
                    }}
                    {...formItemLayout}
                    extra="您是否在当前操作！"
                >
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{required: true, message: '请输入验证码!'}],
                            })(
                                <Input/>
                            )}
                        </Col>
                        <Col span={12}>
                            <Button onClick={this.captchaS}>获取验证码</Button>
                        </Col>
                    </Row>
                </FormItem>

                {/*登录按钮*/}
                <FormItem>
                    <Button
                        style={{width: "6.5rem", height: ".75rem", marginLeft: ".5rem"}} type="primary"
                        htmlType="submit" className="login-form-button">登录</Button>

                </FormItem>
            </Form>
            <div className='login-f'>
                <Link to='/other'> <span>海外账号登录</span></Link>
                <Link to='/back'> <span>账号密码登录</span></Link>
                <Link to='/sss'><span>忘记密码?</span></Link>
            </div>
            <Switch>

                <Route path='/other' exact component={Other}/>
                <Route path='/back' component={Back}/>

            </Switch>
        </div>

    }

    captchaS = (ev) => {
        let a = document.getElementById('captcha');
        let b = Math.floor(Math.random() * 10000 + 90000);
        a.setAttribute("value", `${b}`);
    };


}

export default Form.create()(connect(null, {...action.person,...action.homeData})(Login));