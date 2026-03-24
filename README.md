# Jalynda

Web corporativa y catálogo digital para Jalynda, tienda de perfumes árabes ubicada en Fuenlabrada, Madrid.

El proyecto está construido con React y Vite, y está pensado para servir como escaparate visual de productos, punto de contacto comercial y base para seguir ampliando el catálogo con nuevos perfumes, imágenes y precios.

## Descripción

Jalynda presenta una landing comercial con identidad visual inspirada en la fachada real de la tienda, junto con un catálogo de productos que puede ampliarse de forma progresiva.

Actualmente el proyecto incluye:

- Portada de marca con diseño visual personalizado.
- Información de tienda, contacto y ubicación.
- Catálogo de perfumes con soporte para imágenes individuales.
- Soporte para productos cargados desde recortes del escaparate.
- Base preparada para seguir incorporando nombres, precios y descripciones reales.

## Información comercial

- Nombre: Jalynda
- Actividad: Venta de perfumes árabes
- Dirección: Calle de la Picara Molinera 12, Madrid
- Teléfono: +34 663724431
- Email: info@jalynda.com

## Stack técnico

- React 19
- Vite 8
- JavaScript
- ESLint

## Requisitos

Antes de arrancar el proyecto, asegúrate de tener instalado:

- Node.js 20 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

## Desarrollo local

Arranque del servidor de desarrollo:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

Previsualización del build:

```bash
npm run preview
```

Lint del proyecto:

```bash
npm run lint
```

## Estructura del proyecto

```text
Jalynda/
├─ public/
│  ├─ escaparate.jpg
│  ├─ escaparate.zip
│  ├─ escaparate_recortes/
│  └─ ...
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ assets/
├─ nusuk.jpg
├─ package.json
└─ README.md
```

## Gestión del catálogo

El catálogo está preparado para trabajar de dos formas:

### 1. Imagen individual por producto

Cuando un perfume tiene su propia foto, se puede conectar directamente en el catálogo.

Ejemplo actual:

- Nusuk usa una imagen individual del producto.

### 2. Recortes exportados desde escaparate

Cuando se parte de una foto general del escaparate, lo recomendable es generar recortes separados y guardarlos como archivos individuales.

Ruta actual usada en el proyecto:

- `public/escaparate_recortes/`

Esto permite que cada producto tenga su propia tarjeta sin depender de recortes CSS artificiales.

## Flujo recomendado para añadir nuevos perfumes

1. Añadir la imagen del producto al proyecto.
2. Definir nombre comercial.
3. Añadir precio.
4. Añadir una descripción breve.
5. Actualizar el array de productos en `src/App.jsx`.
6. Verificar visualmente el resultado en desarrollo.

Formato recomendado por producto:

- Nombre
- Precio
- Ruta de imagen
- Descripción breve
- Estado: disponible o pendiente

## Despliegue

El proyecto está preparado para desplegarse como sitio estático en plataformas como:

- Vercel
- Netlify
- GitHub Pages con configuración adicional

Proceso general:

1. Instalar dependencias.
2. Ejecutar `npm run build`.
3. Publicar el contenido generado en `dist/` o conectar el repositorio al proveedor.

## Repositorio

Repositorio remoto configurado:

- https://github.com/javier201012/jalynda.git

## Estado actual

El proyecto ya dispone de:

- Branding inicial de Jalynda.
- Catálogo base funcional.
- Imágenes reales cargadas para varios productos.
- Base visual preparada para seguir refinando nombres, precios y descripciones.

## Próximas mejoras sugeridas

- Sustituir nombres temporales de productos por nombres finales.
- Añadir precios reales del catálogo.
- Incorporar filtros o categorías.
- Añadir formulario de contacto o pedido.
- Preparar despliegue público.

## Licencia

Uso privado para la tienda Jalynda, salvo que se defina otra política más adelante.
