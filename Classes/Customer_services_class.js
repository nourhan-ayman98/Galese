import official_Store from '../ReduxStores/Store';
//Get Customer services 
export async function get_Customer_services(Email) {
    official_Store.dispatch({
        type: "GETCUSTOMER_SERVICES",
        email: Email
    });
    return official_Store.getState().CustomerServices_reducer.customer_services;
};
//Add
export function Add_Customer_Services(Email,Hotline) {
    const state_CS = {
        Email: " ",
        Hotline: " "
    }
    state_CS.Email = Email;
    state_CS.Hotline = Hotline;
    official_Store.dispatch(add_Customer_services_dispatch(state_CS));
};
//Delete
export function Delete_Customer_services(Email) {
    official_Store.dispatch(Delete_Customer_services_dispatch(Email));
};
//Update //Hotline
export function Update_Hotline_Customer_services(Email,Hotline) {

    official_Store.dispatch(Update_Hotline_Customer_services_dispatch(Email,Hotline));
};
//Dispatches

const add_Customer_services_dispatch = (data_) => {
    return ({
        type: "ADDCUSTOMER_SERVICES",
        data: data_
    })
    
}

const Delete_Customer_services_dispatch = (Email) => {
    return ({
        type: "DELETECUSTOMER_SERVICES",
        data: Email
    })
}
const Update_Hotline_Customer_services_dispatch = (Email_,new_Hotline) => {
    return ({
        type: "UPDATE_HOTLINE_CUSTOMER_SERVICES",
        Email: Email_,
        Hotline:new_Hotline
    })
}