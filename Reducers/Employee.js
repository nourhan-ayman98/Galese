const inintstate = {
    Employees: []
};

const Employee_reducer = (state = inintstate, action) => {
    switch (action.type) {
        case "EMPLOYEELOAD": {
            state.Employees = action.state_.arraykey;
        }
        case "ADDEMPLOYEE": {
            state.Employees.push(action.data);

        }
        case "DELETEEMPLOYEE": {
            const newList = inintstate.Employees.filter((Employee) => Employee.Email !== action.data);
            inintstate.Employees = newList;
            
        
        }
        case "UPDATE_EMAIL_EMPLOYEE": {
            for (var i = 0; i < inintstate.Employees.length; i++) {

                if (inintstate.Employees[i].Email == action.oldEmail) {
                    inintstate.Employees[i].Email = action.Newemail;
                    break;
                }
            }
            
        }
        case "UPDATE_Password_EMPLOYEE": {
            for (var i = 0; i < inintstate.Employees.length; i++) {

                if (inintstate.Employees[i].Email == action.Email) {
                    inintstate.Employees[i].Password = action.newpass;
                    break;
                }
            }
            
        }
        case "GETEMPLOYEE": {
            var index;
            for (var i = 0; i < inintstate.Employees.length; i++) {
                if (inintstate.Employees[i].Email == action.email) {
                    index = i;
                }
            }
            return { ...state, employee: inintstate.Employees[index] };
        }
    }
    return state;
}

export default Employee_reducer;