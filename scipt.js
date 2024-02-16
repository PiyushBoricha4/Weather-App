const options = {method: 'GET'};


const getweather = (city) => {
    cityname.innerHTML = city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c58a8b66496da3b6159144324e78df47`,options)
    .then((Response) => {
        Response.json().then((Response) => {
            console.log(Response);
            
            document.getElementById("temp").innerHTML = Response.main.temp;
            document.getElementById("temp2").innerHTML = Response.main.temp;
            document.getElementById("min_temp").innerHTML = Response.main.temp_min;
            document.getElementById("max_temp").innerHTML = Response.main.temp_max;
            document.getElementById("pre").innerHTML = Response.main.pressure;
            document.getElementById("Feels").innerHTML = Response.main.feels_like;
            document.getElementById("clo").innerHTML = Response.clouds.all;
            document.getElementById("vis").innerHTML = Response.visibility;
            document.getElementById("hum").innerHTML = Response.main.humidity;
            document.getElementById("hum2").innerHTML = Response.main.humidity;
            document.getElementById("speed").innerHTML = Response.wind.speed;
            document.getElementById("speed2").innerHTML = Response.wind.speed;
            document.getElementById("deg").innerHTML = Response.wind.deg;
            document.getElementById("rise").innerHTML = Response.sys.sunrise;
            document.getElementById("set").innerHTML = Response.sys.sunset;
            
            document.getElementById("wicon").src = `https://openweathermap.org/img/wn/${Response.weather[0].icon}@2x.png`;
        })
    })
    
    .catch((error) => {
        console.log(error);
    })
}
Sub.addEventListener("click",(s) => {
    s.preventDefault()
    getweather(city.value)
})
getweather("surat")




fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=c58a8b66496da3b6159144324e78df47')
.then((Response) => {
    Response.json().then((Response) => {
    console.log(Response);

        document.getElementById("rtn").innerHTML = Response.main.temp;
        document.getElementById("clon").innerHTML = Response.clouds.all;
        document.getElementById("huma").innerHTML = Response.main.humidity;

    })
})

.catch((error) => {
    console.log(error);
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=c58a8b66496da3b6159144324e78df47')
.then((Response) => {
    Response.json().then((Response) => {
    console.log(Response);

        document.getElementById("stn").innerHTML = Response.main.temp;
        document.getElementById("ptn").innerHTML = Response.clouds.all;
        document.getElementById("mtn").innerHTML = Response.main.humidity;

    })
})

.catch((error) => {
    console.log(error);
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=bhavnagar&appid=c58a8b66496da3b6159144324e78df47')
.then((Response) => {
    Response.json().then((Response) => {
    console.log(Response);

        document.getElementById("btemp").innerHTML = Response.main.temp;
        document.getElementById("bclon").innerHTML = Response.clouds.all;
        document.getElementById("bhum").innerHTML = Response.main.humidity;

    })
})

.catch((error) => {
    console.log(error);
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=maharastra&appid=c58a8b66496da3b6159144324e78df47')
.then((Response) => {
    Response.json().then((Response) => {
    console.log(Response);

        document.getElementById("mtemp").innerHTML = Response.main.temp;
        document.getElementById("mclon").innerHTML = Response.clouds.all;
        document.getElementById("mhum").innerHTML = Response.main.humidity;

    })
})

.catch((error) => {
    console.log(error);
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=olpad&appid=c58a8b66496da3b6159144324e78df47')
.then((Response) => {
    Response.json().then((Response) => {
    console.log(Response);

        document.getElementById("otemp").innerHTML = Response.main.temp;
        document.getElementById("oclon").innerHTML = Response.clouds.all;
        document.getElementById("ohum").innerHTML = Response.main.humidity;

    })
})

.catch((error) => {
    console.log(error);
})


fetch('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=c58a8b66496da3b6159144324e78df47')
.then((Response) => {
    Response.json().then((Response) => {
    console.log(Response);

        document.getElementById("ptemp").innerHTML = Response.main.temp;
        document.getElementById("pclon").innerHTML = Response.clouds.all;
        document.getElementById("phum").innerHTML = Response.main.humidity;

    })
})

.catch((error) => {
    console.log(error);
})
