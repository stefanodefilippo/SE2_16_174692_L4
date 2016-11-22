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

app.use('/script', express.static(__dirname + '/scripts/'));

app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//use: for both POST and GET
app.use('/', function(request, response) 
{
    //set the headers of the responce
    //var headers = {};
    //answer
    //headers["Content-Type"] = "text/html";
    //response.writeHead(200, headers);


	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the content of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		//può essere search, delete o employeeData
		var typeOfRequest = request.body.action;

		var employee = moduloEmployee.search(request.body.id);
		var id = parseInt(employee[0]);
		var name = employee[1];
        	var surname = employee[2];
		var salary = employee[3];
		var level = employee[4];
		 var message = "Employee found"
	if(isNaN(id)){
		id = "";
 		message = "Employee not found"
	}
		
	/*if(typeOfRequest == "employeeData"){
        bind.toFile('./home.tpl', 
	{
        //set up parameters
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
}*/

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
	}	


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
	}



bind.toFile('./home.tpl', 
	{
        //set up parameters
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

    //response.end(text);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
