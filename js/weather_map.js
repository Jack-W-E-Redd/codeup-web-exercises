(function() {
    "use strict"

    renderHtml(29.4241, -98.4936);
    function renderHtml(lat, lon) {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_TOKEN,
            lat: lat,
            lon: lon,
            units: "imperial",
            exclude: "minutely,hourly"
        }).done(function (data) {
            console.log(data);
            var html = "";
            for(var i = 0; i < 5; i += 1) {
                var tempMax = data.daily[i].temp.max;
                var tempMin = data.daily[i].temp.min;
                var description = data.daily[i].weather[0].description;
                var windSpeed = data.daily[i].wind_speed;
                var pressure = data.daily[i].pressure;
                var humidity = data.daily[i].humidity;
                var iconCode = data.daily[i].weather[0].icon;
                var date = data.daily[i].dt;
                var date1 = new Date (date*1000);
                var date2 = date1.toLocaleDateString("en-US");
                html += "<div class='card' style='width: 17rem;'>";
                html += "<div class='card-header text-center'>" + date2 + "</div>";
                html += "<ul class='list-group list-group-flush'>";
                html += "<li class='list-group-item text-center'>" + tempMax + "&#176F" + " / " + tempMin + "&#176F" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + iconCode + ".png'>" ;
                html += "<li class='list-group-item'>" + "Description: " + "<strong>" + description + "</strong>";
                html += "<li class='list-group-item'>" + "Humidity: " + "<strong>" + humidity + "</strong>";
                html += "<li class='list-group-item'>" + "Wind: " + "<strong>" + windSpeed + "</strong>";
                html += "<li class='list-group-item'>" + "Pressure: " + "<strong>" + pressure + "</strong>";
                html += "</ul>";
                html += "</div>";
            }
            $("#weather").html(html);
        });
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4936, 29.4241],
        zoom: 9
    });
    map.addControl(
        new mapboxgl.NavigationControl())

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);


    $("button").click(function (e) {
        e.preventDefault();
        var input = $("#user-input").val();
        geocode(input, MAPBOX_TOKEN).then(function (data) {
            renderHtml(data[1], data[0]);
            map.flyTo({
                center: [data[0], data[1]],
                essential: true,
                zoom: 9,
            });
            marker.setLngLat([data[0], data[1]])
            marker.addTo(map);
        })
    })
})();
