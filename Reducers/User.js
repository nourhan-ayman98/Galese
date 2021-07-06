const inintstate = {
    User:[]
};

const User_reducer = (state=inintstate,action) => {
    if(action.type=="USERLOAD") {
        state.User = action.state_.arraykey;
    }
    else if(action.type=="ADDUSER") {
        state.User.push(action.data);
        

    }
    else if(action.type== "DELETEUSER") {
        const newList = inintstate.User.filter((U) => U.User_ID !== action.data);
        state.User= newList;
    }
    /*else if(action.type=="UPDATE_COUNTRY_LOCATION") {
        for (var i = 0; i < inintstate.Location.length.valueOf(); i++) {

            if (inintstate.Location[i].U_ID== action.u_id) {
                inintstate.Location[i].Country = action.country;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_AREA_LOCATION") {
        for (var i = 0; i < inintstate.Location.length.valueOf(); i++) {

            if (inintstate.Location[i].U_ID == action.u_id) {
                inintstate.Location[i].Area  = action.area;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_LONGITUDE_LOCATION") {
        for (var i = 0; i < inintstate.Location.length.valueOf(); i++) {

            if (inintstate.Location[i].U_ID == action.u_id) {
                inintstate.Location[i].Longitude = action.longitude;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_LATITUDE_LOCATION") {
        for (var i = 0; i < inintstate.Location.length.valueOf(); i++) {

            if (inintstate.Location[i].U_ID == action.u_id) {
                inintstate.Location[i].Latitude = action.latitude;
                break;
            }
        }

    }*/
   else if(action.type=="GETUSER") {
        var index;
        for (var i = 0; i < inintstate.User.length.valueOf(); i++) {
            if (inintstate.User[i].User_ID == action.User_ID) {
                index = i;
            }
        }
        return { ...state, user: inintstate.User[index] };
    }
    return state;
}

export default  User_reducer;