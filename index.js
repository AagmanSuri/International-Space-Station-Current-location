const button = document.getElementById("one");
const title = document.getElementById("title");


button.addEventListener("click", function(){ 
  
  fetch('http://api.open-notify.org/iss-now.json')
    .then(resp=>resp.json())
    .then(result=>
        title.textContent=(`International Space Station Current Location is Longitude: ${result.iss_position.longitude} and the Latitude is ${result.iss_position.latitude}`));
    

}
    );



