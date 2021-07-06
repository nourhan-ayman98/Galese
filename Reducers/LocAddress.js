const inintstate = {
    LocAdress:[]
};

const LocAdress_reducer = (state = inintstate, action) => {
    if(action.type=="LOC_ADRESSLOAD") {
        state.LocAdress = action.state_.arraykey;
    }
    else if(action.type=="ADDLOC_ADRESS") {
        state.LocAdress.push(action.data);
        

    }
    else if(action.type== "DELETELOC_ADRESS") {
        const newList = inintstate.LocAdress.filter((L) => LA.U_ID !== action.data);
        state.LocAdress= newList;
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
   else if(action.type=="GETLOC_ADRESS") {
        var index;
        for (var i = 0; i < inintstate.LocAdress.length.valueOf(); i++) {
            if (inintstate.LocAdress[i].U_ID == action.u_id) {
                index = i;
            }
        }
        return { ...state, loc_adress: inintstate.LocAdress[index] };
    }
    return state;
}

export default  LocAdress_reducer;