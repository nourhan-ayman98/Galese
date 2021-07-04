const inintstate = {
    Rate:[]
};

const Rate_reducer = (state = inintstate, action) => {
    switch (action.type) {
        case "RATELOAD": {
            state.Rate = action.state_.arraykey;
        }
        case "ADDRATE": {
            state.Rate.push(action.data);     

        }
        case "DELETERATE": {
            const newList = inintstate.Rate.filter((R) => R.Us_ID !== action.data);
            inintstate.Rate = newList;
        }
        case "UPDATE_Review_ID_RATE": {
            for (var i = 0; i < inintstate.Rate.length; i++) {

                if (inintstate.Rate[i].Us_ID == action.USID) {
                    inintstate.Rate[i].Review_ID = action.Review_ID;
                    break;
                }
            }

        }
        case "UPDATE_Rate_Percentage_RATE": {
            for (var i = 0; i < inintstate.Rate.length; i++) {

                if (inintstate.Rate[i].Us_ID == action.USID) {
                    inintstate.Rate[i].Rate_Percentage = action.RP;
                    break;
                }
            }

        }
        case "GETRATE": {
            var index;
            for (var i = 0; i < inintstate.Rate.length; i++) {
                if (inintstate.Rate[i].Us_ID == action.usid) {
                    index = i;
                }
            }
            return { ...state, rate: inintstate.Rate[index] };
        }
    }
    return state;
}

export default  Rate_reducer;