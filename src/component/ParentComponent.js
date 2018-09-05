import React, { Component } from 'react';
import ChildComponent1 from './ChildComponent1';

import {connect} from 'react-redux';
import { updateProfileFirstName} from '../actions/profile-actions'; 

class ParentComponent extends Component{
  constructor (props){
    super(props);
    this.onUpdateProfile = this.onUpdateProfile.bind(this);
  }
  onUpdateProfile() {
      this.props.onUpdateProfile('AXEL');
  }
    render() {
      console.log(this.props);
        return (
          <div>
            <h1>Im the Parent Component</h1>
            <div onClick={this.onUpdateProfile}> update  FirstName</div>
            <div>{this.props.firstName} {this.props.lastName} </div>
            <div>{this.props.bookingId}</div>
            <ChildComponent1/>
          </div>
          
        );
      }
}
const mapStateToProps = state => ({
  lastName: state.profile.lastName,
  firstName: state.profile.firstName,
  bookingId: state.booking.bookingId
}); //Recieve the state of the store
const mapActionToProps = {
  onUpdateProfile: updateProfileFirstName
};//This Maps the Action
export default connect (mapStateToProps,mapActionToProps) (ParentComponent);