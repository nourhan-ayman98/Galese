const inintstate = {
    DiseaseSymptoms:[]
};

const DiseaseSymptoms_reducer = (state = inintstate, action) => {
    if(action.type=="DISEASE_SYMPT_LOAD") {
        state.DiseaseSymptoms= action.state_.arraykey;
    }
    else if(action.type=="DISEASE_SYMPT_ADD") {
        state.DiseaseSymptoms.push(action.data);
        

    }
    else if(action.type== "DELETE_SYMPT_DISEASE") {
        const newList = inintstate.DiseaseSymptoms.filter((D) => D.Disease_ID !== action.data);
        state.DiseaseSymptoms= newList;
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
   else if(action.type=="GET_SYMPT_DISEASE") {
        var index;
        for (var i = 0; i < inintstate.DiseaseSymptoms.length.valueOf(); i++) {
            if (inintstate.DiseaseSymptoms[i].Disease_ID == action.disease_ID) {
                index = i;
            }
        }
        return { ...state, DS: inintstate.DiseaseSymptoms[index] };
    }
    return state;
}

export default  DiseaseSymptoms_reducer;