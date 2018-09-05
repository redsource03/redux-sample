export const UPDATE_BOOKING_ID = 'booking:updateBookingId';
export const UPDATE_BOOKING_TYPE = 'booking:updateBookingType';

export function updateBookingId(newBookingId){
    return {
        type: UPDATE_BOOKING_ID,
        booking: {
            bookingId : newBookingId
        }
    }
}
export function updateBookingType(newBookingType){
    return{
        type:UPDATE_BOOKING_TYPE,
        booking: {
            bookingType: newBookingType
        }
    }
}