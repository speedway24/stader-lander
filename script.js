var stad;
var land;
//Hämtar filen land.json
fetch("./land.json")
.then(function(resp) {
 return resp.json();
})

.then(function(data){
  land = data;
})

// hämtar stad.json
fetch("./stad.json")
.then(function(resp) {
 return resp.json();
})

.then(function(data){
     stad = data;

})
console.log(land);
var list = document.getElementsByClassName("dropdown-item");
for(var i = 0; i <= land.length; i++){
    list.innerHTML = land[i];
 } 

   