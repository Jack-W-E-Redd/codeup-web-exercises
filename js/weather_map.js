(function(){
    "use strict";

    $(document).ready(function () {
        // function for requesting the data for the weather
        function reqWeather(){
            $.get("https://api.openweathermap.org/data/2.5/onecall",{
                APPID: OPEN_WEATHER_TOKEN,
                lat: 29.4241,
                lon: -98.4936,
                units: "imperial",
                exclude: "minutely, hourly"

            }).done(renderWeather)
        }

        // calling the weather data request
        reqWeather();

        // function to render the weather data for the current data on a card
        // need to do the display for 5 days later on
        function renderWeather(data){
            for(let i = 0; i < 5; i++){
                let html = "";
                html += "<div class='card' style='width: 18rem;'>"
                html += "<div class='card-header'>" + "</div>"

                html += "<ul class='list-group list-group-flush'>"
                html += "<li class='list-group-item'>" + (data.daily[i].temp.min) + " / " + (data.daily[i].temp.max) + "</li>"
                html += "<li class='list-group-item'>" +  "</li>"
                html += "<li class='list-group-item'>A third item</li>"
                html += "</ul>"
                html += "</div>"
                $(".container").html(html);
            }
            // console log for all the data i am going to need to extract and put into the card

            console.log(data);
            console.log(data.daily[0]);
            console.log(data.daily[0].temp.min);
            console.log(data.daily[0].temp.max);
            console.log(data.current.weather[0].description);
            console.log(data.daily[0].humidity);
            console.log(data.daily[0].pressure);
            console.log(data.daily[0].wind_speed);
        }

    }) // document.ready closing tag
})();