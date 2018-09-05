import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateProfileLastName} from '../actions/profile-actions'; 
import ChildComponent2 from './ChildComponent2';
class ChildComponent1 extends Component{
    constructor(props){
        super(props);
        this.onUpdateProfile= this.onUpdateProfile.bind(this);
    }
    onUpdateProfile() {
        this.props.onUpdateProfile('LAUREANO');
    }
    render(){
        const { prof } = this.props;
        return (
            <div>
                <h3>Im the ChildComponent1</h3>
                <div onClick={this.onUpdateProfile}> update  LastName</div>
                <div>{this.props.firstName} {this.props.lastName} </div>
                <br/>
                <div>
                    <ChildComponent2/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    lastName: state.profile.lastName,
    firstName: state.profile.firstName
});
const mapActionToProps = {
    onUpdateProfile: updateProfileLastName
};
export default connect(mapStateToProps,mapActionToProps)(ChildComponent1);