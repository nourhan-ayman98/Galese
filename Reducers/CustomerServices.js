const inintstate = {
    CustomerServices:[]
};

const CustomerServices_reducer = (state = inintstate, action) => {
   
        if(action.type=="CUSTOMER_SERVICESLOAD") {
            state.CustomerServices = action.state_.arraykey;
        }
        else if(action.type=="ADDCUSTOMER_SERVICES") {
            state.CustomerServices.push(action.data);
            

        }
        else if(action.type== "DELETECUSTOMER_SERVICES") {
            const newList = inintstate.CustomerServices.filter((CS) => CS.C_ID !== action.data);
            state.CustomerServices= newList;
        }
        /*else if(action.type=="UPDATE_HOTLINE_CUSTOMER_SERVICES") {
            for (var i = 0; i < inintstate.CustomerServices.length; i++) {

                if (inintstate.CustomerServices[i].Email == action.Email) {
                    inintstate.CustomerServices[i].Hotline = action.Hotline;
                    break;
                }
            }

        }*/
       else if(action.type=="GETCUSTOMER_SERVICES") {
            var index;
            for (var i = 0; i < inintstate.CustomerServices.length; i++) {
                if (inintstate.CustomerServices[i].C_ID == action.c_ID) {
                    index = i;
                }
            }
            return { ...state, customer_services: inintstate.CustomerServices[index] };
        }
    
    return state;
}

export default  CustomerServices_reducer;