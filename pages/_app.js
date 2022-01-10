import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import React from 'react'
import {Layout} from '../components'

function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />
  
  )
}

export default MyApp
