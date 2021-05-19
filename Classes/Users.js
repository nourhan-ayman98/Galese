import React, { Component } from 'react';
import Firebase from "firebase";
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
class users extends Component {



    constructor(props) {

        super(props);
        this.state = {
            users: [],
            Lastindex:" "
        }

    }
    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            this.writeUserData();
        }
    }
    writeUserData = () => {
        Firebase.database()
            .ref("/Users/")
            .set(this.state.users)
        console.log("DATA SAVED");
    };
    getUserData = () => {

        let ref = Firebase.database().ref("/Users/");
        ref.once("value", snapshot => {
            const state = snapshot.val();
            var keys = Object.keys(state);
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                this.state.users[k]=state[k];
                if(i==keys.length-1)
                {
                   this.state.Lastindex=i;
                }
            }
            
        });
        
    };
    addUser = (user) => {
        const users_ = this.state.users;
        console.log(users_);
        const index=this.state.Lastindex;
        console.log(index);
        /*users_[users_.length]={
            name: user.name
            , password: user.password
            , email: user.email
        };*/
        //console.log(users_);

        //this.writeUserData();
    }
    DeleteUser = (user) => {
        const { users } = this.state;
        const new_users = users.filter(data => {
            return data.uid !== user.id;
        });
        this.setState({ users: new_users });
    }
}

export default users;