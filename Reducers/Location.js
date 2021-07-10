const inintstate = {
    Location:[]
}

const Location_reducer = (state = inintstate, action) => {
    if(action.type=="LOCATIONLOAD") {
        state.Location = action.state_.arraykey;
    }
    else if(action.type=="ADDLOCATION") {
        state.Location.push(action.data);
        

    }
    else if(action.type== "DELETELOCATION") {
        const newList = inintstate.Location.filter((L) => L.U_ID !== action.data);
        state.UserRate= newList;
    }
    else if(action.type=="UPDATE_COUNTRY_LOCATION") {
        for (var i = 0; i < inintstate.Location.length.valueOf(); i++) {

            if (inintstate.Location[i].U_ID== action.u_id) {
                inintstate.Location[i].Country = action.country;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_AREA_LOCATION") {
        for (var i = 0; i < inintstate.Location.length.valueOf(); i++) {

            if (inintstate.Location[i].U_ID == action.u_id) {
                inintstate.Location[i].Area  = action.area;
                break;
            }
        }

    }
    else if(action.type=="UPDATE_LONGITUDE_LOCATION") {
        inintstate.Location.find((u)=>{if(u.U_ID==action.U_ID){
            u.Longitude=action.Longitude
        }})

    }
    else if(action.type=="UPDATE_LATITUDE_LOCATION") {
       
        inintstate.Location.find((u)=>{if(u.U_ID==action.U_ID){
            u.Latitude=action.Latitude
        }})

    }
   else if(action.type=="GETLOCATION") {
        var index;
        for (var i = 0; i < inintstate.Location.length.valueOf(); i++) {
            if (inintstate.Location[i].U_ID == action.u_id) {
                index = i;
            }
        }
        return { ...state, location: inintstate.Location[index] };
    }
    return state;
}

export default  Location_reducer;