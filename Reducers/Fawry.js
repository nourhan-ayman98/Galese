const inintstate = {
    Fawry:[]
};

const Fawry_reducer = (state = inintstate, action) => {
    if(action.type=="FAWRY_LOAD") {
        state.Fawry = action.state_.arraykey;
    }
    else if(action.type=="FAWRY_ADD") {
        state.Fawry.push(action.data);
    }
    else if(action.type== "DELETE_FAWRY") {
        const newList = inintstate.Fawry.filter((F) => F.F_ID!== action.data);
        state.Fawry= newList;
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
   else if(action.type=="GET_FAWRY") {
        var index;
        for (var i = 0; i < inintstate.Fawry.length.valueOf(); i++) {
            if (inintstate.Fawry[i].F_ID== action.f_ID) {
                index = i;
            }
        }
        return { ...state, fawry: inintstate.Fawry[index] };
    }
    return state;
}

export default  Fawry_reducer;