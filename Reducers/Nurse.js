const inintstate = {
    Nurse:[]
};

const Nurse_reducer = (state = inintstate, action) => {
    if(action.type=="NURSE_LOAD") {
        state.Nurse = action.state_.arraykey;
    }
    else if(action.type=="NURSE_ADD") {
        state.Nurse.push(action.data);
    }
    else if(action.type== "DELETE_NURSE") {
        const newList = inintstate.Nurse.filter((N) => N.Nurse_ID !== action.data);
        state.Nurse= newList;
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
   else if(action.type=="GET_NURSE") {
        var index;
        for (var i = 0; i < inintstate.Nurse.length.valueOf(); i++) {
            if (inintstate.Nurse[i].Nurse_ID== action.nurse_id) {
                index = i;
            }
        }
        return { ...state, nurse: inintstate.Nurse[index] };
    }
    return state;
}

export default  Nurse_reducer;