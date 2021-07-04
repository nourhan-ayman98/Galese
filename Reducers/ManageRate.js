const inintstate = {
    ManageRate:[]
};

const ManageRate_reducer = (state = inintstate, action) => {
    switch (action.type) {
        case "MANAGE_RATELOAD": {
            state.ManageRate = action.state_.arraykey;
        }
        case "ADDMANAGE_RATE": {
            state.ManageRate.push(action.data);     

        }
        case "DELETEMANAGE_RATE": {
            const newList = inintstate.ManageRate.filter((MR) => MR.Email !== action.data);
            inintstate.ManageRate = newList;
        }
        case "UPDATE_EMAIL_MANAGE_RATE": {
            for (var i = 0; i < inintstate.ManageRate.length; i++) {

                if (inintstate.ManageRate[i].Email == action.oldEmail) {
                    inintstate.ManageRate[i].Email = action.Newemail;
                    break;
                }
            }

        }
        case "UPDATE_Review_ID_MANAGE_RATE": {
            for (var i = 0; i < inintstate.ManageRate.length; i++) {

                if (inintstate.ManageRate[i].Email == action.Email) {
                    inintstate.ManageRate[i].Review_ID = action.Review_ID;
                    break;
                }
            }

        }
        case "UPDATE_Us_ID_MANAGE_RATE": {
            for (var i = 0; i < inintstate.ManageRate.length; i++) {

                if (inintstate.ManageRate[i].Email == action.Email) {
                    inintstate.ManageRate[i].Us_ID = action.usid;
                    break;
                }
            }

        }
        case "GETMANAGE_RATE": {
            var index;
            for (var i = 0; i < inintstate.ManageRate.length; i++) {
                if (inintstate.ManageRate[i].Email == action.email) {
                    index = i;
                }
            }
            return { ...state, manage_rate: inintstate.ManageRate[index] };
        }
    }
    return state;
}

export default  ManageRate_reducer;