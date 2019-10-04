//Hämtar filen land.json
fetch("./land.json")
.then(function(resp) {
 return resp.json();
})

.then(function(data){
 var land = data;
})

// hämtar stad.json
fetch("./stad.json")
.then(function(resp) {
 return resp.json();
})

.then(function(data){
 var stad = data;
})

var list = document.getElementsByClassName("dropdown-item");
for(var i = 0; i <= land.length; i++){
    if(land[i] <= 3 ){
        list.innerHTML = land[i];
        console.log(land[i]);
    }
}
