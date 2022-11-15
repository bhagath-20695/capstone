function validate()
{
 var username=document.getElementById("username").value;
 var password=document.getElementById("password").value;   
 if(username=="admin" && password=="user")
 {
    window.location.assign("admin.html");
    alert("Login succesfully");
    return false;

 }
 else if(username=="student" && password=="student")
 {
    window.location.assign("student.html");
    alert("Login succesfully");
    return false;

 }
 else if(username=="professor" && password=="professor")
 {
    window.location.assign("professor.html");
    alert("Login succesfully");
    return false;

 }
 else
 {
    alert("Login failed");
 }
}