const inintstate = {
    Disease:[]
};

const Disease_reducer = (state = inintstate, action) => {
    if(action.type=="DISEASE_LOAD") {
        state.Disease = action.state_.arraykey;
    }
    else if(action.type=="DISEASE_ADD") {
        state.Disease.push(action.data);
        

    }
    else if(action.type== "DELETE_DISEASE") {
        const newList = inintstate.Disease.filter((D) => D.Disease_ID !== action.data);
        state.Disease= newList;
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
   else if(action.type=="GET_DISEASE") {
        var index;
        for (var i = 0; i < inintstate.Disease.length.valueOf(); i++) {
            if (inintstate.Disease[i].Disease_ID == action.disease_ID) {
                index = i;
            }
        }
        return { ...state, Disease: inintstate.Disease[index] };
    }
    return state;
}

export default  Disease_reducer;