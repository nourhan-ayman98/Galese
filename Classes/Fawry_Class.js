import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Fawry(F_ID) {
    official_Store.dispatch({
        type: "GET_FAWRY",
        f_ID:F_ID
    });
    return official_Store.getState().Fawry_reducer.fawry;
};
//Add
export function Add_Fawry(F_ID,Fawry_Code,Transaction_ID) {
    const state_Fawry = {
        F_ID:"",
        Fawry_Code:"",
        Transaction_ID:"",
    }
    state_Fawry.F_ID =F_ID;
    state_Fawry.Fawry_Code =Fawry_Code;
    state_Fawry.Transaction_ID =Transaction_ID;

    official_Store.dispatch(add_Fawry_dispatch(state_Fawry));
};
//Delete
export function Delete_Fawry(F_ID) {
    official_Store.dispatch(Delete_Fawry_dispatch(F_ID));
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

const add_Fawry_dispatch = (data_) => {
    return ({
        type: "FAWRY_ADD",
        data: data_
    })
    
}

const Delete_Fawry_dispatch = (F_ID) => {
    return ({
        type:"DELETE_FAWRY",
        data: F_ID
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
