import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Track_Payment(TP_Id) {
    official_Store.dispatch({
        type: "GET_TRACK_PAYMENT",
        tp_Id:TP_Id
    });
    return official_Store.getState().TrackPayment_reducer.track_payment;
};
//Add
export function Add_Track_Payment(TP_Id,E_ID,Transaction_ID) {
    const state_Payment_Track = {
        TP_Id:"",
        E_ID:"",
        Transaction_ID:""
    }
    state_Payment_Track.TP_Id =TP_Id;
    state_Payment_Track.E_ID =E_ID;
    state_Payment_Track.Transaction_ID =Transaction_ID;
   

    official_Store.dispatch(add_Track_Payment_dispatch(state_Payment_Track));
};
//Delete
export function Delete_Track_Payment(TP_Id) {
    official_Store.dispatch( Delete_Track_Payment_dispatch(TP_Id));
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

const add_Track_Payment_dispatch = (data_) => {
    return ({
        type: "TRACK_PAYMENT_ADD",
        data: data_
    })
    
}

const Delete_Track_Payment_dispatch = (TP_Id) => {
    return ({
        type:"DELETE_TRACK_PAYMENT",
        data: TP_Id
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
