//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//for templates
var bind = require('bind');

//import module
var moduloEmployee = require('./employee.js');

//POST
var bodyParser = require('body-parser');

//the client can access to file script.js
app.use('/script', express.static(__dirname + '/scripts/'));


app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//handle POST request
app.post('/', function(request, response) 
	{

	    if ( typeof request.body !== 'undefined' && request.body)
	    {
		//the content of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		//typeOfRequest can be search, delete or employeeData
		var typeOfRequest = request.body.action;

        //search the employee with the submitted id
		var employee = moduloEmployee.search(request.body.id);
        //data of the discovered employee
		var id = parseInt(employee[0]);
		var name = employee[1];
        var surname = employee[2];
		var salary = employee[3];
		var level = employee[4];
        //message for the response page
		var message = "Employee found";
        //boolean that decides to show or not the employeeForm in the respons page
        var hideForm = false;
		
        if(isNaN(id)){
		    id = "";
 		    message = "Employee not found"
            hideForm = true;
		}
		
        //block executed delete an employee from the list
		if(typeOfRequest == "delete"){
		    if(id != ""){
			moduloEmployee.deleteEmployee(id);
			message = "Employee deleted";
			id = "";
			name = "";
			surname = "";
			salary = "";
			level = "";
		    }
            hideForm = true;
		}	

        //block executed to add or modify an employee
		if(typeOfRequest == "employeeData"){
		    name = request.body.name;
		    surname = request.body.surname;
		    salary = request.body.salary;
		    level = request.body.level;
		    if(id != ""){
			moduloEmployee.modifyEmployee(id, name, surname, salary, level);
			message = "Employee modified";
		    }else{
			moduloEmployee.addEmployee(request.body.id, name, surname, salary, level);
			message = "Employee added";
		    }
            hideForm = true;
		}

		bind.toFile('./home.tpl', 
			    {
				//set up parameters for the page that is returned to the user
				hideForm: hideForm,
                message: message,
				id: id,
				name: name,
				surname: surname,
				salary: salary,
				level: level
			    },
			    function(data) 
			    {
				//write response
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(data);
			    })

		
	    }
	});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
