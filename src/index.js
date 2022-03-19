// Import to allow async/await imports
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// Import styling
import '@/styles/index.scss'

// Import searchbar
import { searchBarDom } from '@/js/dom/searchbar'

//src\js\dom\header.js
import { defaultDisplay } from '@/js/dom/header'

// Load default display and append search bar on load
window.onload = () => {
  defaultDisplay('Wilmington', 'Wilmington')
  const body = document.querySelector('body')
  body.append(searchBarDom())
}
