# meli-client

WebApp creada con NodeJS basada en Typescript que consume datos de la API de MercadoLibre.
El sitio busca productos y detalle de productos conectando a la API desarrollada para este proyecto: ```https://github.com/lshoobridge471/meli-api```

El sitio contiene las siguientes caracteristicas instaladas:

- **Webpack**: paquete de modulos para desarrollo web en Javascript.
- **Typescript**: lenguaje de programacion que transpila a Javascript.
- **ReactJS**: libreria para creacion de web apps.
- **AntDesign**: libreria de componentes para diseño web con React.
- **Jest y Enzyme**: librerias para testing unitario.
- **Babel**: conversor de JS para retrocompatibilidad.
- **Sass**: lenguaje de estilos.
- **Node-sass**: modificador que escucha los cambios en archivos .scss y los compila.
- **Axios**: cliente HTTP.
- **Eslint**: linter que examina la sintaxis del codigo y permite corregir.
- **Husky**: analizador de commits/push para ejecutar comandos antes de realizar dichas acciones (en nuestro caso, lo aplicamos sobre commit y push, se analiza el codigo y se ejecutan los tests).

## Contenido

## Instalacion

Debemos tener instalados **Node >= 10** y **GIT 2.13.0** en nuestra PC.

Ejecutamos:

```bash
npm install
```

Esto instalara todas las librerias necesarias para poder trabajar con el proyecto.

### Variables de entorno
En el proyecto hay un archivo llamado ```.env.example```

Crear una copia con el nombre ```.env``` y configurar lo que creamos necesario:

```bash
ENVIRONMENT=development # Entorno (development/production)
API_URL=http://localhost:8080 # URL de la api.
PRODUCTS_LIST_LIMIT=5 # Cantidad de productos para mostrar en la busqueda.
```

## Comandos

### Iniciar el proyecto en modo desarrollo (abre un hot-reload):
```bash
npm run dev
```
El mismo leera las variables de entorno que estan en el archivo .env

### Ejecutar tests
```bash
npm run test #:dev (ejecutar pruebas en el proceso actual, en lugar de crear hilos)
```
### Typescript check (ts-check)
```bash
npm run ts-check
```
### Ejecutar eslint
```bash
npm run lint
```
### Ejecutar eslint y fixear codigo
```bash
npm run lint:fix
```
### Compilar el proyecto a javascript
```bash
npm run build #:dev (modo development)
```
Se generara la transpilacion de typescript a Javascript y el resultado estara en la carpeta *build/*.

# Creditos

Sistema creado por Lucas Shoobridge para entrevista con MercadoLibre.