import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Health_Status(Case_ID) {
    official_Store.dispatch({
        type: "GET_HEALTH_STATUS",
        case_ID: Case_ID
    });
    return official_Store.getState().HealthStatus_reducer.healthstatus;
};
//Add
export function Add_Health_Status(Case_ID,Health_status) {
    const state_Health_S = {
       Case_ID:"",
       Health_status:"",
    }
    state_Health_S.Case_ID = Case_ID;
    state_Health_S.Health_status = Health_status;
    official_Store.dispatch(add_Health_Status_dispatch(state_Health_S));
};
//Delete
export function Delete_Health_Status(Case_ID) {
    official_Store.dispatch(Delete_Health_Status_dispatch(Case_ID));
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

const add_Health_Status_dispatch = (data_) => {
    return ({
        type: "HEALTH_STATUS_ADD",
        data: data_
    })
    
}

const Delete_Health_Status_dispatch = (Case_ID) => {
    return ({
        type:"DELETE_HEALTH_STATUS",
        data: Case_ID
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
