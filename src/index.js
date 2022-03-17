// Import to allow async/await imports
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// Import styling
import '@/styles/index.scss'

// Import searchbar
import { searchBar, convertBtn } from '@/js/dom/searchBar'

//src\js\dom\header.js
import { defaultDisplay } from '@/js/dom/header'

window.onload = () => {
  defaultDisplay('Wilmington', 'Wilmington')
  const body = document.querySelector('body')
  body.append(convertBtn(), searchBar())
}

// // Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// // Test a background image url in CSS
/* const imageBackground = document.createElement('div')
imageBackground.classList.add('image') */

// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// // Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'
