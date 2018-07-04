import React from 'react';
import {Row, Col, Icon} from 'antd';

export default class Top extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className='top'>
            <Row>
                <Col span={4}>
                    <a href="javascript:;">
                        <Icon type='left'/>
                    </a>
                </Col>
                <Col span={10} offset={3}>
                    <h3>有货逛不停</h3>
                </Col>
                <Col span={4} offset={3}>
                    <a href="javascript:;">
                        <Icon type='menu-unfold'/>
                    </a>
                </Col>
            </Row>
        </div>
    }
}