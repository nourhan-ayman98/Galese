import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Hospital_Adress(Nurse_ID) {
    official_Store.dispatch({
        type: "GET_NURSE_CERTIFICATES",
        nurse_id: Nurse_ID
    });
    return official_Store.getState().HospitalAddress_reducer.hospital_adress;
};
//Add
export function Add_Hospital_Adress(Nurse_ID,Hospital_adress) {
    const state_Hsopital_Adress = {
        Nurse_ID:"",
        Hospital_adress:"",
    }
    state_Hsopital_Adress.Nurse_ID =Nurse_ID;
    state_Hsopital_Adress.Hospital_adress =Hospital_adress;

    official_Store.dispatch(add_Hospital_Adress_dispatch(state_Hsopital_Adress));
};
//Delete
export function Delete_Hospital_Adress(Nurse_ID) {
    official_Store.dispatch(Delete_Hospital_Adress_dispatch(Nurse_ID));
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

const add_Hospital_Adress_dispatch = (data_) => {
    return ({
        type: "HOSPITAL_ADRESS_ADD",
        data: data_
    })
    
}

const Delete_Hospital_Adress_dispatch = (Nurse_ID) => {
    return ({
        type:"DELETE_HOSPITAL_ADRESS",
        data: Nurse_ID
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
