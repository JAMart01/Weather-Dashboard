console.log("JavaScript linked!");


navigator.geolocation.getCurrentPosition(position => {
    
    var lat = position.coords.latitude;

    var long = position.coords.longitude;

    console.log(lat, long);

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&" + long + "&appid=635ca3d6d3388dc2405e4ddbd56d00e4")
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
  });

 