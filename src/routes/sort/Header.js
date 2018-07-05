import React from 'react';
import {Row, Col, Icon} from 'antd';
import {withRouter} from 'react-router-dom';


class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return <div className='sortHeaderBox'>

                <Row>
                    <Col span={4}>
                        <a onClick={() => {
                            this.props.history.go(-1)
                        }}>
                            <Icon type='left'/>
                        </a>
                    </Col>
                    <Col span={10} offset={3}>
                        <h3>任你挑</h3>
                    </Col>
                </Row>

            <div className='sortListBox'>
                <ul>
                    <li><a href="javascript:;" >默认</a></li>
                    <li><a href="javascript:;" >新品</a></li>
                    <li><a href="javascript:;" >人气</a></li>
                    <li><a href="javascript:;" >价格</a> <Icon type='caret-up'/><Icon type='caret-down'/></li>
                </ul>
            </div>
        </div>

    }
}

export default withRouter(Header)