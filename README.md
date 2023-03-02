## Choice Técnico- FULL STACK
### Manuel Guevara

El repo contiene dos carpetas (toolbox-api y toolbox-front) que corresponden a la API y al Frontend cliente respectivamente.

Para correr la api hacer cd a toolbox-api, luego correr el npm install y para correr npm start, y estara escuchando por el puerto 3000. http://localhost:3000/

Para correr las pruebas en la API se debe ejecutar el comando npm test.

Para correr el Frontend cliente hacer cd a toolbox-front, luego correr el npm install y para correr npm run serve, y estara disponible en 3030. http://localhost:3030/

Para correr las pruebas en el Front se debe ejecutar el comando npm test.

NOTA: para que el front funcione la api tiene que estar corriendo.

## Objetivos Logrados API

### 1) API

1. [x] Se deben llamar al listado de archivos /v1/secret/files
2. [x] Descargar cada file usando /v1/secret/file/{file}
3. [x] Formatear la información en los CSV
4. [x] crear los tests que validan el API usando Mocha + Chai.

#### Opcionales Logrados

5. [x] Un endpoint GET /files/list que dé como respuesta la lista de archivos disponibles tal cual como se la muestra en el API Externa.
6. [x] Agregar un filtro por queryparam para poder pedir los datos de un archivo especifico: /files/data?fileName=Nombre del archivo.

NOTA: adicional mente en la api se agrego un veficador de formato para aseguarse de que los campos de los archivos csv tuvieran el formato correcto de no ser el caso se omite la linea, si un archivo esta vacio o se omitieron todas sus linieas el archivo nose muestra.

## Objetivos Logrados Front

### 2) Front

1. [x] Usando React + React Bootstrap se debe crear una pantalla similar a la que se muestra en este wireframe (ver link): https://cs1.ssltrust.me/s/ECH9VusiMmi3ac1

#### Opcionales Logrados

2. [x] Usar Redux Redux - A predictable state container for JavaScript apps. | https://redux.js.org/.
3. [x] Poder filtrar por "fileName" usando el punto opcional del API de listado de archivos y filtro por queryparam.
