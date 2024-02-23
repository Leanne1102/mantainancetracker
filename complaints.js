var cherise = []
function hellen(){
    var muhi = document.getElementById("rat").value
    var mia = {sender:"Leanne",complaint:muhi,status:"old"}
    cherise.push(mia)
    localStorage.setItem("dog",JSON.stringify(cherise))
    document.getElementById("rat").value = ""
    alert("Your complaint has been submitted.")
    console.log(cherise)
}
function restie(){
//    var kia = localStorage.getItem("dog")
//     console.log(kia)
//     var mia = JSON.parse(kia)
//     console.log(mia)
//     var tbody = document.getElementById("usher")
//     var row = tbody.insertRow()
//     var cell = row.insertCell()
//     cell.innerHTML = "Leanne"
//     var cell2 = row.insertCell()
//     cell2.innerHTML ="no seats"
//     var cell3 = row.insertCell()
//     cell3.innerHTML = "11.03.24"
//     var cell4 = row.insertCell()
//     cell4.innerHTML = "new"
  var philo = localStorage.getItem("dog")
  var phillip = JSON.parse(philo)
  console.log(phillip)
   var tbody = document.getElementById("usher")
   for (var goat = 0;goat<phillip.length;goat++){
    var row = tbody.insertRow()
    var cell =row.insertCell()
    cell.innerHTML=phillip[goat].sender
    var cell2 = row.insertCell()
    cell2.innerHTML=phillip[goat].complaint
    var cell3 = row.insertCell()
    cell3.innerHTML=phillip[goat].status
   }

}
