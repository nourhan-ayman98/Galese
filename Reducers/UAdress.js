const inintstate = {
    UAdress:[]
};

const UAdress_reducer = (state = inintstate, action) => {
    if(action.type=="UADRESS_LOAD") {
        state.UAdress = action.state_.arraykey;
    }
    else if(action.type=="UADRESS_ADD") {
        state.UAdress.push(action.data);
        

    }
    else if(action.type== "DELETE_UADRESS") {
        const newList = inintstate.UAdress.filter((UA) => UA.User_ID !== action.data);
        state.UAdress= newList;
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
   else if(action.type=="GET_UADRESS") {
        var index;
        for (var i = 0; i < inintstate.UAdress.length.valueOf(); i++) {
            if (inintstate.UAdress[i].User_ID == action.User_ID) {
                index = i;
            }
        }
        return { ...state, uadress: inintstate.UAdress[index] };
    }
    return state;
}

export default  UAdress_reducer;