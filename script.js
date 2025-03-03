const apiKey = "11ac197e98a2004346c845cabe56105f";  

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }
        
        if (data.cod !== 200) {
            document.getElementById("weatherResult").innerHTML = "Error fetching weather data!";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weatherResult").innerHTML = "Error fetching weather data!";
    }
}

