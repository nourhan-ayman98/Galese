import Firebase from './Databaseconfig';


const state_={
    arraykey:[],
    Lastindex:parseInt('')
}

export const  writeUserData=(ref_,data)=> {
    Firebase.database()
        .ref(ref_)
        .set(data)
    console.log("DATA SAVED");
};

export async function getUserData(ref_){
    let ref = await Firebase.database().ref(ref_);
    ref.once("value", snapshot => {
        const state = snapshot.val();
        var keys = Object.keys(state);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            state_.arraykey[k] = state[k];
            
            if (i == keys.length - 1) {
                state_.Lastindex = i;   
            }
            
        }   
    });
    return state_;
    
};