import official_Store from '../ReduxStores/Store';
//Get Customer services 
export async function get_Rate(UsID) {
    official_Store.dispatch({
        type: "GETRATE",
        usid: UsID
    });
    return official_Store.getState().Rate_reducer.rate;
};
//Add
export function Add_Rate(Us_ID,Review_ID,Rate_Percentage) {
    const state_R = {
        Us_ID:0,
        Review_ID:0,
        Rate_Percentage:0
        }
    state_R.Us_ID = Us_ID;
    state_R.Review_ID = Review_ID;
    state_R.Rate_Percentage=Rate_Percentage;

    official_Store.dispatch(add_Rate_dispatch(state_R));
};
//Delete
export function Delete_Rate(usID) {
    official_Store.dispatch(Delete_Rate_dispatch(usID));
};

//Update //Rate_precentage
export function Update_Rate_Rate_Percentage(usID,Rate_Precentage) {

    official_Store.dispatch(Update_Rate_Rate_Percentage_dispatch(usID,Rate_Precentage));
};
//Update //ReviewID
export function Update_ReviewID_Rate(usID,Review_ID) {

    official_Store.dispatch(Update_ReviewID_Rate_dispatch(usID,Review_ID));
};
//Dispatches

const add_Rate_dispatch = (data_) => {
    return ({
        type: "ADDRATE",
        data: data_
    })
    
}

const Delete_Rate_dispatch = (usID) => {
    return ({
        type: "DELETERATE",
        data: usID
    })
}
const Update_Rate_Rate_Percentage_dispatch = (usID,Rate_precentage) => {
    return ({
        type: "UPDATE_Rate_Percentage_RATE",
        USID:usID,
        RP:Rate_precentage
    })
}
const Update_ReviewID_Rate_dispatch = (usID,Review_ID_) => {
    return ({
        type: "UPDATE_Review_ID_RATE",
        USID:usID,
        Review_ID:Review_ID_
    })
}