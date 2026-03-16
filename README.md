# Arena Tyky – E-commerce + Torneos (API)

Plataforma backend (Node.js/Express) para **e-commerce de productos gaming** y **gestión de torneos** con MongoDB.

## Stack
- Node.js + Express
- MongoDB + Mongoose
- Auth: JWT (jsonwebtoken) + bcryptjs
- Seguridad: helmet, express-rate-limit, cors

## Requisitos
- Node.js 18+ (recomendado)
- MongoDB (local o remoto)

## Instalación
```bash
npm install
```

## Configuración
1. Crea un archivo `.env` en la raíz (NO se versiona) usando como base `.env.example`.
2. Configura al menos:
   - `MONGODB_URI`
   - `JWT_SECRET`

## Ejecutar
- Desarrollo:
```bash
npm run dev
```

- Producción:
```bash
npm start
```

Servidor por defecto en: `http://localhost:3000`

## Scripts
- `npm start`: inicia el servidor
- `npm run dev`: inicia con nodemon
- `npm test`: corre jest
- `npm run build`: build CSS/JS (si aplica a la parte frontend)

## Endpoints (principales)
Base URL: `/api`

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Users
- `GET /api/users/profile` (requiere JWT)
- `PUT /api/users/profile` (requiere JWT)

### Products
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` (admin)
- `PUT /api/products/:id` (admin)
- `DELETE /api/products/:id` (admin)
- `POST /api/products/:id/reviews` (requiere JWT)

### Tournaments
- `GET /api/tournaments`
- `GET /api/tournaments/:id`
- `POST /api/tournaments` (admin)
- `PUT /api/tournaments/:id` (admin)
- `DELETE /api/tournaments/:id` (admin)
- `POST /api/tournaments/:id/participate` (requiere JWT)
- `DELETE /api/tournaments/:id/participate` (requiere JWT)

### Orders
- `GET /api/orders` (requiere JWT; admin ve todas)
- `POST /api/orders` (requiere JWT)

## Autenticación (JWT)
Enviar header:
```
Authorization: Bearer <token>
```

El token se obtiene en `POST /api/auth/login` y `POST /api/auth/register`.

## Notas de seguridad
- **Nunca subas `.env` al repositorio**. Usa `.env.example` como plantilla.
- En producción configura `JWT_SECRET` con un valor fuerte y rota credenciales si fueron expuestas.
- Configura CORS con orígenes permitidos (variable `CORS_ORIGIN` opcional).

## Licencia
MIT
