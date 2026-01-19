# Pymbite Angular + Docker

Proyecto Angular 20 contenerizado con Docker y orquestado con Docker Compose.

## 🚀 Desarrollo

### Levantar el proyecto
```bash
docker-compose up -d --build

## 🚀 CI/CD con GitHub Actions y GHCR

Este proyecto incluye un pipeline de integración continua (CI/CD) que se ejecuta en cada push a la rama `main`.

### 🔹 ¿Qué hace el pipeline?
1. Descarga el código (`checkout`).
2. Instala dependencias con `npm ci`.
3. Compila Angular (`npm run build`).
4. Construye una imagen Docker.
5. Publica la imagen en **GitHub Container Registry (GHCR)**.

### 🔹 Imagen publicada
La imagen se publica automáticamente en GHCR con dos tags:
- `latest` → siempre apunta al último build.
- `<commit-sha>` → trazabilidad exacta de cada commit.

Ejemplo:

### 🔹 Cómo usar la imagen
Descargar la última versión:
```bash
docker pull ghcr.io/glepal/pymbite-angular-docker/angular-app:latest