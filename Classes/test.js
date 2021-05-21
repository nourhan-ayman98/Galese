import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { getUserData } from '../Classes/Data_base';
import { get_User_Data } from '../Actions/DatabaseAction';
class Return_data extends Component {

    state={
        users:[]
    }
    componentDidMount(){
        const users=getUserData();
        this.state.users=users;
        
    }
    render() {
        return (
            <div>
                {console.log(getUserData(this.state))}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        users_statte: state
    }
}
function mapDispatch(dispatch) {
    const state = getUserData();
    return {
        getdata: () => dispatch(get_User_Data(state))
    }

}
export default connect(mapStateToProps, mapDispatch)(Return_data);