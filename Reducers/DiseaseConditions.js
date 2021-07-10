const inintstate = {
    DiseaseConditions:[]
};

const DiseaseConditions_reducer = (state = inintstate, action) => {
    if(action.type=="DISEASE_CONDITIONS_LOAD") {
        state.DiseaseConditions = action.state_.arraykey;
    }
    else if(action.type=="DISEASE_CONDITIONS_ADD") {
        state.DiseaseConditions.push(action.data);
        

    }
    else if(action.type== "DELETE_CONDITIONS_DISEASE") {
        const newList = inintstate.DiseaseConditionsfilter((D) => D.Disease_ID !== action.data);
        state.DiseaseConditions= newList;
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
   else if(action.type=="GET_CONDITIONS_DISEASE") {
        var index;
        for (var i = 0; i < inintstate.DiseaseConditions.length.valueOf(); i++) {
            if (inintstate.DiseaseConditions[i].Disease_ID == action.disease_ID) {
                index = i;
            }
        }
        return { ...state,DC: inintstate.DiseaseConditions[index] };
    }
    return state;
}

export default  DiseaseConditions_reducer;