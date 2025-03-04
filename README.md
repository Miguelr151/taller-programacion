<<<<<<< HEAD
# taller-programacion
=======
# 📦 API REST de Inventario con NestJS

Este proyecto es una API REST desarrollada con **NestJS** para la gestión de un sistema de inventario en una tienda en línea. La API permite administrar **productos, categorías, usuarios y órdenes** consumiendo datos desde archivos JSON.

## 📌 Requisitos Previos
Asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (versión 16 o superior)
- **npm** (se instala con Node.js)
- **NestJS CLI** (si no lo tienes, instálalo con `npm install -g @nestjs/cli`)

## 🚀 Instalación y Configuración
1. **Clonar el repositorio**
```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
```
2. **Instalar las dependencias**
```bash
    npm install
```
3. **Ejecutar el servidor en desarrollo**
```bash
    npm run start
```
4. **Ejecutar en modo observación (hot-reload)**
```bash
    npm run start:dev
```

La API estará disponible en:
📌 `http://localhost:3000`

## 📁 Estructura del Proyecto
```
src/
 ├── app.module.ts
 ├── main.ts
 ├── products/
 │    ├── products.module.ts
 │    ├── products.controller.ts
 │    ├── products.service.ts
 ├── categories/
 │    ├── categories.module.ts
 │    ├── categories.controller.ts
 │    ├── categories.service.ts
 ├── users/
 │    ├── users.module.ts
 │    ├── users.controller.ts
 │    ├── users.service.ts
 ├── orders/
 │    ├── orders.module.ts
 │    ├── orders.controller.ts
 │    ├── orders.service.ts
```

## 📌 Endpoints de la API
### **Productos** `/products`
- `GET /products` → Obtener todos los productos
- `GET /products/:id` → Obtener un producto por ID
- `POST /products` → Crear un producto
- `PUT /products/:id` → Actualizar un producto
- `DELETE /products/:id` → Eliminar un producto

### **Categorías** `/categories`
- `GET /categories` → Obtener todas las categorías
- `GET /categories/:id` → Obtener una categoría por ID
- `POST /categories` → Crear una categoría
- `PUT /categories/:id` → Actualizar una categoría
- `DELETE /categories/:id` → Eliminar una categoría

### **Usuarios** `/users`
- `GET /users` → Obtener todos los usuarios
- `GET /users/:id` → Obtener un usuario por ID
- `POST /users` → Crear un usuario
- `PUT /users/:id` → Actualizar un usuario
- `DELETE /users/:id` → Eliminar un usuario

### **Órdenes** `/orders`
- `GET /orders` → Obtener todas las órdenes
- `GET /orders/:id` → Obtener una orden por ID
- `POST /orders` → Crear una orden
- `PUT /orders/:id` → Actualizar una orden
- `DELETE /orders/:id` → Eliminar una orden

## 📜 Documentación con Swagger
Para ver la documentación generada automáticamente, accede a:
📌 `http://localhost:3000/api`

## 📖 Licencia
Este proyecto está bajo la licencia Miguel Angel Rivera Lozano - Andres Chambo.

>>>>>>> 42e0000 (Agregando README.md)
