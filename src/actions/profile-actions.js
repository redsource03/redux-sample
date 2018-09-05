 export const UPDATE_PROFILE_FIRSTNAME = 'profile:updateFirstName';
 export const UPDATE_PROFILE_LASTNAME = 'profile:updateLastName';

 export function updateProfileFirstName(newProfile){
     return {
         type: UPDATE_PROFILE_FIRSTNAME,
         profile: {
             firstName: newProfile
         }
     }
 }
 export function updateProfileLastName(newLastName){
     return{
         type: UPDATE_PROFILE_LASTNAME,
         profile:{
             lastName:newLastName
         }
     }
 }
