// Import fetch api
// import { forecastByCityState } from '../api'

// Import utils
import { searchCity, tempConversion } from '../utils/conversions'

const searchBar = () => {
  const searchWrapper = document.createElement('div')
  searchWrapper.classList.add('search-wrapper')
  searchWrapper.style.order = '-1'

  const form = document.createElement('form')

  const search = document.createElement('input')
  search.setAttribute('type', 'search')
  search.setAttribute('results', '5')
  search.setAttribute('name', 'search')
  search.setAttribute('id', 'search-input')

  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'submit')

  submit.addEventListener('click', (e) => {
    e.preventDefault()
    searchCity()
  })

  form.append(search, submit)
  searchWrapper.appendChild(form)

  return searchWrapper
}

const convertBtn = () => {
  const btn = document.createElement('button')
  btn.classList.add('convert-btn')
  btn.style.order = '-1'

  btn.addEventListener('click', tempConversion)

  return btn
}

export { searchBar, convertBtn }
