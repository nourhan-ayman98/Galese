import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Track_Location(Email) {
    official_Store.dispatch({
        type: "GET_TRACK_LOCATION",
        email: Email
    });
    return official_Store.getState().TrackLocation_reducer.track_location;
};
//Add
export function Add_Track_Location(Email,User_ID) {
    const state_Track_Location = {
       Email:"",
       User_ID:"",
    }
    state_Track_Location.Email = Email;
    state_Track_Location.User_ID = User_ID;
    official_Store.dispatch(add_Track_Location_dispatch(state_Track_Location));
};
//Delete
export function Delete_Track_Location(Email) {
    official_Store.dispatch(Delete_Track_Location_dispatch(Email));
};

/*//Update //USID
export function Update_usid_User_Rate(User_ID,new_Usid) {

    official_Store.dispatch(Update_usid_User_Rate_dispatch(User_ID,new_Usid));
};
//Update //REVIEWID
export function Update_review_id_User_Rate(User_ID,Review_ID) {

    official_Store.dispatch(Update_review_id_User_Rate_dispatch(User_ID,Review_ID));
};
//Update //NationalID
export function Update_National_ID_User_Rate(User_ID,National_ID) {

    official_Store.dispatch(Update_NationalID_User_Rate_dispatch(User_ID,National_ID));
};
//Update //Email
export function Update_Email_User_Rate(User_ID,Email) {

    official_Store.dispatch(Update_Email_User_Rate_dispatch(User_ID,Email));
};*/
//Dispatches

const add_Track_Location_dispatch = (data_) => {
    return ({
        type: "ADD_TRACK_LOCATION",
        data: data_
    })
    
}

const Delete_Track_Location_dispatch = (Email) => {
    return ({
        type: "DELETE_TRACK_LOCATION",
        data: Email
    })
}
/*const Update_usid_User_Rate_dispatch = (User_ID,Us_id) => {
    return ({
        type: "UPDATE_US_ID_USER_RATE",
        user_id: User_ID,
        usid:Us_id
    })
}
const Update_review_id_User_Rate_dispatch = (User_ID,Review_ID) => {
    return ({
        type: "UPDATE_REVIEW_ID_USER_RATE",
        user_id: User_ID,
        review_id:Review_ID
    })
}
const Update_NationalID_User_Rate_dispatch = (User_ID,National_ID) => {
    return ({
        type: "UPDATE_NATITIONAL_ID_USER_RATE",
        user_id: User_ID,
        National_ID:National_ID
    })
}
const Update_Email_User_Rate_dispatch = (User_ID,Email) => {
    return ({
        type: "UPDATE_EMAIL_USER_RATE",
        user_id: User_ID,
        Email:Email
    })
}*/
