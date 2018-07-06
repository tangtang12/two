import React from "react";
import { Modal, Button } from 'antd';
import {withRouter} from "react-router-dom"
import {pay ,Unpay}from "../api/car.js"

class App extends React.Component {
  state = {
    ModalText: '有钱吗?有钱吗？',

    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: '正在结算中...',
      confirmLoading: true,
    });
    setTimeout(async () => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });

     let res=await pay();
        if (res.code===0){
            window.location.reload()
        }



    }, 1000);
  }

  handleCancel =async () => {

    this.setState({
      visible: false,
    });
      let resu=await Unpay();
      if (resu.code===0){
          window.location.reload()
      }

  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
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

export default withRouter(App);