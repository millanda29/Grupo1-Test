# Usa la imagen base de Nginx
FROM nginx:latest

# Copia los archivos de tu proyecto al directorio de Nginx
COPY ./ /usr/share/nginx/html

# Exponer el puerto 80 para acceder al servidor
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
