# 🛠️ Backend - Marketplace API

Este es el backend de la aplicación Marketplace, desarrollado en **NestJS** y utilizando **PostgreSQL** como base de datos.

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/danjabba/marketplace
cd backend
```
### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo .env en la raíz del backend y agrega:
```bash
env
DATABASE_URL="postgresql://user:password@localhost:5433/marketplace"
JWT_SECRET="mysecretkey"
PORT=3000
```
### 4️⃣ Ejecutar el servidor
```bash
npm run start
```


📡 Endpoints principales
Método	Ruta	Descripción
POST	/auth/register	Registrar usuario
POST	/auth/login	Iniciar sesión
GET	/products	Obtener productos
POST	/products	Crear producto (🔒 auth)


🛠️ Tecnologías usadas
NestJS (Framework backend)
PostgreSQL (Base de datos)
Prisma (ORM)
JWT (Autenticación)