const inintstate = {
    Sitter:[]
};

const Sitter_reducer = (state = inintstate, action) => {
    if(action.type=="SITTER_LOAD") {
        state.Sitter = action.state_.arraykey;
    }
    else if(action.type=="SITTER_ADD") {
        state.Sitter.push(action.data);
        

    }
    else if(action.type== "DELETE_SITTER") {
        const newList = inintstate.Sitter.filter((S) => S.Sitter_ID !== action.data);
        state.Sitter= newList;
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
   else if(action.type=="GET_SITTER") {
        var index;
        for (var i = 0; i < inintstate.Sitter.length.valueOf(); i++) {
            if (inintstate.Sitter[i].Sitter_ID == action.sitter_id) {
                index = i;
            }
        }
        return { ...state, sitter: inintstate.Sitter[index] };
    }
    return state;
}

export default  Sitter_reducer;