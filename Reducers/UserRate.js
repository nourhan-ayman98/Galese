const inintstate = {
    UserRate:[]
};

const UserRate_reducer = (state = inintstate, action) => {
    if(action.type=="USER_RATELOAD") {
        state.UserRate = action.state_.arraykey;
    }
    else if(action.type=="ADDUSER_RATE") {
        state.UserRate.push(action.data);
        

    }
    else if(action.type== "DELETEUSER_RATE") {
        const newList = inintstate.UserRate.filter((UR) => UR.User_ID !== action.data);
        state.UserRate= newList;
    }
    else if(action.type=="UPDATE_REVIEW_ID_USER_RATE") {
        for (var i = 0; i < inintstate.UserRate.length.valueOf(); i++) {

            if (inintstate.UserRate[i].User_ID== action.user_id) {
                inintstate.UserRate[i].Review_ID= action.review_id;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_US_ID_USER_RATE") {
        for (var i = 0; i < inintstate.UserRate.length.valueOf(); i++) {

            if (inintstate.UserRate[i].User_ID == action.user_id) {
                inintstate.UserRate[i].Us_ID = action.usid;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_NATITIONAL_ID_USER_RATE") {
        for (var i = 0; i < inintstate.UserRate.length.valueOf(); i++) {

            if (inintstate.UserRate[i].User_ID == action.user_id) {
                inintstate.UserRate[i].National_ID = action.National_ID;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_EMAIL_USER_RATE") {
        for (var i = 0; i < inintstate.UserRate.length.valueOf(); i++) {

            if (inintstate.UserRate[i].User_ID == action.user_id) {
                inintstate.UserRate[i].Email = action.Email;
                break;
            }
        }

    }
    
   else if(action.type=="GETUSER_RATE") {
        var index;
        for (var i = 0; i < inintstate.UserRate.length.valueOf(); i++) {
            if (inintstate.UserRate[i].User_ID == action.user_id) {
                index = i;
            }
        }
        return { ...state, user_rate: inintstate.UserRate[index] };
    }
    return state;
}

export default  UserRate_reducer;