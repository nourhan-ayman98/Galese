const inintstate = {
    Comments:[]
};

const Comments_reducer = (state = inintstate, action) => {
    if(action.type=="COMMENTSLOAD") {
        state.Comments = action.state_.arraykey;
    }
    else if(action.type=="ADDCOMMENTS") {
        state.Comments.push(action.data);
        

    }
    else if(action.type== "DELETECOMMENTS") {
        const newList = inintstate.Comments.filter((C) => C.Us_ID !== action.data);
        state.Comments= newList;
    }
    else if(action.type=="UPDATE_US_ID_COMMENTS") {
        for (var i = 0; i < inintstate.Comments.length.valueOf(); i++) {

            if (inintstate.Comments[i].Us_ID == action.usid) {
                inintstate.Comments[i].Us_ID = action.newusid;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_REVIEW_ID_COMMENTS") {
        for (var i = 0; i < inintstate.Comments.length.valueOf(); i++) {

            if (inintstate.Comments[i].Us_ID== action.usid) {
                inintstate.Comments[i].Review_ID= action.review_id;
                break;
            }
        }

    }
   else if(action.type=="GETCOMMENTS") {
        var index;
        for (var i = 0; i < inintstate.Comments.length.valueOf(); i++) {
            if (inintstate.Comments[i].Us_ID == action.usid) {
                index = i;
            }
        }
        return { ...state, comment: inintstate.Comments[index] };
    }
    return state;
}

export default  Comments_reducer;