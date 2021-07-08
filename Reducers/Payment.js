const inintstate = {
    Payment:[]
};

const Payment_reducer = (state = inintstate, action) => {
    if(action.type=="PAYMENT_LOAD") {
        state.Payment = action.state_.arraykey;
    }
    else if(action.type=="PAYMENT_ADD") {
        state.Payment.push(action.data);
    }
    else if(action.type== "DELETE_PAYMENT") {
        const newList = inintstate.Payment.filter((P) => P.Transaction_ID!== action.data);
        state.Payment= newList;
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
   else if(action.type=="GET_PAYMENT") {
        var index;
        for (var i = 0; i < inintstate.Payment.length.valueOf(); i++) {
            if (inintstate.Payment[i].Transaction_ID== action.transaction_ID) {
                index = i;
            }
        }
        return { ...state, payment: inintstate.Payment[index] };
    }
    return state;
}

export default  Payment_reducer;