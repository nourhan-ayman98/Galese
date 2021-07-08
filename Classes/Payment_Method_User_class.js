import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Payment_Method(PM_ID) {
    official_Store.dispatch({
        type: "GET_PAYMENT_METHOD",
        pm_ID:PM_ID
    });
    return official_Store.getState().PaymentMethodUser_reducer.paymentMethod;
};
//Add
export function Add_Payment_Method(PM_ID,National_ID,Email,User_ID,F_ID,C_ID) {
    const state_Payment_Method = {
        PM_ID:"",
        National_ID:"",
        Email:"",
        User_ID:"",
        F_ID:"",
        C_ID:"",
    }
    state_Payment_Method.PM_ID =PM_ID;
    state_Payment_Method.National_ID =National_ID;
    state_Payment_Method.Email =Email;
    state_Payment_Method.User_ID =User_ID;
    state_Payment_Method.F_ID =F_ID;
    state_Payment_Method.C_ID =C_ID;

    official_Store.dispatch(add_Payment_Method_dispatch(state_Payment_Method));
};
//Delete
export function Delete_Payment_Method(PM_ID) {
    official_Store.dispatch(Delete_Payment_Method_dispatch(PM_ID));
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

const add_Payment_Method_dispatch = (data_) => {
    return ({
        type: "PAYMENT_METHOD_ADD",
        data: data_
    })
    
}

const Delete_Payment_Method_dispatch = (PM_ID) => {
    return ({
        type:"DELETE_PAYMENT_METHOD",
        data: PM_ID
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
