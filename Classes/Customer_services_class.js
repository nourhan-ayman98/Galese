import official_Store from '../ReduxStores/Store';
//Get Customer services 
export async function get_Customer_services(C_ID) {
    official_Store.dispatch({
        type: "GETCUSTOMER_SERVICES",
        c_ID: C_ID
    });
    return official_Store.getState().CustomerServices_reducer.customer_services;
};
//Add
export function Add_Customer_Services(C_ID,E_ID,Hotline) {
    const state_CS = {
        C_ID:"",
        E_ID:"",
        Hotline: " "
    }
    state_CS.C_ID = C_ID;
    state_CS.E_ID = E_ID;
    state_CS.Hotline = Hotline;
    official_Store.dispatch(add_Customer_services_dispatch(state_CS));
};
//Delete
export function Delete_Customer_services(C_ID) {
    official_Store.dispatch(Delete_Customer_services_dispatch(C_ID));
};
/*//Update //Hotline
export function Update_Hotline_Customer_services(Email,Hotline) {

    official_Store.dispatch(Update_Hotline_Customer_services_dispatch(Email,Hotline));
};*/
//Dispatches

const add_Customer_services_dispatch = (data_) => {
    return ({
        type: "ADDCUSTOMER_SERVICES",
        data: data_
    })
    
}

const Delete_Customer_services_dispatch = (C_ID) => {
    return ({
        type: "DELETECUSTOMER_SERVICES",
        data: C_ID
    })
}
/*const Update_Hotline_Customer_services_dispatch = (Email_,new_Hotline) => {
    return ({
        type: "UPDATE_HOTLINE_CUSTOMER_SERVICES",
        Email: Email_,
        Hotline:new_Hotline
    })
}*/