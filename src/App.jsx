import { useState } from 'react'
import CountdownTimer from './components/CountdownTimer'
import Header from './components/Header'
import Footer from './components/Footer'
import './scss/App.scss'

function App() {
  const TheDate = new Date('2024-01-31T23:59:59').getTime()

  return (
    <>
    <Header></Header>
      <CountdownTimer targetDate={TheDate}></CountdownTimer>
      <Footer></Footer>
    </>
  )
}

export default App
