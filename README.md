# Entrega TP

Materia: Desarrollo de aplicaciones Web
Docente: Matías Ramos
Alumno: Ignacio Dasso
Cursada: 5to bimestre 2023

## Desarrollo del TP
Patiendo de la maqueta, se programará el frontend para que con la carga en el navegador de localhost:8000 se cargue automáticamente la lista de dispositivos.
Será posible interactuar con los dispositivos pudiendo encenderlos/apagarlos haciendo que el cambio impacte en la base de datos. De este modo se logrará que en un posterior acceso a la web se encuentren los últimos estados.
Asimismo, será posible agregar y borrar dispositivos con el uso de un modal y validaciones en la carga de los campos indicados.

## Log

03/12/2023
- Copio localmente la branch "maqueta"
- Defino un nuevo branch "dev" para el desarrollo del TP y hago push
- Edito el readme del nuevo branch "dev" y hago un commit + push para validar el enlace con GitHub
- Ejecuto docker-compose up para conocer el status de partida para el desarrollo. Frontend (localhost:8000): OK. Conexión con la DB (localhost:8001): OK.
- En el index.html defino una región donde ubicar un <div> para visualizar la lista de dispositivos.
- Se complete la confección de la lista al modo en que se obtiene con los IDs de cada el elemento antes del intervalo de la clase 7/8. Ya se reciben los datos en el backend. Lo que sigue es iteractuar con la base de datos.
- Hago un commit con el estado actual.
- Hubo varios problemas para obtener respuesta de la base de datos siguiendo los pasos que se hicieron en la clase 7/8. Finalmente se resolvió:
    - Borrando tanto los contenedores como las imágenes en docker
    - Reiniciando la PC
    - Levantando el docker nuevamente
    - Bajando el docker
    - Volviendo a levantarlo
-  Se corrió el localhost:8000/otracosa exitosamente.
- Nuevo commit. 
- Actualizacion de README. Commit. EDIT: Solo funciona si hago algún tipo de edición tal que aparece el mensaje "Connected to DB under thread ID:" en la consola del backend. Si hago una edición en el "main.ts" funciona.