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
export function Add_employee(Email, password) {
    const state_Emploiyee = {
        Email: " ",
        Password: " "
    }
    state_Emploiyee.Email = Email;
    state_Emploiyee.Password = password;
    official_Store.dispatch(add_Employee_dispatch(state_Emploiyee));
};
//Delete
export function Delete_employee(Email) {
    official_Store.dispatch(Delete_Employee_dispatch(Email));
};

//Update //Email
export function Update_employee_Email(Email,newEmail) {

    official_Store.dispatch(Update_Email_Employee_dispatch(Email,newEmail));
};

//Update //Password

export function Update_employee_Password(Email,newpassword) {

    official_Store.dispatch(Update_Password_Employee_dispatch(Email,newpassword));
};



//Dispatches

const get_Employee_dispatch = (Email) => {
   
}
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
const Update_Email_Employee_dispatch = (Email,newEmail) => {
    return ({
        type: "UPDATE_EMAIL_EMPLOYEE",
        oldEmail: Email,
        Newemail:newEmail
    })
}

const Update_Password_Employee_dispatch = (Email_,newpassword) => {
    return ({
        type: "UPDATE_Password_EMPLOYEE",
        Email: Email_,
        newpass:newpassword
    })
}