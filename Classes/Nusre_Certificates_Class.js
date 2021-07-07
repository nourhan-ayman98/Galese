import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Nusre_Certificates(Nurse_ID) {
    official_Store.dispatch({
        type: "GET_NURSE_CERTIFICATES",
        nurse_id: Nurse_ID
    });
    return official_Store.getState().NurseCertificates_reducer.nurse_certificates;
};
//Add
export function Add_Nusre_certificate(Nurse_ID) {
    const state_Nurse_certificate = {
        Nurse_ID:"",
    }
    state_Nurse_certificate.Nurse_ID =Nurse_ID;

    official_Store.dispatch(add_Nusre_Certificates_dispatch(state_Nurse_certificate));
};
//Delete
export function Delete_Nurse_Certificates(Nurse_ID) {
    official_Store.dispatch(Delete_Nurse_Certificates_dispatch(Nurse_ID));
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

const add_Nusre_Certificates_dispatch = (data_) => {
    return ({
        type: "NURSE_CERTIFICATES_ADD",
        data: data_
    })
    
}

const Delete_Nurse_Certificates_dispatch = (Nurse_ID) => {
    return ({
        type:"DELETE_NURSE_CERTIFICATES",
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
