<!DOCTYPE html>
<html>
   <head>
      <!-- Here goes the metadata -->  
      <meta charset="utf-8">
      <title> Employees </title>
   </head>
    
    <script src = "/script/script.js"></script>
    
   <body>
       <h1>(:message:)</h1>
       <h2>Insert ID employee</h2>
       <form action="http://127.0.0.1:1337/" method="POST" id = "searchOrDeleteForm" onsubmit="return validatesearchOrDeleteForm()">
       <input type = 'text' name = "id">
       <input type = "hidden" name = "action">
       <button type="submit" onclick="searchInput()">search employee</button>
       <button type="submit" onclick="deleteInput()">delete employee</button>
       </form>
       <br><br>
       <b>Add or modify employee</b>
       <form action="http://127.0.0.1:1337/" method="POST" id = "employeeForm">
           <br>
           id:<br> 
           <input name="id" value= "(:id:)"/><br>
           name:<br> 
            <input name="name" value= "(:name:)"/><br>
           surname:<br> 
           <input name="surname" value= "(:surname:)"/><br>
           salary:<br> 
           <input name="salary" value= "(:salary:)"/><br>
           level:<br> 
           <input name="level" value= "(:level:)"/><br>
            <input type = "hidden" name = "action" value = "employeeData">
            <input type="submit" onClick="return validateemployeeForm()" value= "SendData">
           <br><br>*if you don't insert the id when adding an employee, the first available id will be used<br>
       </form>
       
              
    </body>
</html>
