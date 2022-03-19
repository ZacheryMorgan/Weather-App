// Import utils
import { searchCity, tempConversion } from '../utils/conversions'

// Dom element for search input and button
const searchBarDom = () => {
  const searchWrapper = document.createElement('div')
  searchWrapper.classList.add('search-wrapper')
  searchWrapper.style.order = '-1'

  const form = document.createElement('form')

  const search = document.createElement('input')
  search.setAttribute('type', 'search')
  search.setAttribute('results', '5')
  search.setAttribute('name', 'search')
  search.setAttribute('id', 'search-input')
  search.setAttribute('placeholder', 'Enter city')

  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'submit')
  submit.setAttribute('value', 'Search')

  submit.addEventListener('click', (e) => {
    e.preventDefault()
    searchCity()
  })

  form.append(search, submit)
  searchWrapper.appendChild(form)

  return searchWrapper
}

// Dom element for convert button
const convertBtn = () => {
  const btn = document.createElement('button')
  btn.classList.add('convert-btn')
  btn.innerHTML = 'F &#8644; C'
  btn.style.order = '-1'

  btn.addEventListener('click', tempConversion)

  return btn
}

export { searchBarDom, convertBtn }
