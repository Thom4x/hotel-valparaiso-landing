import React from 'react'
import Hero from './components/Hero'
import Amenities from './components/Amenities'
import RoomsPreview from './components/RoomsPreview'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <Hero />
            <Amenities />
            <RoomsPreview />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
