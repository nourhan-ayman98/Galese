const inintstate = {
    SitterCertificates:[]
};

const SitterCertificates_reducer = (state = inintstate, action) => {
    if(action.type=="SITTER_CERTIFICATES_LOAD") {
        state.SitterCertificates = action.state_.arraykey;
    }
    else if(action.type=="SITTER_CERTIFICATES_ADD") {
        state.SitterCertificates.push(action.data);
        

    }
    else if(action.type== "DELETE_SITTER_CERTIFICATES") {
        const newList = inintstate.SitterCertificates.filter((SC) => SC.Sitter_ID !== action.data);
        state.SitterCertificates= newList;
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
   else if(action.type=="GET_SITTER_CERTIFICATES") {
        var index;
        for (var i = 0; i < inintstate.SitterCertificates.length.valueOf(); i++) {
            if (inintstate.SitterCertificates[i].Sitter_ID== action.sitter_id) {
                index = i;
            }
        }
        return { ...state, sitter_certificates: inintstate.SitterCertificates[index] };
    }
    return state;
}

export default  SitterCertificates_reducer;