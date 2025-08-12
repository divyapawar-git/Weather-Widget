import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Weatherapp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 39.93,
        temp: 33.45,
        tempMax: 33.45,
        tempMin: 33.45,
        humidity: 58,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center"}}> 
            <h1 style={{marginTop: "40px", fontSize: "37px"}}>Weather Widget</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}