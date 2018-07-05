import React from 'react';
import {Row, Col, Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import Body from './Body'

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
            <Body/>
        </div>

    }
}
export default withRouter(Header)