import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../features/weatherSlice'
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import axios from 'axios'
const SearchContent = ({cityName}) => {
    const weather = useSelector((state) => state.weather.value)
    const dispatch = useDispatch()
    const[hours, setHour] = useState([]);
    const[cityname, setCityname] = useState(cityName);
    const today = new Date();
    const totalHours = [];
    const handleQuery = () => {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=36af6cf8980a4e2b89350235220106&q=${cityname}&days=1&aqi=no&alerts=no`).then(
            (res) => {
                let data = res.data;
                console.log(data);
                const chances = [];
                for(var i = today.getHours() - 2; i <= today.getHours(); i++){
                    const details = data.forecast.forecastday[0].hour[i];
                    const time = i > 12 ? ( i - 12 ) + ' PM' : i + ' AM';
                    const data1 = {
                        chance_of_rain: details?.chance_of_rain + '%',
                        time: time
                    }
                    chances.push(data1);
                }
                for(var j = 0; j < 24; j++){
                    const hour = j;
                    const temp = data.forecast.forecastday[0].hour[j].temp_c
                    const data1 = {
                        hour,
                        temp
                    }
                    totalHours.push(data1);
                }
                const location = data.location.name + ', ' + data.location.country;
                const sunriseHour = parseInt(data.forecast.forecastday[0].astro.sunrise.split(':')[0]);
                const sunsetHour = parseInt(data.forecast.forecastday[0].astro.sunset.split(':')[0]) + 12;
                const presentHour = today.getHours();
                const sunriseDifftime = sunriseHour > presentHour ? ( sunriseHour - presentHour) + ' hours left' : (presentHour - sunriseHour ) + ' hours ago'; 
                const sunsetDifftime = sunsetHour > presentHour ? ( sunsetHour - presentHour) + ' hours left' : (presentHour - sunsetHour ) + ' hours ago';
                const time = data.location.localtime.split(' ')[1];
                console.log(chances);
                const weatherDetails = {
                    location: location,
                    lat: data.location.lat,
                    long: data.location.lon,
                    cel: data.current.temp_c,
                    for: data.current.temp_f,
                    wind: data.current.wind_kph,
                    cond: data.current.condition.text,
                    time: time,
                    sunrise: [data.forecast.forecastday[0].astro.sunrise, sunriseDifftime],
                    sunset: [data.forecast.forecastday[0].astro.sunset, sunsetDifftime],
                    chances: chances,
                    totalHours: totalHours
                }
                dispatch(updateWeather(weatherDetails));
                setCityname('');
                setHour(totalHours);
                console.log(totalHours);
            }
        );
    }
    const[dateYear, setDateyear] = useState('');
    const[secondDate, setSecondDate] = useState('');

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=36af6cf8980a4e2b89350235220106&q=${cityName}&days=1&aqi=no&alerts=no`).then(
            (res) => {
                let data = res.data;
                console.log(data);
                const chances = [];
                for(var i = today.getHours() - 2; i <= today.getHours(); i++){
                    const details = data.forecast.forecastday[0].hour[i];
                    const time = i > 12 ? ( i - 12 ) + ' PM' : i + ' AM';
                    const data1 = {
                        chance_of_rain: details?.chance_of_rain + '%',
                        time: time
                    }
                    chances.push(data1);
                }
                for(var j = 0; j < 24; j++){
                    const hour = j;
                    const temp = data.forecast.forecastday[0].hour[j].temp_c
                    const data1 = {
                        hour,
                        temp
                    }
                    totalHours.push(data1);
                }
                const location = data.location.name + ', ' + data.location.country;
                const sunriseHour = parseInt(data.forecast.forecastday[0].astro.sunrise.split(':')[0]);
                const sunsetHour = parseInt(data.forecast.forecastday[0].astro.sunset.split(':')[0]) + 12;
                const presentHour = today.getHours();
                const sunriseDifftime = sunriseHour > presentHour ? ( sunriseHour - presentHour) + ' hours left' : (presentHour - sunriseHour ) + ' hours ago'; 
                const sunsetDifftime = sunsetHour > presentHour ? ( sunsetHour - presentHour) + ' hours left' : (presentHour - sunsetHour ) + ' hours ago';
                const time = data.location.localtime.split(' ')[1];
                console.log(chances);
                const weatherDetails = {
                    location: location,
                    lat: data.location.lat,
                    long: data.location.lon,
                    cel: data.current.temp_c,
                    for: data.current.temp_f,
                    wind: data.current.wind_kph,
                    cond: data.current.condition.text,
                    time: time,
                    sunrise: [data.forecast.forecastday[0].astro.sunrise, sunriseDifftime],
                    sunset: [data.forecast.forecastday[0].astro.sunset, sunsetDifftime],
                    chances: chances,
                    totalHours: totalHours
                }
                dispatch(updateWeather(weatherDetails));
                setCityname('');
                setHour(totalHours);
                console.log(totalHours);
            }
        );
        const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                            ];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var today = new Date();
        const firstDate = monthNames[today.getMonth()] + ' ' + today.getFullYear();
        const secondsDate = days[today.getDay()] + ', ' + monthNames[today.getMonth()].toString().slice(0, 3) + ' ' + today.getDate() + ', ' + today.getFullYear();
        setDateyear(firstDate);
        setSecondDate(secondsDate);
    }, []);
    return (
        <div className="middleContent w-[65%]" style={{ color: '#607fad'}} >
            <div className="h-[15%] flex justify-between border-b-2 w-screen lg:w-full shadow-sm border-slate-100 sm:pl-10 pl-5 sm:pr-10">
                <div className="sm:flex hidden flex-col font-bold mt-7">
                    <h1>{dateYear}</h1>
                    <p>{secondDate}</p>
                </div>
                <div className="flex sm:p-5">
                    <div className="flex justify-between items-center p-2">
                        <i className="uil uil-search w-5 mr-2 text-xl"></i>
                        <input type="text" placeholder ="Search for location or city" value={cityname} onChange={(e) => setCityname(e.target.value)} className="border-none bg-slate-100 outline-none text-indigo-500 rounded-lg h-7 sm:w-64 w-52 sm:p-5 p-2"/>
                        <button className='bg-blue-500 border-2 text-slate-100 rounded-lg sm:px-4 p-1 sm:py-2 sm:ml-2 ml-5' onClick={handleQuery}>Search</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="sm:pl-10 pl-5 mt-5 font-bold mb-5">
                    Today Overview
                </div>
                <div className="grid grid-cols-2 gap-6 sm:pl-10 pl-5 pr-5">
                    <div className="flex bg-slate-100 sm:mr-48 p-5 sm:w-52 w-44">
                        <i className="uil uil-wind w-10 text-2xl"></i>
                        <div>
                            <p className="text-slate-500">Wind Speed</p>
                            <p className="font-bold">{weather?.wind} km/h</p>
                        </div>
                    </div>
                    <div className="flex bg-slate-100 sm:ml-32 ml-16 sm:mr-10 p-5 sm:w-52 w-44">
                        <i className="uil uil-celsius w-10 text-2xl"></i>
                        <div >
                            <p className="text-slate-500">Temp(°C)</p>
                            <p className="font-bold ">{weather?.cel} °C</p>
                        </div>
                    </div>
                    <div className="flex bg-slate-100 sm:mr-48 p-5 sm:w-52 w-44">
                        <i className="uil uil-map-marker-alt w-10 text-2xl"></i>
                        <div >
                            <p className="text-slate-500">lat, long</p>
                            <p className="font-bold">{weather?.lat}, {weather?.long}</p>
                        </div>
                    </div>
                    <div className="flex bg-slate-100 sm:ml-32 ml-16 mr-10 p-5 sm:w-52 w-44">
                        <i className="uil uil-fahrenheit w-10 text-2xl"></i>
                        <div>
                            <p className="text-slate-500">Temp(°F)</p>
                            <p className="font-bold">{weather?.for} °F</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-12 sm:ml-0 relative h-[40vh] w-[40vh] sm:h-[45vh] sm:w-[60vW]'>
                <Line 
                    data= {{
                        labels: hours?.map((element) => element.hour),
                        datasets: [{
                            label: 'Temperature',
                            data: hours?.map((element) => element.temp),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            tension: 0.4,
                            borderWidth: 1
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: "Temperature (°C) / Total hours "
                            },
                            legend: {
                                display: false,
                                position: "bottom"
                            }
                            }
                        }}
                    />
            </div>
        </div>
    );
}

export default SearchContent