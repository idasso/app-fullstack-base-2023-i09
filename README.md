# Entrega TP

Materia: Desarrollo de aplicaciones Web
Docente: Matías Ramos
Alumno: Ignacio Dasso
Cursada: 5to bimestre 2023

Fecha de entrega #1: 10/12/2023
Fecha de entrega #2: 17/12/2023 (con penalización en la nota)

## Desarrollo del TP
Patiendo de la maqueta, se programará el frontend para que con la carga en el navegador de localhost:8000 se cargue automáticamente la lista de dispositivos.
Será posible interactuar con los dispositivos pudiendo encenderlos/apagarlos haciendo que el cambio impacte en la base de datos. De este modo se logrará que en un posterior acceso a la web se encuentren los últimos estados.
Asimismo, será posible agregar y borrar dispositivos con el uso de un modal y validaciones en la carga de los campos indicados.

## Log
04/12/2023
- Se retoma la edición del backend buscando lograr conformar la vista de dispositivos. Sigue siendo necesario hacer una edición en el "main.ts" luego de cada vez que se levanta el docker.
- Se completa el index.js para probar el "localhost:8000/otracosa/:id/:algo". Funciona OK. Commit.
- Pruebo reformular el médoto GET Devices para hace que se recupere la lista de la BD y se ponga en pantalla. Completado. *Falta* logar que la lista solo se presente una vez y que al activar los switches de encendido/apagado se complete el POST en la BD.
- Se agrega el la imagen de lightbulb.png y el favicon.ico. *Falta* que las imágenes se asignen automáticamente según el Device>Type. Commit.
- CLASE - Consultas: 
    - Para que la lista de dispositivos se cargue automáticamente al terminar de cargar la página web:
        - (1) utilizar el contructor dentro del main (preferentement)
        - (2) llamar a la función que busca los dispositivos dentro del "window.addEventListener("load",...)"
    - Agregar la aclaración acerca de como responde la conexión a la BD y la necesidad de hacer una edición en el main.ts para que se pueda completar la conexión con la BD.
    - Acerca de las notas en el README, no hace falta el log ya que es algo propio de los commit. Usar el readme para completar mas detalle del proyecto y el objetivo de lo que voy a implementar. Usarlo como referecnia apra aclarar la expectativas, que hace el pryecto, etc.
    - Lo mínimo para aprobar es lograr que se carguen los dispositivos desde la BD y que se pueda persistir el cambio de estado, junto con la documentación asociada. Las opciones siguientes serán lograr agregar dispositivos con un modal. Luego, si queda tiempo apunto a implementar el borrado de dispositivos en la BD.

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
- Actualizacion de README. Commit. EDIT: Solo funciona si hago algún tipo de edición tal que aparece el mensaje "Connected to DB under thread ID:" en la consola del backend. Si hago una edición en el "main.ts" funciona. Quizá esto hubiera andado antes y no era necesario hacer toda la desinstalación+reinstalación.