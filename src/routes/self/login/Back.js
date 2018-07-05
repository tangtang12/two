import React from 'react';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Row, Col, Modal, Select, Cascader} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';
import md5 from 'blueimp-md5';
import action from '../../../store/action/index';
import {login,isLogin} from "../../../api/person";



const FormItem = Form.Item;
const Option = Select.Option;

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
                let result = await login({
                    name: userName,
                    password: userPass
                });
                if (parseFloat(result.code)===0) {
                    this.props.isLogin(0);
                    return;
                }
                /* if (parseFloat(result.code) === 0) {
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
        return <div className='personLoginBox'>

            {/*demo*/}
            <div className='demo-1'>

                <div>
                    <Button className='back-ceng' onClick={this.back}>
                        <Icon type='left'/>
                    </Button>
                    <Link to='/self/register' className='register'>注册</Link>
                </div>
                <div className='tip'>
                    Yoho!Family账号可登录Yoho!Buy有货
                    <Icon type="question-circle-o"/>
                </div>
            </div>

            <Form onSubmit={this.handleSubmit} className="login-form">

                {/*账号*/}
                <FormItem style={{width: '4rem',marginTop:' .3rem',
                    marginLeft: '1.7rem'}}>
                    {getFieldDecorator('userName', {})(<Input prefix={<Icon type="user"/>} placeholder="用户名!"/>)}
                </FormItem>
                {/*密码*/}
                <FormItem style={{width: '4rem',marginLeft: '1.7rem'}}>
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

export default Form.create()(connect(null, {...action.homeData,...action.person})(Login));