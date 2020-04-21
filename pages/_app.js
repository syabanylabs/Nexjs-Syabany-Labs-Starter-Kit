import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Utils
import resetStyles from '../components/commons/styles/reset.styles'


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>

        <style jsx global>
          {resetStyles}
        </style>
      </div>
    )
  }
}