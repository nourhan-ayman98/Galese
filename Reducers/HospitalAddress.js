const inintstate = {
    HospitalAddress:[]
};

const HospitalAddress_reducer = (state = inintstate, action) => {
    if(action.type=="HOSPITAL_ADRESS_LOAD") {
        state.HospitalAddress = action.state_.arraykey;
    }
    else if(action.type=="HOSPITAL_ADRESS_ADD") {
        state.HospitalAddress.push(action.data);
        

    }
    else if(action.type== "DELETE_HOSPITAL_ADRESS") {
        const newList = inintstate.HospitalAddress.filter((HA) => HA.Nurse_ID !== action.data);
        state.HospitalAddress= newList;
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
   else if(action.type=="GET_HOSPITAL_ADRESS") {
        var index;
        for (var i = 0; i < inintstate.HospitalAddress.length.valueOf(); i++) {
            if (inintstate.HospitalAddress[i].Nurse_ID== action.nurse_id) {
                index = i;
            }
        }
        return { ...state, hospital_adress: inintstate.HospitalAddress[index] };
    }
    return state;
}

export default  HospitalAddress_reducer;