const inintstate = {
    DiseaseName:[]
};

const DiseaseName_reducer = (state = inintstate, action) => {
    if(action.type=="DISEASE_NAME_LOAD") {
        state.DiseaseName = action.state_.arraykey;
    }
    else if(action.type=="DISEASE_NAME_ADD") {
        state.DiseaseName.push(action.data);
        

    }
    else if(action.type== "DELETE_NAME_DISEASE") {
        const newList = inintstate.DiseaseName.filter((D) => D.Disease_ID !== action.data);
        state.DiseaseName= newList;
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
   else if(action.type=="GET_NAME_DISEASE") {
        var index;
        for (var i = 0; i < inintstate.DiseaseName.length.valueOf(); i++) {
            if (inintstate.DiseaseName[i].Disease_ID == action.disease_ID) {
                index = i;
            }
        }
        return { ...state, DN: inintstate.DiseaseName[index] };
    }
    return state;
}

export default  DiseaseName_reducer;