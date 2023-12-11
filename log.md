## Log

### 10/12/2023
- Actualización del README.md para la entrega del TP.
- Creación de un archivo separado con el Log asociado al desarrollo del TP.

### 09/12/2023
- Borrado de dispositivo agregado. Agregado de botón de borrado en cada dispositivo. Definición de una ruta nuevo asociada al verbo DELETE para borrado de dispositivos y refresco automático de la pantalla posterior al borrado. 
    - *Falta* (a) agregar una confirmación antes de borrar, (b) reubicar el botón de borrado.(ambas correcciones son superficiales).
- Completada la carga automática de los dispositivos luego de la carga de la página web. Asimismo, al cargar un dispositivo nuevo se refresca automáticamente la lista de dispositivos en pantalla. Se borra el bontón de "listar".Commit
- Completada la asignación de imágenes en función del tipo de dispositivo. Agregado de las imágenes en frontend/static/images y edición del código en el main.ts.
- Completada la validación de datos en el front para la carga de nuevos dispositivos. Se tiene que cumplir que tanto el nombre como la descripción tengan más de 3 caracteres y que la definición del tipe no puede quedar sin asginarse.
- Completada la correción en las definiciones iniciales en dumps/smart_home.sql para que coincidan los 'type' con los criterios utilizados en el formulario de carga (1: luz, 2: persiana, 3: ventilador). No se logró la actualización de la lógica de asignación de los type borrando contenedores e imágenes en Docker y dándolos de alta nuevamente. Se hizo un DROP de la tabla Devices y se creó nuevamente con los nuevos criterios aplicados. Commit.

### 05/12/2023
- Agregado de dispositivo a la base de datos completado. Correcciones en método de carga de datos de dispositivos (ver "formDispositivo"), agregado de método postDispositivo para la interacción con el backend, agregado de la ruta "localhost:8000/dispoNuevo". Se verifica correcta actualización en la base de datos con autoasignación de la numeración.
- Falta: 
    - Corregir definiciones iniciales en dumps/smart_home.sql para que coincidan los "type" con los criterios utilizados en el formulario de carga (1: luz, 2: persiana, 3: ventilador).
    - Agregar validaciones para la entrada de datos en front y back.
    - Corregir texto de confirmación de carga de dispositivo en la BD para que valide en pantalla luego de que el servidor valide.

### 04/12/2023
- Se retoma la edición del backend buscando lograr conformar la vista de dispositivos. Sigue siendo necesario hacer una edición en el "main.ts" luego de cada vez que se levanta el docker.
- Se completa el index.js para probar el "localhost:8000/otracosa/:id/:algo". Funciona OK. Commit.
- Pruebo reformular el médoto GET Devices para hace que se recupere la lista de la BD y se ponga en pantalla. Completado. *Falta* logar que la lista solo se presente una vez y que al activar los switches de encendido/apagado se complete el POST en la BD.
- Se agrega el la imagen de lightbulb.png y el favicon.ico. *Falta* que las imágenes se asignen automáticamente según el Device>Type. Commit.
- CLASE - Consultas: 
    - Para que la lista de dispositivos se cargue automáticamente al terminar de cargar la página web:
        - (1) utilizar el constructor dentro del main (preferentemente)
        - (2) llamar a la función que busca los dispositivos dentro del "window.addEventListener("load",...)"
    - Agregar la aclaración acerca de como responde la conexión a la BD y la necesidad de hacer una edición en el main.ts para que se pueda completar la conexión con la BD.
    - Acerca de las notas en el README, no hace falta el log ya que es algo propio de los commit. Usar el readme para completar mas detalle del proyecto y el objetivo de lo que voy a implementar. Usarlo como referecnia apra aclarar la expectativas, que hace el pryecto, etc.
    - Lo mínimo para aprobar es lograr que se carguen los dispositivos desde la BD y que se pueda persistir el cambio de estado, junto con la documentación asociada. Las opciones siguientes serán lograr agregar dispositivos con un modal. Luego, si queda tiempo apunto a implementar el borrado de dispositivos en la BD.
    - Edición del HTML, main.ts y device.ts. Agregado del botón y modal asociado para la carga de nuevos dispositivos (método cargarDispositivo). Se editó el class Devices agregando el constructor para que sea obligatorio poner los datos del formulario de carga. Falta hacer el post a la base de datos, borrar los campos luego de la carga asignando comillas vacías y reubicar el texto que valida si el dispositivo se cargó correctamente o no.

### 03/12/2023
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