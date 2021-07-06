import official_Store from '../ReduxStores/Store';
//Get Comments 
export async function get_Comment(Us_ID) {
    official_Store.dispatch({
        type: "GETCOMMENTS",
        usid: Us_ID
    });
    return official_Store.getState().Comments_reducer.comment;
};
//Add
export function Add_Comment(Us_ID,Review_ID) {
    const state_C = {
       Us_ID: " ",
       Review_ID: " "
    }
    state_C.Us_ID = Us_ID;
    state_C.Review_ID = Review_ID;
    official_Store.dispatch(add_Comment_dispatch(state_C));
};
//Delete
export function Delete_Comment(Us_ID) {
    official_Store.dispatch(Delete_Comment_dispatch(Us_ID));
};
//Update //USID
export function Update_usid_comment(Us_ID,new_Usid) {

    official_Store.dispatch(Update_usid_comment_dispatch(Us_ID,new_Usid));
};
//Update //REVIEWID
export function Update_review_id_comment(Us_ID,Review_ID) {

    official_Store.dispatch(Update_review_id_comment_dispatch(Us_ID,Review_ID));
};
//Dispatches

const add_Comment_dispatch = (data_) => {
    return ({
        type: "ADDCOMMENTS",
        data: data_
    })
    
}

const Delete_Comment_dispatch = (Us_ID) => {
    return ({
        type: "DELETECOMMENTS",
        data: Us_ID
    })
}
const Update_usid_comment_dispatch = (Us_ID,newUs_id) => {
    return ({
        type: "UPDATE_US_ID_COMMENTS",
        usid: Us_ID,
        newusid:newUs_id
    })
}
const Update_review_id_comment_dispatch = (Us_ID,Review_ID) => {
    return ({
        type: "UPDATE_REVIEW_ID_COMMENTS",
        usid: Us_ID,
        review_id:Review_ID
    })
}