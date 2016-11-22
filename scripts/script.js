function searchInput(){
    document.getElementById("searchOrDeleteForm").elements["action"].value = "search";             
}
function deleteInput(){
    document.getElementById("searchOrDeleteForm").elements["action"].value = "delete";             
}

function validatesearchOrDeleteForm() {
    var name = document.getElementById("employeeForm").elements.namedItem("name").value;
    var surname = document.getElementById("employeeForm").elements.namedItem("surname").value;
    var salary = document.getElementById("employeeForm").elements.namedItem("salary").value;
    var level = document.getElementById("employeeForm").elements.namedItem("level").value;
    if (name == "" || surname == "" || salary == "" || level == "") {
        alert("Compile all fields(except id if you want) !!");
        return false;
    }
}
