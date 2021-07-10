import official_Store from '../ReduxStores/Store';
//Get Track Reservation
export async function get_Track_Rservation(TR_ID) {
    official_Store.dispatch({
        type:"GET_TRACK_RESERVATION",
        tr_ID: TR_ID
    });
    return official_Store.getState().TrackReservation_reducer.trackreservation;
};
//Add
export function Add_Track_Rservation(TR_ID,E_ID,Reservation_ID) {
    const state_Track_Reservation = {
        TR_ID:"",
        E_ID:"",
        Reservation_ID:" ",
    }
    state_Track_Reservation.TR_ID = TR_ID;
    state_Track_Reservation.E_ID = E_ID;
    state_Track_Reservation.Reservation_ID = Reservation_ID;
    official_Store.dispatch(add_Track_Rservation_dispatch(state_Track_Reservation));
};
//Delete
export function Delete_Track_Rservation(TR_ID) {
    official_Store.dispatch(Delete_Track_Rservation_dispatch(TR_ID));
};
//Dispatches

const add_Track_Rservation_dispatch = (data_) => {
    return ({
        type: "ADD_TRACK_RESERVATION",
        data: data_
    })
    
}

const Delete_Track_Rservation_dispatch = (TR_ID) => {
    return ({
        type: "DELETE_TRACK_RESERVATION",
        data: TR_ID
    })
}