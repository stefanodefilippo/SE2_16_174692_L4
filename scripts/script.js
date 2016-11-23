/**
 * @brief the element "action" of the form is setted to "search".
 */
function searchInput(){
    document.getElementById("searchOrDeleteForm").elements["action"].value = "search";             
}

/**
 * @brief the element "action" of the form is setted to "delete".
 */
function deleteInput(){
    document.getElementById("searchOrDeleteForm").elements["action"].value = "delete";             
}

/**
 * @brief Validate the employeeForm.
 * @return false if at least one of the field "name", "surname", "salary", "level" is not compiled, or if the types are not respected.
 */
function validateemployeeForm() {
    var id = document.getElementById("employeeForm").elements.namedItem("id").value;
    var name = document.getElementById("employeeForm").elements.namedItem("name").value;
    var surname = document.getElementById("employeeForm").elements.namedItem("surname").value;
    var salary = document.getElementById("employeeForm").elements.namedItem("salary").value;
    var level = document.getElementById("employeeForm").elements.namedItem("level").value;
    if (name == "" || surname == "" || salary == "" || level == "") {
        alert("Compile all fields(except id if you want) !!");
        return false;
    }
    if (isNaN(parseInt(salary)) || isNaN(parseInt(level)) || id != "" && isNaN(parseInt(id))) {
        alert("Respect types (id: integer, name: string, surname: string, salary: integer, level: integer) !!");
        return false;
    }
}

/**
 * @brief Validate the searchOrDeleteForm.
 * @return false if the form's field is empty or if it contains a non integer value.
 */
function validatesearchOrDeleteForm() {
    var id = document.getElementById("searchOrDeleteForm").elements.namedItem("id").value;
    if (id == "") {
        alert("Insert the employee id!!");
        return false;
    }
    if (isNaN(parseInt(id))){
        alert("The id must be an integer!!");
        return false;
    }
}

/**
 * @brief Makes the employeeForm appear and disappear, deleting the content of the input fields.
 */
function dis_appearForm(){
    if(document.getElementById("employeeForm").hidden == true){
	document.getElementById("employeeForm").hidden = false;
    }else{
	document.getElementById("employeeForm").hidden = true;
    }
    document.getElementById("employeeForm").elements.namedItem("id").value = "";
    document.getElementById("employeeForm").elements.namedItem("name").value = "";
    document.getElementById("employeeForm").elements.namedItem("surname").value = "";
    document.getElementById("employeeForm").elements.namedItem("salary").value = "";
    document.getElementById("employeeForm").elements.namedItem("level").value = "";
}
