import React, { useEffect, useRef } from 'react';
import '../styles/RoomsPreview.css';
import imgRoomOcean from '../assets/room_oceanfront_malibu_1771875520107.png';
import imgRoomCliff from '../assets/room_cliffside_malibu_1771875543538.png';

const roomsData = [
    {
        id: 1,
        title: 'Oceanfront Penthouse',
        size: '120 m²',
        description: 'Vistas panorámicas ininterrumpidas del Océano Pacífico. Bañera de inmersión y diseño minimalista.',
        image: imgRoomOcean
    },
    {
        id: 2,
        title: 'Malibú Cliffside Villa',
        size: '185 m²',
        description: 'Privacidad absoluta con terraza exclusiva, piscina de inmersión y cálidos detalles en madera de roble.',
        image: imgRoomCliff
    }
];

const RoomsPreview = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    containerRef.current.classList.add('animate-in');
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    return (
        <section className="rooms-preview">
            <div className="container" ref={containerRef}>
                <div className="rooms-header">
                    <h2 className="section-subtitle">Alojamiento</h2>
                    <h3 className="section-title">Nuestras Residencias</h3>
                </div>

                <div className="rooms-list">
                    {roomsData.map((room, index) => (
                        <div
                            className={`room - item ${index % 2 !== 0 ? 'room-item-reverse' : ''} `}
                            key={room.id}
                        >
                            <div className="room-image-container">
                                <img src={room.image} alt={room.title} loading="lazy" />
                            </div>
                            <div className="room-info">
                                <h4>{room.title}</h4>
                                <span className="room-size">{room.size}</span>
                                <p>{room.description}</p>
                                <button className="btn-gold">Explorar Suite</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoomsPreview;
