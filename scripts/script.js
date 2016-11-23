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
 * @return false if at least one of the field "name", "surname", "salary", "level" in not compiled.
 */
function validateemployeeForm() {
    var name = document.getElementById("employeeForm").elements.namedItem("name").value;
    var surname = document.getElementById("employeeForm").elements.namedItem("surname").value;
    var salary = document.getElementById("employeeForm").elements.namedItem("salary").value;
    var level = document.getElementById("employeeForm").elements.namedItem("level").value;
    if (name == "" || surname == "" || salary == "" || level == "") {
        alert("Compile all fields(except id if you want) !!");
        return false;
    }
}

function validatesearchOrDeleteForm() {
    var id = document.getElementById("searchOrDeleteForm").elements.namedItem("id").value;
    if (id == "") {
        alert("Insert the employee id!!");
        return false;
    }
}