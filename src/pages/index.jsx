import React from 'react'
import "../assets/css/styles.css"
import Navigation from '../components/navigation'
import MainHero from '../components/mainhero'
import Organized from '../components/organized'
import About from '../components/about'
import Footer from '../components/footer'
import Categories from '..//components/categories'

const Home = () => {
  return (
    <>
    <Navigation />
    <MainHero />
    <Organized />
    <About />
    <Categories/>
    <Footer />
    </>
  )
}

export default Home
