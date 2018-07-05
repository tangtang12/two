import React from 'react';
import {Row, Col, Icon} from 'antd';
import {withRouter,NavLink} from 'react-router-dom';
import Transition from 'react-transition-group/Transition'

const duration = 300,
    defaultStyle = {
        transition: `opacity ${duration}ms`,
        opacity: 0
    },
    transitionStyles = {
        entering: {opacity: 0}, entered: {opacity: 1}
    };


class Top extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            in: false
        }
    }

    render() {
        return <div className='top'>
            <Row>
                <Col span={4}>
                    <a onClick={() => {
                        this.props.history.go(-1)
                    }}>
                        <Icon type='left'/>
                    </a>
                </Col>
                <Col span={10} offset={3}>
                    <h3>有货逛不停</h3>
                </Col>
                <Col span={4} offset={3}>
                    <a href="javascript:;" onClick={this.handleClick}>
                        <Icon type='menu-unfold'/>
                    </a>
                </Col>
            </Row>
            <Transition in={this.state.in} timeout={0}>
                {state => {
                    return <ul className='filterBox' onClick={this.handleClick} style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        display: this.state.in ? 'block' : 'none'

                    }}>
                        <li> <NavLink to='/home'>
                            <Icon type='home'/>
                            <span>首页</span>
                        </NavLink></li>
                        <li> <NavLink to='/classify'>
                            <Icon type='appstore-o'/>
                            <span>分类</span>
                        </NavLink></li>
                        <li>  <NavLink to='/cart'>
                            <Icon type='shopping-cart'/>
                            <span>购物车</span>
                        </NavLink></li>
                        <li> <NavLink to='/self'>
                            <Icon type='user'/>
                            <span>我的</span>
                        </NavLink></li>
                    </ul>
                }}
            </Transition>
        </div>
    }

    handleClick = ev => {
        this.setState({in: !this.state.in}
        )
    }
}

export default withRouter(Top)