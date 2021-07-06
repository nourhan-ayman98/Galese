
import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_User(User_ID) {
    official_Store.dispatch({
        type: "GETUSER",
        User_ID: User_ID
    });
    return official_Store.getState().User_reducer.user;
};
//Add
export function Add_User(National_ID,User_ID,U_ID,Reservation_ID,Email,Password,F_Name,L_Name,Full_Name,
    Gender,Country,Age,User_Name,Nurse_ID,Admin_ID,sitter_ID) {
    const state_User = {
       National_ID:"",
       User_ID:"",
       U_ID:"",
       Reservation_ID:"",
       Email:"",
       Password:"",
       F_Name:"",
       L_Name:"",
       Full_Name:"",
       Gender:"",
       Country:"",
       Age:"",
       User_Name:"",
       Nurse_ID:"",
       Admin_ID:"",
       Sitter_ID:""
    }
    state_User.National_ID = National_ID;
    state_User.User_ID = User_ID;
    state_User.U_ID = U_ID;
    state_User.Reservation_ID = Reservation_ID;
    state_User.Email = Email;
    state_User.Password = Password;
    state_User.F_Name = F_Name;
    state_User.L_Name = L_Name;
    state_User.Full_Name = Full_Name;
    state_User.Gender = Gender;
    state_User.Country =Country;
    state_User.Age = Age;
    state_User.User_Name = User_Name;
    state_User.Nurse_ID =Nurse_ID;
    state_User.Admin_ID = Admin_ID;
    state_User.Sitter_ID = sitter_ID

    official_Store.dispatch(add_User_dispatch(state_User));
};
//Delete
export function Delete_User(User_ID) {
    official_Store.dispatch(Delete_User_dispatch(User_ID));
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

const add_User_dispatch = (data_) => {
    return ({
        type: "ADDUSER",
        data: data_
    })
    
}

const Delete_User_dispatch = (User_ID) => {
    return ({
        type: "DELETEUSER",
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
