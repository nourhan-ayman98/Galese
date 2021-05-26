import { get_User_Data, write_user_Data } from '../Actions/DatabaseAction';

import Firebase from'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyApEFSGhDAQlDgG2sX0rbx_XKLVLoTgArg",
    authDomain: "gp-database-c84f7.firebaseapp.com",
    databaseURL: "https://gp-database-c84f7-default-rtdb.firebaseio.com",
    projectId: "gp-database-c84f7",
    storageBucket: "gp-database-c84f7.appspot.com",
    messagingSenderId: "697183097916",
    appId: "1:697183097916:web:a7298add1c51d3511fdf39",
    measurementId: "G-F2M3SBV0Q2"
};
Firebase.initializeApp(firebaseConfig);

const users_state = {
    users: [],
    Lastindex: " "
};

export function writeUserData(props) {
   
    users_state.users = props.users;
    users_state.Lastindex = props.Lastindex;
    Firebase.database()
        .ref("/Users/")
        .set(users_state.users)
    console.log("DATA SAVED");
};

export const getUserData=()=>{
    let ref = Firebase.database().ref("/Users/");
    ref.once("value", snapshot => {
        const state = snapshot.val();
        var keys = Object.keys(state);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            users_state.users[k] = state[k];
            
            if (i == keys.length - 1) {
                users_state.Lastindex = i;
               
            }
            
        }
        console.log(users_state.users);
        return users_state;
       
    });
    
};