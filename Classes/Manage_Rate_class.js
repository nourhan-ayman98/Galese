import official_Store from '../ReduxStores/Store';
//Get Customer services 
export async function get_Manage_Rate(Email) {
    official_Store.dispatch({
        type: "GETMANAGE_RATE",
        email: Email
    });
    return official_Store.getState().ManageRate_reducer.manage_rate;
};
//Add
export function Add_Manage_Rate(Email,Us_ID,Review_ID) {
    const state_MR = {
        Email: " ",
        Us_ID:0,
        Review_ID:0
    }
    state_MR.Email = Email;
    state_MR.Us_ID=Us_ID;
    state_MR.Review_ID = Review_ID;
    official_Store.dispatch(add_Manage_Rate_dispatch(state_MR));
};
//Delete
export function Delete_Manage_Rate(Email) {
    official_Store.dispatch(Delete_Manage_Rate_dispatch(Email));
};

//Update //Email
export function Update_Manage_Rate_Email(Email,newEmail) {

    official_Store.dispatch(Update_Email_Manage_Rate_dispatch(Email,newEmail));
};
//Update //ReviewID
export function Update_ReviewID_Manage_Rate(Email,Review_ID) {

    official_Store.dispatch(Update_ReviewID_Manage_Rate_dispatch(Email,Review_ID));
};
//Update //UsID
export function Update_USID_Manage_Rate(Email,UsID) {

    official_Store.dispatch(Update_USID_Manage_Rate_dispatch(Email,UsID));
};
//Dispatches

const add_Manage_Rate_dispatch = (data_) => {
    return ({
        type: "ADDMANAGE_RATE",
        data: data_
    })
    
}

const Delete_Manage_Rate_dispatch = (Email) => {
    return ({
        type: "DELETEMANAGE_RATE",
        data: Email
    })
}
const Update_Email_Manage_Rate_dispatch = (Email,newEmail) => {
    return ({
        type: "UPDATE_EMAIL_MANAGE_RATE",
        oldEmail: Email,
        Newemail:newEmail
    })
}
const Update_ReviewID_Manage_Rate_dispatch = (Email_,Review_ID_) => {
    return ({
        type: "UPDATE_Review_ID_MANAGE_RATE",
        Email: Email_,
        Review_ID:Review_ID_
    })
}
const Update_USID_Manage_Rate_dispatch = (Email_,UsID) => {
    return ({
        type: "UPDATE_Us_ID_MANAGE_RATE",
        Email: Email_,
        usid:UsID
    })
}