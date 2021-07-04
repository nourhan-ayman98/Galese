const inintstate = {
    CustomerServices:[]
};

const CustomerServices_reducer = (state = inintstate, action) => {
    switch (action.type) {
        case "CUSTOMER_SERVICESLOAD": {
            state.CustomerServices = action.state_.arraykey;
        }
        case "ADDCUSTOMER_SERVICES": {
            state.CustomerServices.push(action.data);
            

        }
        case "DELETECUSTOMER_SERVICES": {
            const newList = inintstate.CustomerServices.filter((CS) => CS.Email !== action.data);
            inintstate.Admin = newList;
        }
        case "UPDATE_HOTLINE_CUSTOMER_SERVICES": {
            for (var i = 0; i < inintstate.CustomerServices.length; i++) {

                if (inintstate.CustomerServices[i].Email == action.Email) {
                    inintstate.CustomerServices[i].Hotline = action.Hotline;
                    break;
                }
            }

        }
        case "GETCUSTOMER_SERVICES": {
            var index;
            for (var i = 0; i < inintstate.CustomerServices.length; i++) {
                if (inintstate.CustomerServices[i].Email == action.email) {
                    index = i;
                }
            }
            return { ...state, customer_services: inintstate.CustomerServices[index] };
        }
    }
    return state;
}

export default  CustomerServices_reducer;