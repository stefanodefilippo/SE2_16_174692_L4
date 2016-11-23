//list of employees
var employees = [[1, "Darin", "Brewer", 2300, 6], [2, "Bonnie", "Norris", 1100, 2], [3, "Ramiro", "Robbins", 6500, 9], [5, "Julius", "Griffin", 1500, 3]]

/**
 * @brief search an employee in the employee list
 * @param integer id the identifier of the employee to search.
 * @return the employee element if found, 0 otherwise.
 */
var search = function(id){
    for(var i = 0; i < employees.length; i++){
        if(employees[i][0] == id){
            return employees[i];
        }
    }
    return 0;
}

/**
 * @brief Delete an employee from the employee list.
 * @param integer id the identifier of the employee to be deleted.
 */
var deleteEmployee = function(id){
    for(var i = 0; i < employees.length; i++){
        if(employees[i][0] == id){
	    employees[i] = employees[employees.length - 1];
	    employees.pop();
        }
    }
}

/**
 * @brief modify an employee in the employee list.
 * @param integer id The identifier of the employee to be modified.
 * @param string name The new name of the employee
 * @param string surname The new surname of the employee
 * @param integer salary The new salary of the employee
 * @param integer level The new level of the employee
 */
var modifyEmployee = function(id, name, surname, salary, level){
	for(var i = 0; i < employees.length; i++){
        if(employees[i][0] == id){
	    employees[i][1] = name;
	    employees[i][2] = surname;
	    employees[i][3] = salary;
	    employees[i][4] = level;
        }
    }	
}


/**
 * @brief add an employee to the employee list.
 * @param integer id The identifier of the employee to be added.
 * @param string name The name of the new employee
 * @param string surname The surname of the new employee
 * @param integer salary The salary of the new employee
 * @param integer level The level of the new employee
 */
var addEmployee = function(id, name, surname, salary, level){
	if(id == ""){	
		var i = 1;
		while(search(i) != 0){
			i++;
		}
		newEmployee = [i, name, surname, salary, level]
	}else{
		newEmployee = [id, name, surname, salary, level]
	}
	employees.push(newEmployee);
}

//exports functions
exports.search = search; 
exports.deleteEmployee = deleteEmployee; 
exports.modifyEmployee = modifyEmployee; 
exports.addEmployee = addEmployee; 





