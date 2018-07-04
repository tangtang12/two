import React from 'react';
import {connect} from 'react-redux'
import {queryMenList} from "../../../api/classify";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: null
        }
    }

   async componentDidMount() {
       let result = await queryMenList("manList");
       if (parseFloat(result.code)===0){
           this.setState({
               data: result.data
           })
       }
    }

    render() {
        let {data} = this.state;
        if (!data) return "";
        console.log(data);


        return <div>

        </div>
    }
}

export default connect()(List)