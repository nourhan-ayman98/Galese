import Firebase from '../Databaseconfig';
export const  writeUserData=(ref_,data)=> {
    Firebase.database()
        .ref(ref)
        .set(data)
    console.log("DATA SAVED");
};

export async function getUserData(ref_){
    var arraykey = [];
    var Lastindex="";
    let ref = await Firebase.database().ref(ref_);
    ref.once("value", snapshot => {
        const state = snapshot.val();
        var keys = Object.keys(state);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            arraykey[k] = state[k];
            
            if (i == keys.length - 1) {
                Lastindex = i;   
            }
            
        }
        //console.log(_state.users);
        
       
    });
    return arraykey;
    
};