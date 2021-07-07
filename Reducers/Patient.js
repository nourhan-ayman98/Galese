const inintstate = {
    Patient:[]
};

const Patient_reducer = (state = inintstate, action) => {
    if(action.type=="PATIENT_LOAD") {
        state.Patient = action.state_.arraykey;
    }
    else if(action.type=="PATIENT_ADD") {
        state.Patient.push(action.data);
        

    }
    else if(action.type== "DELETE_PATIENT") {
        const newList = inintstate.Patient.filter((P) => P.Case_ID !== action.data);
        state.Patient= newList;
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
   else if(action.type=="GET_PATIENT") {
        var index;
        for (var i = 0; i < inintstate.Patient.length.valueOf(); i++) {
            if (inintstate.Patient[i].Case_ID == action.case_ID) {
                index = i;
            }
        }
        return { ...state, patient: inintstate.Patient[index] };
    }
    return state;
}

export default  Patient_reducer;