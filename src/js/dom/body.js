// Current => Time, Kelvin Temp, Wind Speed, Weather, Weather Description, Weather Icon
// .current.dt
// .current.temp
// .current.wind_speed
// .current.weather.main
// .current.weather.description
// .current.weather[i].icon

// Hourly => Time, Temp, Wind Speed, Weather Icon
// .hourly.dt (convert dt to how far from current time in hours)
// .hourly.temp
// .hourly.wind_speed
// .hourly.weather[i].icon

// Next 7 Days => Day Name, Morning Temp, Day Temp, Night Temp, Wind Speed, Weather Icon
// [i].dt
// [i].temp.morn
// [i].temp.day
// [i].temp.night
// [i].wind_speed
// [i].weather[j].icon (possible to have more than one, account for this in display)

// Icon Url
// http://openweathermap.org/img/wn/"INSERT ICON"@2x.png

/* import { forecastByCityState , city } from '../api';

async function body() {
    const app = document.querySelector('#root');
    const data = await forecastByCityState();
    const mainWeather= await data.weather[0].main;

    const wrapper = document.createElement('div');
    wrapper.classList.add('body-wrapper');

    const p = document.createElement('p');
    p.textContent = `${mainWeather} Weather`;
    
    wrapper.appendChild(p)
    app.appendChild(wrapper);

    return app
}

export { body } */
