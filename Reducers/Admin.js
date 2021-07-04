const inintstate = {
    Admin:[],
};

const Admin_reducer = (state = inintstate, action) => {
    switch (action.type) {
        case "ADMINLOAD": {
            state.Admin = action.state_.arraykey;
        }
        case "ADDADMIN": {
            state.Admin.push(action.data);
            

        }
        case "DELETEADMIN": {
            const newList = inintstate.Admin.filter((Admin) => Admin.Email !== action.data);
            inintstate.Admin = newList;
        }
        case "UPDATE_EMAIL_EMPLOYEE": {
            for (var i = 0; i < inintstate.Admin.length; i++) {

                if (inintstate.Admin[i].Email == action.oldEmail) {
                    inintstate.Admin[i].Email = action.Newemail;
                    break;
                }
            }

        }
        case "GETADMIN": {
            var index;
            for (var i = 0; i < inintstate.Admin.length; i++) {
                if (inintstate.Admin[i].Email == action.email) {
                    index = i;
                }
            }
            return { ...state, admin: inintstate.Admin[index] };
        }
    }
    return state;
}

export default  Admin_reducer;