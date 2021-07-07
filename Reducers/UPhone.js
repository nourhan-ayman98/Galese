const inintstate = {
    UPhone:[]
};

const UPhone_reducer = (state = inintstate, action) => {
    if(action.type=="UPHONE_LOAD") {
        state.UPhone = action.state_.arraykey;
    }
    else if(action.type=="UPHONE_ADD") {
        state.UPhone.push(action.data);
        

    }
    else if(action.type== "DELETE_UPHONE") {
        const newList = inintstate.UPhone.filter((UP) => UP.User_ID !== action.data);
        state.UPhone= newList;
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
   else if(action.type=="GET_UPHONE") {
        var index;
        for (var i = 0; i < inintstate.UPhone.length.valueOf(); i++) {
            if (inintstate.UPhone[i].User_ID == action.User_ID) {
                index = i;
            }
        }
        return { ...state, uphone: inintstate.UPhone[index] };
    }
    return state;
}

export default  UPhone_reducer;