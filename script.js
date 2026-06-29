    const apikey="9b1599cbae50f051485f3a90a903c7c4";
    const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox=document.querySelector(".search input");
    const searchbtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");

    async function checkWheather(city){
        const response=await fetch(apiURL+city+`&appid=${apikey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{

            var data=await response.json();
            console.log(data);


        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
        
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";

        }
        else if(data.weather[0].main=="Clear")
        {
            weatherIcon.src="images/clear.png";

        }
        else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src="images/rain.png";

        }
        else if( data.weather[0].main=="Mist" ||
            data.weather[0].main=="Fog" ||
            data.weather[0].main=="Haze" ||
            data.weather[0].main=="Smoke")
        {
            weatherIcon.src="images/mist.png";

        }
        else if(data.weather[0].main=="Snow")
        {
            weatherIcon.src="images/snow.png";

        }
        else if(data.weather[0].main=="Drizzle")
        {
            weatherIcon.src="images/drizzle.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

        }
   
    }
    searchbtn.addEventListener("click",()=>{
        checkWheather(searchbox.value);
    });
