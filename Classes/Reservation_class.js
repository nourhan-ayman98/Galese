import official_Store from '../ReduxStores/Store';
//Get Reservation
export async function get_Rservation(Reservation_ID) {
    official_Store.dispatch({
        type:"GET_RESERVATION",
        reservation_ID: Reservation_ID
    });
    return official_Store.getState().Reservation_reducer.reservation;
};
//Add
export function Add_Reservation(Reservation_ID,Transaction_ID,Case_ID,Sitter_ID,Nurse_ID,VisitPurpose) {
    const state_Reservation = {
        Reservation_ID:" ",
        Transaction_ID:" ",
        Case_ID:" ",
        Sitter_ID:" ",
        Nurse_ID:" ",
        VisitPurpose:" ",
    }
    state_Reservation.Reservation_ID = Reservation_ID;
    state_Reservation.Transaction_ID = Transaction_ID;
    state_Reservation.Case_ID = Case_ID;
    state_Reservation.Sitter_ID = Sitter_ID;
    state_Reservation.Nurse_ID = Nurse_ID;
    state_Reservation.VisitPurpose = VisitPurpose;
    official_Store.dispatch(add_Rservation_dispatch(state_Reservation));
};
//Delete
export function Delete_Reservation(Reservation_ID) {
    official_Store.dispatch(Delete_Reservation_dispatch(Reservation_ID));
};
//Dispatches

const add_Rservation_dispatch = (data_) => {
    return ({
        type: "ADD_RESERVATION",
        data: data_
    })
    
}

const Delete_Reservation_dispatch = (Reservation_ID) => {
    return ({
        type: "DELETE_RESERVATION",
        data: Reservation_ID
    })
}