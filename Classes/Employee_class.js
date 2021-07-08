import official_Store from '../ReduxStores/Store';



//Get Employee
export async function get_employee(Email) {
    official_Store.dispatch({
        type: "GETEMPLOYEE",
        email: Email
    });
    return official_Store.getState().Employee_reducer.employee;
};
//Add
export function Add_employee(E_ID,Email, password) {
    const state_Emploiyee = {
        E_ID:" ",
        Email: " ",
        Password: " "
    }
    state_Emploiyee.E_ID=E_ID;
    state_Emploiyee.Email = Email;
    state_Emploiyee.Password = password;
    official_Store.dispatch(add_Employee_dispatch(state_Emploiyee));
};
//Delete
export function Delete_employee(Email) {
    official_Store.dispatch(Delete_Employee_dispatch(Email));
};


//Update //Password

export function Update_employee_Password(Email,newpassword) {

    official_Store.dispatch(Update_Password_Employee_dispatch(Email,newpassword));
};



//Dispatches
const add_Employee_dispatch = (data_) => {
    return ({
        type: "ADDEMPLOYEE",
        data: data_
    })
    
}

const Delete_Employee_dispatch = (Email) => {
    return ({
        type: "DELETEEMPLOYEE",
        data: Email
    })
}
const Update_Password_Employee_dispatch = (Email_,newpassword) => {
    return ({
        type: "UPDATE_Password_EMPLOYEE",
        Email: Email_,
        newpass:newpassword
    })
}