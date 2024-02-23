function dag(){
    var ls = localStorage.getItem("dog")
    console.log(ls)
    var json = JSON.parse(ls)
    console.log(json)
    var lea = document.getElementById("leah")
    for (var dog = 0;dog<json.length;dog++){
        var ro= lea.insertRow()
        var cell1 = ro.insertCell()
        cell1.innerHTML=json[dog].sender
        var cell2 = ro.insertCell()
        cell2.innerHTML=json[dog].complaint
        var cell3 = ro.insertCell()
        cell3.innerHTML=json[dog].status
    

        
    }
    }