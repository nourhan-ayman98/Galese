const inintstate = {
    Employees: []
};

const Employee_reducer = (state = inintstate, action) => {
    
        if(action.type=="EMPLOYEELOAD"){ 
            state.Employees = action.state_.arraykey;
        }
        else if (action.type=="ADDEMPLOYEE"){ 
            state.Employees.push(action.data);
        }
        
        else if(action.type=="DELETEEMPLOYEE"){ 
            const newList =inintstate.Employees.filter((Employee)=> Employee.Email!=action.data);
            state.Employees= newList;
        }
        
        else if ("UPDATE_Password_EMPLOYEE"){             
            for (var i = 0; i < state.Employees.length.valueOf(); i++) {
                if (state.Employees[i].Email== action.Email) {
                    state.Employees[i].Password = action.newpass;
                }
            }

        }
        else if(action.type=="GETEMPLOYEE"){ 
            var index;
            for (var i = 0; i < inintstate.Employees.length.valueOf(); i++) {
                if (inintstate.Employees[i].Email == action.email) {
                    index = i;
                }
            }
            return { ...state, employee: inintstate.Employees[index] };
        }
    
    return state;
}

export default Employee_reducer;