const inintstate = {
    User:[],
    Lastindex:" "
};

const User_reducer = (state = inintstate, action) => {
    if(action.type=="DATABASEREAD"){
        state.User=action.users;
        state.Lastindex=action.Lastindex;
        return state;
    }
    else if(action.type=='DATABASEWRITE'){
        return state;
    }
    return state;
}

export default  User_reducer;