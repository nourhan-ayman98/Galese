import React ,{Component} from 'react';
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
class users extends Component{
    constructor(props)
    {
        super(props);
        Firebase.initializeApp(firebaseConfig);
        this.state={
            users:[]
        }
    }
    componentDidMount() {
        this.getUserData();
    }
    writeUserData = () => {
        Firebase.database()
          .ref("/")
          .set(this.state);
        console.log("DATA SAVED");
    }
    addUser=(data)=>{
        const { users } = this.state;
        developers.push({ 
            uid:data.pmk
            ,name:data.name
            ,Gender:data.Gender
            ,DateOfBirth:data.DateOfBirth
            ,phoneNumber:data.phone
            ,password:data.password
            ,country:data.country
            , city:data.city
            ,Adress:data.Adress
            ,username:data.username
            ,Patient_id:data.Patient_id
            ,Nusre_id:data.Nusre_id
            ,Sitter_id:data.Sitter_id                           
        });
        this.setState({ users });
    }
}

export default users;