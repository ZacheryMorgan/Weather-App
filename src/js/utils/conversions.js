import { callDisplays } from '../dom/header'

const currentTemp = {
  temp: 'F',
}

const kToF = (x) => {
  if (currentTemp.temp === 'C') {
    x = x - 273.15
    return `${Math.round(x)}\u00B0C`
  } else {
    x = ((x - 273.15) * 9) / 5 + 32
    return `${Math.round(x)}\u00B0F`
  }
}

const tempConversion = () => {
  if (currentTemp.temp === 'F') {
    currentTemp.temp = 'C'
  } else {
    currentTemp.temp = 'F'
  }

  const regex = /^\W?\d+/g
  const temp = document.querySelectorAll('.temp')

  if (temp[0].textContent.includes('F')) {
    temp.forEach((a) => {
      a.textContent = `${Math.round(((a.textContent.match(regex) - 32) * 5) / 9)}\u00B0C`
    })
  } else if (temp[0].textContent.includes('C')) {
    temp.forEach((a) => {
      a.textContent = `${Math.round((a.textContent.match(regex) * 9) / 5 + 32)}\u00B0F`
    })
  }
}

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

async function displayHeader(x, city) {
  const display = await callDisplays(x, city)
  return display
}

const searchCity = () => {
  console.log(document.querySelector('#search-input').value)
  displayHeader(
    document.querySelector('#search-input').value,
    document.querySelector('#search-input').value
  )
}

// const sliderBtn = () => {
//   const left = document.createElement('div')
//   left.classList.add('slider-left')
//   left.style.backgroundColor = 'red'
//   left.style.borderRadius = '50px'

//   const right = document.createElement('div')
//   right.classList.add('slider-right')
//   right.style.backgroundColor = 'red'
//   right.style.borderRadius = '50px'

//   return { left, right }
// }

export { kToF, timeConversion, searchCity, tempConversion }
