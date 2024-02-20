var cherise = []
function hellen(){
    var muhi = document.getElementById("rat").value
    var mia = {sender:"Leanne",complaint:muhi,status:"old"}
    cherise.push(mia)
    localStorage.setItem("dog",JSON.stringify(cherise))
    console.log(cherise)
}
function restie(){
   var kia = localStorage.getItem("dog")
    console.log(kia)
    var mia = JSON.parse(kia)
} 
for(var leanne=0;leanne<7;leanne++){
    console.log("my name is ritah")
}
for (var r=2;r<23;r++){
    console.log("i will go to heaven")
}

