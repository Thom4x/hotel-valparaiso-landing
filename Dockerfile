FROM node:20-alpine AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo archivos de dependencias primero para aprovechar la caché de Docker
COPY package.json package-lock.json ./

# Instalar dependencias exactas
RUN npm ci

# Copiar el resto del código fuente del proyecto
COPY . .

# Construir los assets de React/Vite para producción
RUN npm run build

# Usar NGINX servir los archivos estáticos HTML/CSS/JS
FROM nginx:alpine

# Copiar los archivos compilados en la etapa de build a la ruta por defecto de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80 hacia afuera del contenedor
EXPOSE 80

# Iniciar el proceso de NGINX y no mandarlo a segundo plano
CMD ["nginx", "-g", "daemon off;"]
