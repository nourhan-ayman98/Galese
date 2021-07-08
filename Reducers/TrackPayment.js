const inintstate = {
    TrackPayment:[]
};

const TrackPayment_reducer = (state = inintstate, action) => {
    if(action.type=="TRACK_PAYMENT_LOAD") {
        state.TrackPayment = action.state_.arraykey;
    }
    else if(action.type=="TRACK_PAYMENT_ADD") {
        state.TrackPayment.push(action.data);
    }
    else if(action.type== "DELETE_TRACK_PAYMENT") {
        const newList = inintstate.TrackPayment.filter((TP) => TP.TP_Id!== action.data);
        state.TrackPayment= newList;
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
   else if(action.type=="GET_TRACK_PAYMENT") {
        var index;
        for (var i = 0; i < inintstate.TrackPayment.length.valueOf(); i++) {
            if (inintstate.TrackPayment[i].TP_Id== action.tp_Id) {
                index = i;
            }
        }
        return { ...state, track_payment: inintstate.TrackPayment[index] };
    }
    return state;
}

export default  TrackPayment_reducer;