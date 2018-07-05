import React from "react";
import {connect} from "react-redux";
import {Icon, Button, message} from "antd";
import "../../static/css/register.less";
import {register} from "../../api/person";
import md5 from "blueimp-md5";

class Register extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {


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
                    <input type="tel" placeholder="请输入手机号(11位)" className="tel" ref="phone"/>

                </div>
                <div className="form-group getCode">
                    <Icon type="safety"/>
                    <input type="text" placeholder="请输入验证码" className="code" ref="code"/>
                    <Button type="success" onClick={this.getCode}>获取验证码</Button>
                </div>
                <div className="form-group password">
                    <Icon type="lock"/>
                    <input type="password" name="password" placeholder="请输入密码(6~15位)" ref="password"/>
                    <span className="eye">
                        <Icon type="eye-o"/>
                    </span>
                </div>
                <div className="form-group invite">
                    <Icon type="share-alt"/>
                    <input type="text" placeholder="好友潮流口令（非必填）"/>
                </div>
                <Button className="regBtn" onClick={this.register}>注册</Button>
                <div className="protocol">
                    <Icon type="check-circle-o"/>
                    我已阅读并同意遵守
                    <a href="#">Yoho!Buy有货服务条款</a>
                </div>
            </form>
        </div>
    }

    getCode = ev => {
        this.refs.code.value = Math.floor(Math.random() * 900000 + 100000);
        ev.target.setAttribute("disabled", "");
    };

    register = async ev => {
        //message.success('恭喜您注册成功');
        let phone = this.refs.phone.value,
            password = this.refs.password.value;
        if (phone.length !== 11 || password.length <= 6 || password.length >= 15) {
            message.error("正确输入信息才能注册哦");
            return;
        }
        password = md5(password);

        let result = await register({phone, password, name: phone});
        if (result.code === 0) {
            message.success('恭喜您注册成功');
            this.props.history.go(-1);
        }
    };
}


export default connect()(Register);
















