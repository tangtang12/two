import React from "react";
import {Modal, Button} from 'antd';
import {withRouter} from "react-router-dom";
import {connect}from 'react-redux';
import action from "../store/action"
import {pay, Unpay} from "../api/car.js"

class Pay extends React.Component {
    state = {
        ModalText: '有钱吗?有钱吗？',

        visible: false,
        confirmLoading: false,
    }

    showModal = () => {
        console.log(this.props);

        if (this.props.num === 0) {
            this.setState({
                ModalText: '选个东西在结算吧！！', visible: true,
            })
            return
        }
        this.setState({
            ModalText: '有钱吗?有钱吗？', visible: true,
        })
    }

    handleOk = () => {
        if (this.props.num === 0) {
            this.setState({
                ModalText: '正在退出...',
                visible: false,

            })
        } else {
            this.setState({
                ModalText: '正在结算中...',
                confirmLoading: true,
            });

            setTimeout(async () => {
                this.setState({
                    visible: false,
                    confirmLoading: false,
                });

                let res = await pay();
                if (res.code === 0) {
                    window.location.reload()
                }


            }, 1000);
        }


    }

    handleCancel = async () => {
        if (this.props.num === 0) return this.setState({
            visible: false,
        })

        let resu = await Unpay();

        if (resu.code === 0) {
            window.location.reload()
        }

    }

    render() {
        const {visible, confirmLoading, ModalText} = this.state;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>{this.props.text}</Button>
                <Modal title="有钱吗？"
                       visible={visible}
                       onOk={this.handleOk}
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}

export default withRouter(connect(null,action.cart)(Pay))