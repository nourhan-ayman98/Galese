import official_Store from "../ReduxStores/Store";
import { Add_User } from "../Classes/User_Class";
import { Add_Location } from "../Classes/Location_Class";
import write_data from "../Database/close";
import { Add_Loc_Adress } from "../Classes/Loc_Adress_class";
import { Add_UAdress } from "../Classes/U_Address_Class";
import { Add_UPhone } from "../Classes/U_Phone_class";

const Siginup_user = (state_User,state_loc,state_loc_address,state_phone) => {
    // Add Location
    Add_Location(official_Store.getState().Location_reducer.Location.length,state_loc.Country,state_loc.Area,state_loc.Longitude,state_loc.Latitude);
    //Write to Firebase Database
    write_data("Location",official_Store.getState().Location_reducer.Location);
    // Add Location Adress
    Add_Loc_Adress(official_Store.getState().LocAdress_reducer.LocAdress.length
    ,official_Store.getState().Location_reducer.Location.length.valueOf()-1,state_loc_address.Floor_No
    ,state_loc_address.Building_No,state_loc_address.Street_No,state_loc_address.Street_Name,state_loc_address.Apartment_No); 
    //Write to Firebase Database
    write_data("Loc_Address",official_Store.getState().LocAdress_reducer.LocAdress);
    // Add User
    Add_User(state_User.National_ID,official_Store.getState().User_reducer.User.length,0,state_User.Email,
    state_User.Password,state_User.F_Name,state_User.L_Name,state_User.Full_Name,state_User.Gender,
    state_User.Country,state_User.Birthdate,state_User.User_Name,0,0);
    //Write to Firebase Database
    write_data("User",official_Store.getState().User_reducer.User);
     //Add Adress
    Add_UAdress(state_User.National_ID,official_Store.getState().User_reducer.User.length.valueOf()-1,state_User.Email,official_Store.getState().LocAdress_reducer.LocAdress.length.valueOf()-1)
    //Write to Firebase Database
    write_data("U_Address",official_Store.getState().UAdress_reducer.UAdress);
    //Add Phone
    Add_UPhone(state_User.National_ID,official_Store.getState().User_reducer.User.length.valueOf()-1,state_User.Email,state_phone.Phone)
    //Write to Firebase Database
    write_data("U_Phone",official_Store.getState().UPhone_reducer.UPhone);   
}

export default Siginup_user;