import official_Store from '../ReduxStores/Store';
//Get Disease Names
export async function get_Disease_Name(Disease_ID) {
    official_Store.dispatch({
        type: "GET_NAME_DISEASE",
        disease_ID: Disease_ID
    });
    return official_Store.getState().DiseaseName_reducer.DN;
};
//Add
export function Add_Disease_Name(Disease_ID,Disease_Name) {
    const state_Disease_Name = {
       Disease_ID:"",
       Disease_Name:"",
    }
    
    state_Disease_Name.Disease_ID=Disease_ID;
    state_Disease_Name.Disease_Name =Disease_Name;

    official_Store.dispatch(add_Disease_Name_dispatch(state_Disease_Name));
};
//Delete
export function Delete_Disease_Name(Disease_ID) {
    official_Store.dispatch(Delete_Disease_Name_dispatch(Disease_ID));
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

const add_Disease_Name_dispatch= (data_) => {
    return ({
        type:"DISEASE_SYMPT_ADD",
        data: data_
    })
    
}

const Delete_Disease_Name_dispatch = (Disease_ID) => {
    return ({
        type:"DELETE_SYMPT_DISEASE",
        data: Disease_ID
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
