import Firebase from './Databaseconfig';
import official_Store from '../ReduxStores/Store';

const state_ = {
    arraykey: [],
}

export const writeData = (ref_, data) => {
    Firebase.database()
        .ref(ref_)
        .set(data)
    console.log("DATA SAVED");
};

export async function getData(ref_,) {
    let ref = await  Firebase.database().ref(ref_);
    ref.on("value", snapshot => {
        const state = snapshot.val();
        var keys = Object.keys(state);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            state_.arraykey[k] = state[k];
        }
       
    })
   return state_;
};