import React, { useEffect, useRef } from 'react';
import '../styles/Amenities.css';
import imgSpa from '../assets/amenity_spa_malibu_1771875349495.png';
import imgDining from '../assets/amenity_dining_malibu_1771875379776.png';
import imgPool from '../assets/amenity_pool_malibu_1771875398324.png';

const amenitiesData = [
    {
        id: 1,
        title: 'Spa Holístico & Bienestar',
        description: 'Relájese con tratamientos inspirados en el océano y piedras calientes con vistas al Pacífico.',
        image: imgSpa
    },
    {
        id: 2,
        title: 'Gastronomía de Autor',
        description: 'Sabores locales elevados a la perfección en nuestro restaurante con Estrella Michelin.',
        image: imgDining
    },
    {
        id: 3,
        title: 'Piscina Infinity Edge',
        description: 'Nade suspendido sobre los acantilados de Malibú en una experiencia infinita.',
        image: imgPool
    }
];

const Amenities = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.amenity-card');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    return (
        <section className="amenities container">
            <div className="amenities-header">
                <h2 className="section-subtitle">Exclusividad</h2>
                <h3 className="section-title">Servicios Inigualables</h3>
                <p className="section-text">
                    Cada detalle en Hotel Valparaíso ha sido curado para superar las expectativas del viajero más exigente.
                </p>
            </div>

            <div className="amenities-grid">
                {amenitiesData.map((amenity) => (
                    <div key={amenity.id} className="amenity-card" ref={observerRef}>
                        <div className="amenity-img-wrapper">
                            <img src={amenity.image} alt={amenity.title} loading="lazy" />
                        </div>
                        <div className="amenity-content">
                            <h4>{amenity.title}</h4>
                            <p>{amenity.description}</p>
                            <button className="amenity-link">Descubrir</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Amenities;
