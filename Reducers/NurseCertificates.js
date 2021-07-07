const inintstate = {
    NurseCertificates:[]
};

const NurseCertificates_reducer = (state = inintstate, action) => {
    if(action.type=="NURSE_CERTIFICATES_LOAD") {
        state.NurseCertificates = action.state_.arraykey;
    }
    else if(action.type=="NURSE_CERTIFICATES_ADD") {
        state.NurseCertificates.push(action.data);
        

    }
    else if(action.type== "DELETE_NURSE_CERTIFICATES") {
        const newList = inintstate.NurseCertificates.filter((NC) => NC.Nurse_ID !== action.data);
        state.NurseCertificates= newList;
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
   else if(action.type=="GET_NURSE_CERTIFICATES") {
        var index;
        for (var i = 0; i < inintstate.NurseCertificates.length.valueOf(); i++) {
            if (inintstate.NurseCertificates[i].Nurse_ID== action.nurse_id) {
                index = i;
            }
        }
        return { ...state, nurse_certificates: inintstate.NurseCertificates[index] };
    }
    return state;
}

export default  NurseCertificates_reducer;