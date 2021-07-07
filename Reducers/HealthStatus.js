const inintstate = {
    HealthStatus:[]
};

const HealthStatus_reducer = (state = inintstate, action) => {
    if(action.type=="HEALTH_STATUS_LOAD") {
        state.HealthStatus = action.state_.arraykey;
    }
    else if(action.type=="HEALTH_STATUS_ADD") {
        state.HealthStatus.push(action.data);
        

    }
    else if(action.type== "DELETE_HEALTH_STATUS") {
        const newList = inintstate.HealthStatus.filter((HS) => HS.Case_ID !== action.data);
        state.HealthStatus= newList;
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
   else if(action.type=="GET_HEALTH_STATUS") {
        var index;
        for (var i = 0; i < inintstate.HealthStatus.length.valueOf(); i++) {
            if (inintstate.HealthStatus[i].Case_ID == action.case_ID) {
                index = i;
            }
        }
        return { ...state, healthstatus: inintstate.HealthStatus[index] };
    }
    return state;
}

export default  HealthStatus_reducer;