import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Loc_adress(U_ID) {
    official_Store.dispatch({
        type: "GETLOC_ADRESS",
        u_id: U_ID
    });
    return official_Store.getState().LocAdress_reducer.loc_adress;
};
//Add
export function Add_Loc_Adress(U_Loc_adress_ID,U_ID,Floor_No,Building_No,Street_No,Street_Name,Apartment_No) {
    const state_Loc_Adress = {
       U_Loc_adress_ID:"",
       Floor_No:"",
       Building_No:"",
       Street_No:"",
       Street_Name:"",
       Apartment_No:"",
       U_ID:""
    }
    state_Loc_Adress.U_Loc_adress_ID = U_Loc_adress_ID;
    state_Loc_Adress.Floor_No = Floor_No;
    state_Loc_Adress.Building_No= Building_No;
    state_Loc_Adress.Street_No = Street_No;
    state_Loc_Adress.Street_Name = Street_Name;
    state_Loc_Adress.Apartment_No=Apartment_No;
    state_Loc_Adress.U_ID=U_ID;
   
    official_Store.dispatch(add_Loc_Adress_dispatch(state_Loc_Adress));
};
//Delete
export function Delete_Loc_Adress(U_ID) {
    official_Store.dispatch(Delete_Loc_Adress_dispatch(U_ID));
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

const add_Loc_Adress_dispatch = (data_) => {
    return ({
        type: "ADDLOC_ADRESS",
        data: data_
    })
    
}

const Delete_Loc_Adress_dispatch = (U_ID) => {
    return ({
        type: "DELETELOC_ADRESS",
        data: U_ID
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
