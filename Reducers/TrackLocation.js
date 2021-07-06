const inintstate = {
    TrackLocation:[]
};

const TrackLocation_reducer = (state = inintstate, action) => {
    if(action.type=="TRACK_LOCATIONLOAD") {
        state.TrackLocation = action.state_.arraykey;
    }
    else if(action.type=="ADD_TRACK_LOCATION") {
        state.TrackLocation.push(action.data);
        

    }
    else if(action.type== "DELETE_TRACK_LOCATION") {
        const newList = inintstate.TrackLocation.filter((TL) => TL.Email !== action.data);
        state.TrackLocation= newList;
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
   else if(action.type=="GET_TRACK_LOCATION") {
        var index;
        for (var i = 0; i < inintstate.TrackLocation.length.valueOf(); i++) {
            if (inintstate.TrackLocation[i].Email == action.email) {
                index = i;
            }
        }
        return { ...state, track_location: inintstate.TrackLocation[index] };
    }
    return state;
}

export default  TrackLocation_reducer;