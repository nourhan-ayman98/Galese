const inintstate = {
    Admin:[],
};

const Admin_reducer = (state = inintstate, action) => {
    
        if(action.type=="ADMINLOAD"){
            state.Admin = action.state_.arraykey;
        }
       else if(action.type=="ADDADMIN") {
            state.Admin.push(action.data);
        }
        else if(action.type=="DELETEADMIN") {
<<<<<<< HEAD
            const newList = inintstate.Admin.filter((Admin) => Admin.Email !== action.data);
            inintstate.Admin = newList;
        }
        else if("UPDATE_ADMIN_EMPLOYEE") {
=======
            const newList = inintstate.Admin.filter((Admin) => Admin.A_ID !== action.data);
            inintstate.Admin = newList;
        }
        /*else if("UPDATE_ADMIN_EMPLOYEE") {
>>>>>>> 926ceca (nour)
            for (var i = 0; i < inintstate.Admin.length; i++) {

                if (inintstate.Admin[i].Email == action.oldEmail) {
                    inintstate.Admin[i].Email = action.Newemail;
                    break;
                }
            }

<<<<<<< HEAD
        }
=======
        }*/
>>>>>>> 926ceca (nour)
        else if(action.type=="GETADMIN") {
            var index;
            for (var i = 0; i < inintstate.Admin.length; i++) {
                if (inintstate.Admin[i].A_ID == action.a_ID) {
                    index = i;
                }
            }
            return { ...state, admin: inintstate.Admin[index] };
        }
    
    return state;
}

export default  Admin_reducer;