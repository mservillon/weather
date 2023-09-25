import { useState } from "react";

function Weather() {
    
    
    const [input, setInput] = useState({ city: "", country: ""})

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

                <button className="getWeather">Get Weather</button>
            </form>
        </div>
    )
}

export default Weather;