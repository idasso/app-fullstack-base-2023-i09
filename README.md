# Entrega TP

## Datos de la entrega

Materia: Desarrollo de aplicaciones Web

Docente: Matías Ramos

Alumno: Ignacio Dasso

Cursada: 5to bimestre 2023


Fecha de entrega #1: 10/12/2023

Fecha de entrega #2: 17/12/2023

## Desarrollo del TP

### Consigna y objetivos

Patiendo de la maqueta, se programará el frontend para que con la carga en el navegador de localhost:8000 se cargue automáticamente la lista de dispositivos.

Será posible interactuar con los dispositivos pudiendo encenderlos/apagarlos haciendo que el cambio impacte en la base de datos. De este modo se logrará que en un posterior acceso a la web se encuentren los últimos estados.

Asimismo, será posible agregar y borrar dispositivos con el uso de un modal y validaciones en la carga de los campos indicados.

### Detalle de la implementación completada

El proyecto está desarrollado sobre el branch "dev" del proyecto app-fullstack-base-2023-i09 (https://github.com/idasso/app-fullstack-base-2023-i09/tree/dev), forkeado de https://github.com/mramos88/app-fullstack-base-2023-i09.

La operación de la página web requiere comenzar con la inicialización del docker desde la carpeta principal del proyecto. Según se manifestó en la operación del código, la conexión con la base de datos se completa exitosamente solo cuando se manifiesta en la consola del backend el mensaje "Connected to DB under thread ID: x". Para que el mensaje aparezca se ha sido necesario que se guarde "main.ts" (sin modificaciones en el código) luego de levantado el docker.

Habiéndose manifestado el mensajes esperado, accediendo a la dirección http://localhost:8000/ automáticamente se visualizarán los dispositivos recuperados desde la base de datos. La visualización de cada dispositivo consiste los siguientes elementos:
- Imagen de referencia para cada tipo de dispositivo (luz, ventilador, persiana). La imagen se asigna automáticamente según el tipo de dispositivo asignado.
- Nombre
- Descripción
- Botón de encendido/apagado: al hacer click en el botón se conmutará el estado haciendo que dicha actualización impacte en la base de datos.
- Botón de borrado: al hacer click en el botón se borrará el dispositivo de la base de datos y se refrescará la lista automáticamente. *ATENCIÓN:* no hay un cuadro de diálogo intermedio pidiendo confirmación de la acción de borrado.

Debajo de la lista de dispositivos se encuentra un botón para agregar dispositivos. Al hacer click en dicho botón se abre un Modal que presenta un formulario para la carga de datos asociados al nuevo dispositivo. Luego de cargar el nuevo dispositivo, si la validación lo permite, se refrescará la lista con el nuevo dispositivo incorporado a la lista y habrá un mensaje confirmando la exitosa carga del dispositivo. En caso de el agregado del nuevo dispositivo no sea exitosa, se cerrará el Modal y un mensaje en pantalla anunciará el error en la carga.

Para detalle adicional del proceso, se encuentra disponible el archivo *log.md* con el detalle del proceso.

### Mejoras

Producto del proceso de desarrollo del TP, se han detectado múltiples mejoras que harían del desarrollo una versión más completa. Se listan a continuación las mejoras detectadas:
- Agregar un Modal con un mensaje de confirmación antes de que se proceda con el borrado del dispositivo.
- Incorporar una validación del los datos en el backend con un control de ortografía y/o previniendo que un ventilador pueda estar prendido por defecto al cargarlo como nuevo dispositivo.
- Incorpara un botón para la actualización de los datos de un dispositivo en la base de datos.
- Agregar formato al los texto de confirmación de éxito/error en el agregado de dispositivos.
- Agregar un texto de confirmación de borrado de un dispositivo.
- Agregar una modalidad de borrado de los textos de confirmación, ya sea asignar un tiempo para la visualización del mensaje así como un botón de acknoledge.
- Rediseñar la presentación de los dispositivos para mostrar con mayor tamaño la información relevante y los campos de interacción con el usuario.