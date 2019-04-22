fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {console.log(json)
    var table=document.getElementById("avvaru")  
    for (var i=0; i<json.length; i++){
        var tr =document.createElement("tr");
        var td =document.createElement("td");
    td.innerHTML=json[i]["id"]; 
    var td2 =document.createElement("td");
    td2.innerHTML=json[i]["title"];
    tr.appendChild(td);
    tr.appendChild(td2);
        table.appendChild(tr);
       // document.writeln(json[i]["userId"])
    }
})