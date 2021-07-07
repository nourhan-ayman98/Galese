import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Sitter_Certificates(Sitter_ID) {
    official_Store.dispatch({
        type: "GET_SITTER_CERTIFICATES",
        sitter_id: Sitter_ID
    });
    return official_Store.getState().SitterCertificates_reducer.sitter_certificates;
};
//Add
export function Add_Sitter_certificate(Sitter_ID,Certificate) {
    const state_Sitter_certificate = {
        Sitter_ID:"",
        Certificate:"",
    }
    state_Sitter_certificate.Sitter_ID =Sitter_ID;
    state_Sitter_certificate.Certificate =Certificate;

    official_Store.dispatch(add_Sitter_Certificates_dispatch(state_Sitter_certificate));
};
//Delete
export function Delete_Sitter_Certificates(Sitter_ID) {
    official_Store.dispatch(Delete_Sitter_Certificates_dispatch(Sitter_ID));
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

const add_Sitter_Certificates_dispatch = (data_) => {
    return ({
        type: "SITTER_CERTIFICATES_ADD",
        data: data_
    })
    
}

const Delete_Sitter_Certificates_dispatch = (Sitter_ID) => {
    return ({
        type:"DELETE_SITTER_CERTIFICATES",
        data: Sitter_ID
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
