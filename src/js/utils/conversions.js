import { callDisplays } from '../dom/header'

// Variable to know if search should be in F or C
const currentTemp = {
  temp: 'F',
}

// Temp conversion on new search and load
const kToF = (x) => {
  if (currentTemp.temp === 'C') {
    x = x - 273.15
    return `${Math.round(x)}\u00B0C`
  } else {
    x = ((x - 273.15) * 9) / 5 + 32
    return `${Math.round(x)}\u00B0F`
  }
}

// Wind conversion on new search and load
const mphToKph = (x) => {
  if (currentTemp.temp === 'C') {
    x = x * 1.609
    return `${Math.round(x)}kph`
  } else {
    x = x / 1.609
    return `${Math.round(x)}mph`
  }
}

// Temp and Wind conversion for button
const tempConversion = () => {
  if (currentTemp.temp === 'F') {
    currentTemp.temp = 'C'
  } else {
    currentTemp.temp = 'F'
  }

  // Regex to grab negative and numbers
  const regex = /(-)*(\d)+/g

  const temp = document.querySelectorAll('.temp')
  const wind = document.querySelectorAll('.wind')
  const currentWind = document.querySelector('.current-wind')
  const feelsLike = document.querySelector('.current-feels-like')

  if (temp[0].textContent.includes('F')) {
    temp.forEach((a) => {
      a.textContent = `${Math.round(((a.textContent.match(regex) - 32) * 5) / 9)}\u00B0C`
    })
    wind.forEach((a) => {
      a.textContent = `${Math.round(a.textContent.match(regex) * 1.609)}kph`
    })
    currentWind.textContent = `Winds: ${Math.round(
      currentWind.textContent.match(regex) * 1.609
    )}kph`
    feelsLike.textContent = `Feels like:  ${Math.round(
      ((feelsLike.textContent.match(regex) - 32) * 5) / 9
    )}\u00B0C`
  } else if (temp[0].textContent.includes('C')) {
    temp.forEach((a) => {
      a.textContent = `${Math.round((a.textContent.match(regex) * 9) / 5 + 32)}\u00B0F`
    })
    wind.forEach((a) => {
      a.textContent = `${Math.round(a.textContent.match(regex) / 1.609)}mph`
    })
    currentWind.textContent = `Winds: ${Math.round(
      currentWind.textContent.match(regex) / 1.609
    )}mph`
    feelsLike.textContent = `Feels like: ${Math.round(
      (feelsLike.textContent.match(regex) * 9) / 5 + 32
    )}\u00B0F`
  }
}

// Turns military time into standard and adds am/pm
const timeConversion = (hourlyTime, fullTime) => {
  if (fullTime.getHours() == 0) {
    hourlyTime.textContent = `${fullTime.getHours() + 12}am`
  } else if (fullTime.getHours() < 12) {
    hourlyTime.textContent = `${fullTime.getHours()}am`
  } else if (fullTime.getHours() > 12) {
    hourlyTime.textContent = `${fullTime.getHours() - 12}pm`
  } else {
    hourlyTime.textContent = `${fullTime.getHours()}pm`
  }
}

// Loads doms after api is loaded, passes data and city name
async function displayHeader(x, city) {
  const display = await callDisplays(x, city)
  return display
}

// Pass input into api and into city name dom
const searchCity = () => {
  console.log(document.querySelector('#search-input').value)
  displayHeader(
    document.querySelector('#search-input').value,
    document.querySelector('#search-input').value
  )
}

export { kToF, mphToKph, timeConversion, searchCity, tempConversion }
