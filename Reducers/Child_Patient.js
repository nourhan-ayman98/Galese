const inintstate = {
    Child_Patient:[]
};

const Child_Patient_reducer = (state = inintstate, action) => {
    if(action.type=="CHILD_PATIENT_LOAD") {
        state.Child_Patient = action.state_.arraykey;
    }
    else if(action.type=="CHILD_PATIENT_ADD") {
        state.Child_Patient.push(action.data);
        

    }
    else if(action.type== "DELETE_CHILD_PATIENT") {
        const newList = inintstate.Child_Patient.filter((CP) => CP.C_ID !== action.data);
        state.Child_Patient= newList;
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
   else if(action.type=="GET_CHILD_PATIENT") {
        var index;
        for (var i = 0; i < inintstate.Child_Patient.length.valueOf(); i++) {
            if (inintstate.Child_Patient[i].C_ID == action.c_ID) {
                index = i;
            }
        }
        return { ...state, Child: inintstate.Child_Patient[index] };
    }
    return state;
}

export default  Child_Patient_reducer;