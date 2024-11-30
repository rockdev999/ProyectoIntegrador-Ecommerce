# Usa una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos de construcción a la carpeta de Nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Expone el puerto 80 para el servidor web
EXPOSE 80

# Comando de inicio para Nginx
CMD ["nginx", "-g", "daemon off;"]

