import {UPDATE_BOOKING_ID} from '../actions/booking-actions';
import update from 'react-addons-update';
const initialState = [];

const bookingReducer = (state=initialState,action)=>{
    switch(action.type){
        case UPDATE_BOOKING_ID:
            return update(state,{bookingId:{
                    $set:action.booking.bookingId
                }
            });
        default: return state;
    }
}
export default bookingReducer;