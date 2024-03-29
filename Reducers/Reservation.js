const inintstate = {
    Reservation:[]
};

const Reservation_reducer = (state = inintstate, action) => {
    if(action.type=="RESERVATION_LOAD") {
        state.Reservation = action.state_.arraykey;
    }
    else if(action.type=="ADD_RESERVATION") {
        state.Reservation.push(action.data);
        

    }
    else if(action.type== "DELETE_RESERVATION") {
        const newList = inintstate.User.filter((R) => R.Reservation_ID !== action.data);
        state.Reservation= newList;
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
   else if(action.type=="GET_RESERVATION") {
        var index;
        for (var i = 0; i < inintstate.Reservation.length.valueOf(); i++) {
            if (inintstate.Reservation[i].Reservation_ID == action.reservation_ID) {
                index = i;
            }
        }
        return { ...state, reservation: inintstate.Reservation[index] };
    }
    return state;
}

export default  Reservation_reducer;