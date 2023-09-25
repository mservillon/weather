import { useState } from "react";

function Weather() {
    
    const KEY = '43b402a38fd7ebfa680ccacec1920195';
    const [input, setInput] = useState({ city: "", country: ""})

    async function fetchWeatherData(e) {

        e.preventDefault();
        if (input.city === "") {
            alert("Please enter a city")
        }
        else {
            const weatherData = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${input.city},${input.country}&appid=${KEY}`)
                .then((res) => console.log(res.json()));
        }
    }
    const handle = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setInput({...input, city: value })
        }
        if (name === "country") {
            setInput({...input, country: value })
        }
    }

    return (
        <div className="weather">
            <span className="title">What's the Weather today?</span>
            <form action="">
                <label for="city">Enter city: </label>
                <input type="text" name="city" onChange={e => handle(e)} />
                <br />

                <label for="country">Enter country: </label>
                <input type="text" name="country"  />
                <br />

                <button className="getWeather" onClick={(e) => fetchWeatherData(e)}>Get Weather</button>
            </form>
        </div>
    )
}

export default Weather;