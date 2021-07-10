const inintstate = {
    TrackReservation:[]
};

const TrackReservation_reducer = (state = inintstate, action) => {
    if(action.type=="TRACK_RESERVATION_LOAD") {
        state.TrackReservation = action.state_.arraykey;
    }
    else if(action.type=="ADD_TRACK_RESERVATION") {
        state.TrackReservation.push(action.data);
        

    }
    else if(action.type== "DELETE_TRACK_RESERVATION") {
        const newList = inintstate.TrackReservation.filter((TR) => TR.TR_ID !== action.data);
        state.TrackReservation= newList;
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
   else if(action.type=="GET_TRACK_RESERVATION") {
        var index;
        for (var i = 0; i < inintstate.TrackReservation.length.valueOf(); i++) {
            if (inintstate.TrackReservation[i].TR_ID == action.tr_ID) {
                index = i;
            }
        }
        return { ...state, trackreservation: inintstate.TrackReservation[index] };
    }
    return state;
}

export default  TrackReservation_reducer;