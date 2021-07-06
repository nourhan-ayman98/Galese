const inintstate = {
    Rate:[]
};

const Rate_reducer = (state = inintstate, action) => {
    
        if (action.type=="RATELOAD") {
            state.Rate = action.state_.arraykey;
        }
        else if(action.type=="ADDRATE") {
            state.Rate.push(action.data);     

        }
        else if(action.type=="DELETERATE") {
            const newList = inintstate.Rate.filter((R) => R.Us_ID !== action.data);
            state.Rate = newList;
        }
        else if(action.type=="UPDATE_Review_ID_RATE") {
            for (var i = 0; i < inintstate.Rate.length; i++) {

                if (inintstate.Rate[i].Us_ID == action.USID) {
                    inintstate.Rate[i].Review_ID = action.Review_ID;
                    break;
                }
            }

        }
        else if(action.type=="UPDATE_Rate_Percentage_RATE") {
            for (var i = 0; i < inintstate.Rate.length; i++) {

                if (inintstate.Rate[i].Us_ID == action.USID) {
                    inintstate.Rate[i].Rate_Percentage = action.RP;
                    break;
                }
            }

        }
        else if (action.type=="GETRATE"){
            var index;
            for (var i = 0; i < inintstate.Rate.length; i++) {
                if (inintstate.Rate[i].Us_ID == action.usid) {
                    index = i;
                }
            }
            return { ...state, rate: inintstate.Rate[index] };
        }
    
    return state;
}

export default  Rate_reducer;