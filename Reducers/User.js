const inintstate = {
    User:[],
    Lastindex:parseInt('')
};

const User_reducer = (state=inintstate,action) => {
    if(action.type=="DATABASEREAD"){
        inintstate.User=action.data.users;
        inintstate.Lastindex=action.data.last_index;
    }
    else if(action.type=='DATABASEWRITE'){
    }
    return state;
}

export default  User_reducer;