import React from 'react'
import {Header} from '../components/Header';
import Navbar from '../components/Navbar';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
          <Navbar />
        <Header />
        <ProductSection />
        <Footer />
        </>
    )
}

export default Home