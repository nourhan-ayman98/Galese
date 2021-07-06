import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_UPhone(User_ID) {
    official_Store.dispatch({
        type: "GET_UPHONE",
        User_ID: User_ID
    });
    return official_Store.getState().UPhone_reducer.uphone;
};
//Add
export function Add_UPhone(National_ID,User_ID,Email) {
    const state_UPhone = {
       National_ID:"",
       User_ID:"",
       Email:"",
    }
    state_UPhone.National_ID = National_ID;
    state_UPhone.User_ID = User_ID;
    state_UPhone.Email = Email;

    official_Store.dispatch(add_UPhone_dispatch(state_UPhone));
};
//Delete
export function Delete_UPhone(User_ID) {
    official_Store.dispatch(Delete_UPhone_dispatch(User_ID));
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

const add_UPhone_dispatch = (data_) => {
    return ({
        type: "UPHONE_ADD",
        data: data_
    })
    
}

const Delete_UPhone_dispatch = (User_ID) => {
    return ({
        type:"DELETE_UPHONE",
        data: User_ID
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
