import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#111',
            color: '#fff',
            padding: '4rem 1rem 2rem',
            textAlign: 'center',
            fontFamily: 'var(--font-body)'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                    fontSize: '2rem'
                }}>Hotel Valparaíso</h2>
                <p style={{ color: '#aaa', marginBottom: '2rem', lineHeight: '1.6' }}>
                    Un refugio de exclusividad en la costa dorada.<br />
                    1 Pacific Coast Hwy, Malibu, CA 90265, Estados Unidos
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>Reservas</span>
                    <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>Spa</span>
                    <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>Gastronomía</span>
                </div>

                <div style={{
                    borderTop: '1px solid #333',
                    paddingTop: '2rem',
                    fontSize: '0.8rem',
                    color: '#666',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <span>&copy; {new Date().getFullYear()} Hotel Valparaíso Malibu. Todos los derechos reservados.</span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Privacidad</span>
                        <span>Términos y Condiciones</span>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
