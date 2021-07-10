const inintstate = {
    Elder_Patient:[]
};

const Elder_Patient_reducer = (state = inintstate, action) => {
    if(action.type=="ELDER_PATIENT_LOAD") {
        state.Elder_Patient = action.state_.arraykey;
    }
    else if(action.type=="ELDER_PATIENT_ADD") {
        state.Elder_Patient.push(action.data);
        

    }
    else if(action.type== "DELETE_ELDER_PATIENT") {
        const newList = inintstate.Elder_Patient.filter((EP) => EP.Elder_ID !== action.data);
        state.Elder_Patient= newList;
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
   else if(action.type=="GET_ELDER_PATIENT") {
        var index;
        for (var i = 0; i < inintstate.Elder_Patient.length.valueOf(); i++) {
            if (inintstate.Elder_Patient[i].Elder_ID == action.elder_ID) {
                index = i;
            }
        }
        return { ...state, Elder: inintstate.Elder_Patient[index] };
    }
    return state;
}

export default  Elder_Patient_reducer;