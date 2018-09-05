import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateBookingId} from '../actions/booking-actions';

class ChildComponent2 extends Component{
    constructor(props){
        super(props);
        this.onUpdateBookingId = this.onUpdateBookingId.bind(this);
    }
    onUpdateBookingId(){
        this.props.onUpdateBookingId("33");
    }
    render () {
        return (
            <div>
                <h4> Im the 2nd Child Component</h4>
                <div onClick={this.onUpdateBookingId}> update Booking Id</div>
                <div>{this.props.bookingId}</div>
            </div>
        );
    }
    
}
const mapStateToProps = state => ({
    bookingId: state.booking.bookingId
});
const mapActionToProps = {
    onUpdateBookingId: updateBookingId
};
export default connect(mapStateToProps,mapActionToProps)(ChildComponent2);