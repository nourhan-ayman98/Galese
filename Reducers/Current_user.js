const inintstate = {
    CurrrentUser:{},
};

const Current_user_reducer = (state = inintstate, action) => {
    
        if(action.type=="ADDCURRENTUSER") {
            state.CurrrentUser=action.data;
        }
    
    return state;
}

export default  Current_user_reducer;