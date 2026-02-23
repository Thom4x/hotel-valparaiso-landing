# Documentación Técnica: Landing Page "Hotel Valparaíso"

## 1. Visión General
Proyecto web promocional para el **Hotel Valparaíso**, un resort de súper lujo ubicado cerca de Malibú, Los Ángeles. El proyecto es solicitado en idioma **español** por la dirección (CEO) con el propósito de exhibir el nivel premium de la infraestructura. Esta iteración no procesará transacciones financieras, pero su arquitectura debe estar preparada para ello.

## 2. Requerimientos de Diseño
Dado que es un hotel de lujo, la interfaz debe proyectar exclusividad:
*   **Tipografía:** Elegante y legible, usando familias serif para titulares y sans-serif modernas para cuerpo de texto.
*   **Colores:** Paleta sobria. Tonos oscuros (negro obsidiana, grises profundos) contrastados con acentos metálicos (dorados, bronces) y blanco puro.
*   **Animaciones:** "Micro-interacciones" sutiles. *Fade-ins* al hacer scroll (reveal), paralaje ligero en imágenes y transiciones suaves (ease-in-out) para no abrumar al visitante, manteniendo un estado "zen" y sofisticado.

## 3. Arquitectura para la Escalabilidad
Para garantizar que la aplicación pueda evolucionar hacia un motor de reservas complejo o integrar un sistema de Chatbot de inteligencia artificial, se descartan los constructores visuales tradicionales (Wix, WordPress estándar).

*   **Patrón Arquitectónico:** Desarrollo Orientado a Componentes (Component-Driven Development).
*   **Manejo de Estado Estructural:** UI completamente separada de la lógica de negocio futura. Cualquier acción futura (ej. click en "Ver Disponibilidad") podrá ser conectada fácilmente a *hooks* de estado.

## 4. Stack Tecnológico Definido
*   **Framework Frontend:** **React.js**. El estándar de la industria que permite crear interfaces interactivas ultra rápidas. 
*   **Bundler/Tooling:** **Vite**. Reemplaza a Create React App por su compilación extremadamente rápida y recarga en caliente instantánea (Hot Module Replacement), mejorando radicalmente la Experiencia del Desarrollador (DX).
*   **Estilos:** **Vanilla CSS**. Se escribirá CSS puro y semántico. Esto elimina el "hinchazón" (bloat) de librerías externas, asegurando que el sitio cargue rápido y que los estilos sean únicos e irrepetibles para el hotel.

## 5. Estructura de Componentes
El layout se divide en las siguientes piezas encapsuladas:
1.  **`<Navbar />`:** Navegación minimalista (fija tras hacer scroll).
2.  **`<Hero />`:** Sección principal ocupando el 100% de la pantalla (100vh). Título poderoso sobre un video/imagen de Malibú de fondo.
3.  **`<Amenities />`:** Exposición de los servicios top del hotel (piscina infinita, spa holístico, conserje 24/7).
4.  **`<RoomsPreview />`:** Muestra de habitaciones insignia (ej. *Oceanfront Penthouse*, *Malibu Cliff Suite*).
5.  **`<Testimonials />`:** Área de validación social con testimonios curados de figuras públicas (generados conceptualmente para la maqueta).
6.  **`<Footer />`:** Datos de contacto, ubicación ficticia en Malibú y redes sociales.

## 6. Integraciones Futuras (Hoja de Ruta)
*   **Módulo de Reservas:** Los componentes React podrán envolverse en proveedores de estado (Redux o Context API) en v2.0 para manejar un carrito de compra/reservas en pasos.
*   **Chatbot Integrado:** Al usar un framework de Single Page Application (SPA), inyectar un script asíncrono para un Chatbot no bloqueará el renderizado inicial y se colocará flotando globalmente sobre la estructura principal de la app.
