import official_Store from "../ReduxStores/Store";
import { get_User } from "../Classes/User_Class";

const Siginin_user = (Email, password) => {
    const user = official_Store.getState().User_reducer.User.find(user => user.Email == Email);
    const state = {
    }
    if (user == undefined) {
        const Employee = official_Store.getState().Employee_reducer.Employees.find(Employee => Employee.Email == Email);
        if (Employee == undefined) {
            return false;
        }
        else if (Employee.Password !== password) {
            return false;
        }
        else if (Employee.Password == password) {
            const ifAdminornot = official_Store.getState().Admin_reducer.Admin.find(Admin => Admin.E_ID == Employee.E_ID);
            if (ifAdminornot != undefined) {
               
                state.Kind = 0             //Admin
                state.Admin_ID = Employee.E_ID;
                return state;
            }

        }
    }
    else if (user.Password !== password) {
        return false;
    }
    else if (user.Nurse_ID === 0 && user.Sitter_ID === 0) {
        state.Kind = 1             //Client
        state.User_ID = user.User_ID;
        return state;
    }
    else if (user.Sitter_ID !== 0) {
        state.Kind = 2             //Sitter
        state.User_ID = user.User_ID;
        return state;
    }
    else if (user.Nurse_ID !== 0) {
        state.Kind = 3             //Nurse
        state.User_ID = user.User_ID;
        return state;
    } 
}

export default Siginin_user;