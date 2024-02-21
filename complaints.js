var cherise = []
function hellen(){
    var muhi = document.getElementById("rat").value
    var mia = {sender:"Leanne",complaint:muhi,status:"old"}
    cherise.push(mia)
    localStorage.setItem("dog",JSON.stringify(cherise))
    window.location.href = "complaintslogin.html"
    console.log(cherise)
}
function restie(){
   var kia = localStorage.getItem("dog")
    console.log(kia)
    var mia = JSON.parse(kia)
    console.log(mia)
    var tbody = document.getElementById("usher")
    var row = tbody.insertRow()
    var cell = row.insertCell()
    cell.innerHTML = "Leanne"
    var cell2 = row.insertCell()
    cell2.innerHTML ="no seats"
    var cell3 = row.insertCell()
    cell3.innerHTML = "11.03.24"
    var cell4 = row.insertCell()
    cell4.innerHTML = "new"





    
} 


