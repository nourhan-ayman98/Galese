import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_UAdress(User_ID) {
    official_Store.dispatch({
        type: "GET_UADRESS",
        User_ID: User_ID
    });
    return official_Store.getState().UAdress_reducer.uadress;
};
//Add
export function Add_UAdress(National_ID,User_ID,Email,Floor_No,Building_No,Street_No
    ,Street_Name,Apartment_No) {
    const state_UAdress = {
       National_ID:"",
       User_ID:"",
       Email:"",
       Floor_No:"",
       Building_No:"",
       Street_No:"",
       Full_Name:"",
       Street_Name:"",
       Apartment_No:"",
    }
    state_UAdress.National_ID = National_ID;
    state_UAdress.User_ID = User_ID;
    state_UAdress.Email = Email;
    state_UAdress.Floor_No = Floor_No;
    state_UAdress.Building_No = Building_No;
    state_UAdress.Street_No = Street_No;
    state_UAdress.Street_Name = Street_Name;
    state_UAdress.Apartment_No = Apartment_No;

    official_Store.dispatch(add_UAdress_dispatch(state_UAdress));
};
//Delete
export function Delete_UAdress(User_ID) {
    official_Store.dispatch(Delete_UAdress_dispatch(User_ID));
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

const add_UAdress_dispatch = (data_) => {
    return ({
        type: "UADRESS_ADD",
        data: data_
    })
    
}

const Delete_UAdress_dispatch = (User_ID) => {
    return ({
        type:"DELETE_UADRESS",
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
