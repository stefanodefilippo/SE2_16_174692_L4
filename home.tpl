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
       <form action="http://127.0.0.1:1337/" method="POST" id = "searchOrDeleteForm">
       <input type = 'text' name = "id">
       <input type = "hidden" name = "action">
       <button type="submit" onclick="searchInput()">search employee</button>
       <button type="submit" onclick="deleteInput()">delete employee</button>
       </form>
       <br>
       <button onclick="getElementById('employeeForm').hidden = false">add or modify employee</button>
       
       <form action="http://127.0.0.1:1337/" method="POST" id = "employeeForm">
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
            <input type="submit" onClick="return validatesearchOrDeleteForm()" value= "SendData">
       </form>
       
              
    </body>
</html>
