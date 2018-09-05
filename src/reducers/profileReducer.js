
import {UPDATE_PROFILE_FIRSTNAME} from '../actions/profile-actions';
import {UPDATE_PROFILE_LASTNAME} from '../actions/profile-actions';
import update from 'react-addons-update';


const initialState = [];

const profileReducer = (state = initialState, action) => {
  switch (action.type){
    case UPDATE_PROFILE_FIRSTNAME:
      return update(state,{firstName:{$set: action.profile.firstName}});
    case UPDATE_PROFILE_LASTNAME:
      return update(state,{lastName:{$set: action.profile.lastName}});
    default: return state;
    
  }
}

export default profileReducer;