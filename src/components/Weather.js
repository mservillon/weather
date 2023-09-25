
function Weather() {
    return (
        <div className="weather">
            <span className="title">What's the Weather today?</span>
            <form action="">
                <label for="city">Enter city: </label>
                <input type="text" name="city"  />
                <br />

                <label for="country">Enter country: </label>
                <input type="text" name="country"  />
                <br />
                
                <button className="getWeather">Get Weather</button>
            </form>
        </div>
    )
}

export default Weather;