FROM node:20-bullseye

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Copiar el resto del proyecto
COPY . .

EXPOSE 4200

# Arrancar Angular en modo desarrollo
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
