const inintstate = {
    CreditCard:[]
};

const CreditCard_reducer = (state = inintstate, action) => {
    if(action.type=="CREDIT_CARD_LOAD") {
        state.CreditCard = action.state_.arraykey;
    }
    else if(action.type=="CREDIT_CARD_ADD") {
        state.CreditCard.push(action.data);
    }
    else if(action.type== "DELETE_CREDIT_CARD") {
        const newList = inintstate.CreditCard.filter((C) => C.C_ID!== action.data);
        state.CreditCard= newList;
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
   else if(action.type=="GET_CREDIT_CARD") {
        var index;
        for (var i = 0; i < inintstate.CreditCard.length.valueOf(); i++) {
            if (inintstate.CreditCard[i].C_ID== action.c_ID) {
                index = i;
            }
        }
        return { ...state, credit_card: inintstate.CreditCard[index] };
    }
    return state;
}

export default  CreditCard_reducer;