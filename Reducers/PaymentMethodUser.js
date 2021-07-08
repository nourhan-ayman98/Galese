const inintstate = {
    PaymentMethodUser:[]
};

const PaymentMethodUser_reducer = (state = inintstate, action) => {
    if(action.type=="PAYMENT_METHOD_LOAD") {
        state.PaymentMethodUser = action.state_.arraykey;
    }
    else if(action.type=="PAYMENT_METHOD_ADD") {
        state.PaymentMethodUser.push(action.data);
    }
    else if(action.type== "DELETE_PAYMENT_METHOD") {
        const newList = inintstate.PaymentMethodUser.filter((PM) => PM.PM_ID!== action.data);
        state.PaymentMethodUser= newList;
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
   else if(action.type=="GET_PAYMENT_METHOD") {
        var index;
        for (var i = 0; i < inintstate.PaymentMethodUser.length.valueOf(); i++) {
            if (inintstate.PaymentMethodUser[i].PM_ID== action.pm_ID) {
                index = i;
            }
        }
        return { ...state, paymentMethod: inintstate.PaymentMethodUser[index] };
    }
    return state;
}

export default  PaymentMethodUser_reducer;