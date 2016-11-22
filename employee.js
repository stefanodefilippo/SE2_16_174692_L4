var employees = [[1, "Darin", "Brewer", 2300, 6], [2, "Bonnie", "Norris", 1100, 2], [3, "Ramiro", "Robbins", 6500, 9], [5, "Julius", "Griffin", 1500, 3]]

var search = function(id){
    for(var i = 0; i < employees.length; i++){
        if(employees[i][0] == id){
            return employees[i];
        }
    }
    return 0;
}

var deleteEmployee = function(id){
    for(var i = 0; i < employees.length; i++){
        if(employees[i][0] == id){
	    employees[i] = employees[employees.length - 1];
	    employees.pop();
        }
    }
}

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


exports.search = search; 
exports.deleteEmployee = deleteEmployee; 
exports.modifyEmployee = modifyEmployee; 
exports.addEmployee = addEmployee; 





