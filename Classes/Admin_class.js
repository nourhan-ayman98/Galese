import official_Store from '../ReduxStores/Store';
//Get Admin
export async function get_Admin(A_ID) {
    official_Store.dispatch({
        type: "GETADMIN",
        a_ID: A_ID
    });
    return official_Store.getState().Admin_reducer.admin;
};
//Add
export function Add_admin(A_ID,E_ID) {
    const state_Admin = {
        A_ID:" ",
        E_ID:" ",
    }
    state_Admin.A_ID = A_ID;
    state_Admin.E_ID = E_ID;
    official_Store.dispatch(add_Admin_dispatch(state_Admin));
};
//Delete
export function Delete_admin(A_ID) {
    official_Store.dispatch(Delete_Admin_dispatch(A_ID));
};
//Dispatches

const add_Admin_dispatch = (data_) => {
    return ({
        type: "ADDADMIN",
        data: data_
    })
    
}

const Delete_Admin_dispatch = (A_ID) => {
    return ({
        type: "DELETEADMIN",
        data: A_ID
    })
}