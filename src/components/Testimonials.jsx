import React, { useEffect, useRef } from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: 'Leonardo DiCaprio',
        role: 'Actor & Activista',
        text: '"Hotel Valparaíso redefine el significado de escapar. El nivel de privacidad, atención al detalle y respeto por el entorno costero es simplemente insuperable. Mi refugio favorito en California."',
        avatar: 'https://ui-avatars.com/api/?name=Leonardo+DiCaprio&background=1A1A1A&color=D4AF37&size=100'
    },
    {
        id: 2,
        name: 'Charlize Theron',
        role: 'Actriz & Productora',
        text: '"Una experiencia transformadora. Desde el spa holístico hasta la gastronomía de clase mundial, cada momento aquí está diseñado para alcanzar la perfección absoluta. El estándar de oro en hospitalidad."',
        avatar: 'https://ui-avatars.com/api/?name=Charlize+Theron&background=1A1A1A&color=D4AF37&size=100'
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    scrollRef.current.classList.add('visible');
                }
            },
            { threshold: 0.3 }
        );

        if (scrollRef.current) observer.observe(scrollRef.current);
        return () => {
            if (scrollRef.current) observer.unobserve(scrollRef.current);
        }
    }, []);

    return (
        <section className="testimonials">
            <div className="container" ref={scrollRef}>
                <div className="testimonials-header">
                    <h2 className="section-subtitle">Exclusividad Validada</h2>
                    <h3 className="section-title">Voces de la Excelencia</h3>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map(t => (
                        <div className="testimonial-card" key={t.id}>
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <img src={t.avatar} alt={t.name} className="author-avatar" />
                                <div className="author-info">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
