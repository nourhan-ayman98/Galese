import official_Store from '../ReduxStores/Store';
//Get Child Patients 
export async function get_Child_Patient(C_ID) {
    official_Store.dispatch({
        type: "GET_CHILD_PATIENT",
        c_ID:C_ID
    });
    return official_Store.getState().Child_Patient_reducer.Child;
};
//Add
export function Add_Child_Patient(C_ID,Age,Case_ID) {
    const state_Child_Patient = {
       C_ID:"",
       Age:"",
       Case_ID:"",
      
    }
    state_Child_Patient.C_ID = C_ID;
    state_Child_Patient.Age = Age;
    state_Child_Patient.Case_ID = Case_ID;

    official_Store.dispatch(add_Child_Patient_dispatch(state_Child_Patient));
};
//Delete
export function Delete_Child_Patient(C_ID) {
    official_Store.dispatch(Delete_Child_Patient_dispatch(C_ID));
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

const add_Child_Patient_dispatch = (data_) => {
    return ({
        type: "CHILD_PATIENT_ADD",
        data: data_
    })
    
}

const Delete_Child_Patient_dispatch = (C_ID) => {
    return ({
        type:"DELETE_CHILD_PATIENT",
        data: C_ID
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
