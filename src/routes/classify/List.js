import React from 'react';
import {connect} from 'react-redux'
import {queryMenList} from '../../api/classify'
import Right from './Right';
class List extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            keys: [], index: 0,data:[]
        }
    }

    async componentWillMount() {
        let result = await queryMenList(this.props.type);
        this.data = result.data;
        let keys = [];
        for (let key in result.data) {
            keys.push(key);
        }

        this.keys = keys;
        this.setState({
            keys
        });
    }

    render() {
        let keys = this.state.keys;
        if (keys.length === 0) return "";
        return <div className='menListBox'>
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

            <div className='right'>
                <Right data={this.fn(this.state.index)}/>
            </div>
        </div>
    }

    fn = (index) => {
        return this.data[this.state.keys[index]];
    }


}

export default connect()(List);