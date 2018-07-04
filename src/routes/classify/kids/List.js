import React from 'react';
import {connect} from 'react-redux'
import {queryMenList} from '../../../api/classify'
import {Link} from 'react-router-dom'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            keys: [], index: 0
        }
    }

    async componentWillMount() {
        let result = await queryMenList('kidsList');
        this.data = result.data;
        let keys = [];
        for (let key in result.data) {
            keys.push(key);
        };
        this.keys = keys;
        this.setState({
            keys
        });
        console.log(result);
    }

    render() {
        let keys = this.state.keys;
        if (keys.length === 0) return "";
        return <div>
            <div className='menListBox'>
                <ul>
                    {keys.map((item, index) => {
                        return <li key={index}><a onClick={() => {
                            this.setState({
                                index
                            });
                        }
                        }>{item}</a></li>
                    })}
                </ul>
            </div>

            <span>—热门推荐—</span>
            <div className='menImgBox'>

                <div><Link to='/classify'><img src="//gw.alicdn.com/bao/uploaded/TB15UXtXhZIL1JjSZFNwu0upXXa.png_q75.jpg"
                                               alt=""/></Link></div>
            </div>


        </div>

    }

    fn = () => {
        let data = this.data[this.state.keys[this.state.index]];
        for (let attr in data) {
            console.log(data[attr]);
            return attr;
        }
    }

}

export default connect()(List);