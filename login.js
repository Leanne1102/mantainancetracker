function hunter(){
    var sam = document.getElementById("name").value
    console.log(sam)
    var agira = document.getElementById("password").value
    console.log(agira)
    document.getElementById("water").innerHTML= sam + " " + agira
if  (sam == "Leanne" && agira == "agira"){
    window.location.href = "complaintslogin.html"
}
else if (sam == "admin" && agira == "admin123"){
    window.location.href="admin.html"
}
else {
    console.log("wrong password")
    document.getElementById("water").innerHTML= "password or username you entered is incorrect."
}

}
