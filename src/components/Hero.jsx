import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content fade-in">
                <h2 className="hero-subtitle">MÁS ALLÁ DEL LUJO</h2>
                <h1 className="hero-title">Hotel Valparaíso</h1>
                <p className="hero-description">
                    Un santuario de serenidad en los acantilados de Malibú.
                    Donde la arquitectura de vanguardia abraza la inmensidad del Océano Pacífico.
                </p>
                <button className="btn-gold hero-cta">Descubrir Experiencias</button>
            </div>
            <div className="hero-scroll-indicator">
                <span>Explorar</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
