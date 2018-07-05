import React from "react";
import {connect} from "react-redux";
import {Icon, Button, message, Alert} from "antd";
import "../../static/css/register.less";


class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            phone: 1,//手机验证 0为不通过 1为通过 2为空
            password: "password",//密码为password或者text
            register: false,//注册前对勾的状态
            reBtn: true//注册按钮的状态
        }
    }


    render() {

        const success = () => {
            message.success('恭喜您注册成功');
        };


        return <div className="registerBox">
            <div className="top-bar">
                <Icon type="left-circle-o" onClick={ev => {
                    this.props.history.go(-1)
                }}/>
                <span>注册</span>
            </div>

            <form className="reg-form">
                <div className="form-group mobile">
                    <Icon type="phone" className="phone"/>
                    <select className="country">
                        <option value="+86">中国</option>
                        <option value="+60">马来西亚</option>
                        <option value="+65">新加坡</option>
                        <option value="+44">英国</option>
                        <option value="+1">美国</option>
                        <option value="+81">日本</option>
                        <option value="+886">中国台湾</option>
                        <option value="+853">中国澳门</option>
                        <option value="+852">中国香港</option>
                    </select>
                    <i className="line">|</i>
                    <input type="tel" placeholder="请输入手机号" className="tel" ref="phone"/>

                </div>
                <div className="form-group getCode">
                    <Icon type="safety"/>
                    <input type="text" placeholder="请输入验证码" className="code" ref="code"/>
                    <Button type="success" onClick={this.getCode}>获取验证码</Button>
                </div>
                <div className="form-group password">
                    <Icon type="lock"/>
                    <input type={this.state.password} name="password" ref="password" placeholder="请输入密码"
                           onChange={() => {
                               if (this.refs.code.value === '') {
                                   this.setState({
                                       phone: 2
                                   })
                               }
                           }}/>
                    <span className="eye" onClick={() => {
                        this.setState({
                            password: this.state.password === 'password' ? "text" : "password"
                        })
                    }}>
                        <Icon type={this.state.password === 'password' ? "eye-o" : "eye"}/>
                    </span>
                </div>
                <div className="form-group invite">
                    <Icon type="share-alt"/>
                    <input type="text" placeholder="好友潮流口令（非必填）"/>
                </div>
                <Button type="primary" onClick={success} disabled={this.state.reBtn}>注册</Button>
                <div className="protocol">
                    <Icon type={this.state.register ? "check-circle-o" : ""} onClick={() => {
                        this.setState({
                            register: !this.state.register
                        });
                        if (this.refs.password.value === '') {
                            this.setState({
                                reBtn: true
                            });
                            return;
                        }
                        if (this.state.register) {
                            this.setState({
                                reBtn: true
                            });
                            return;
                        }
                        this.setState({
                            reBtn: false
                        });
                    }}/>
                    我已阅读并同意遵守
                    <a href="#">Yoho!Buy有货服务条款</a>
                </div>
            </form>

            {/*手机号验证不对*/}
            {this.state.phone === 0 ? <Alert
                message="手机格式不对"
                type="error"
                closable
                className="phoneBox"
                onClose={() => {
                    this.setState({phone: false})
                }}
            /> : (this.state.phone === 2 ? <Alert
                message="手机号码不能为空"
                type="error"
                closable
                className="phoneBox"
                onClose={() => {
                    this.setState({phone: false})
                }}
            /> : '')}
        </div>
    }

    getCode = ev => {
        let phone = this.refs.phone.value,
            reg = /[0-9]{11}/;
        if (reg.test(phone)) {
            this.refs.code.value = Math.floor(Math.random() * 900000 + 100000);
            ev.target.setAttribute("disabled", "");
        } else {
            this.setState({
                phone: 0
            })
        }

    };


}

export default connect()(Register);



