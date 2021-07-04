import official_Store from '../ReduxStores/Store';
//Get Admin
export async function get_Admin(Email) {
    official_Store.dispatch({
        type: "GETADMIN",
        email: Email
    });
    return official_Store.getState().Admin_reducer.admin;
};
//Add
export function Add_admin(Email) {
    official_Store.dispatch(add_Admin_dispatch(Email));
};
//Delete
export function Delete_admin(Email) {
    official_Store.dispatch(Delete_Admin_dispatch(Email));
};
//Dispatches

const add_Admin_dispatch = (data_) => {
    return ({
        type: "ADDADMIN",
        data: data_
    })
    
}

const Delete_Admin_dispatch = (Email) => {
    return ({
        type: "DELETEADMIN",
        data: Email
    })
}