# :computer: PWA 2024

- Trabajo Práctico: React - Aplicación de Lista de Tareas (To-Do List)

> En el siguiente proyecto se desarrolló a una aplicación que permite al usuario agregar, marcar como completadas y eliminar tareas de una lista. Cada tarea tiene una descripción y un estado de completitud. Con la lista se puede observar el número total de tareas y cuantas están completadas. Además se implemento un buscador que filtra las tareas según lo que sea ingresado, se utilizó componentes reutilizables, el hook useState para almacenar el estado interno de las tareas, renderizado de listas con .map(), renderizado condicional y botones para cambiar el estado o eliminar tareas.

## :office: Universidad Nacional del Comahue - Facultad de Informática

- **Carrera:** Tecnicatura Universitaria en Desarrollo Web
- **Materia:** Programación Web Avanzada
- **Año:** 2024

## :muscle: Integrantes del Equipo
| Nombre                              |  Legajo    | Mail                                     | GitHub                                                      |
|:-----------------------------------:|:----------:|:----------------------------------------:|:-----------------------------------------------------------:|
| **Ferrada, Mauro**                  | FAI-4211   | mauro.ferrada@est.fi.uncoma.edu.ar       | [MauroFerrada](https://github.com/MauroFerrada)             |
| **Herrera, Julio Federico**         | FAI-4285   | julio.herrera@est.fi.uncoma.edu.ar       | [ELHACHESALTA](https://github.com/ELHACHESALTA)             |

## :book: Consigna

Función de los archivos principales en un proyecto React:

- **index.js:** Este archivo es el punto de entrada de la aplicación React. Su función es renderizar el componente principal de la aplicación en el DOM del navegador. En la mayoría de los casos, el componente raíz que se renderiza es **\<App \/>**, aunque puede ser cualquier otro componente según la configuración del proyecto. En resumen, **index.js** es responsable de iniciar la aplicación React y conectarla con el HTML del navegador.

- **App.js:** Este archivo es el componente principal de la aplicación React. Contiene la estructura general de la aplicación y, a menudo, sirve como contenedor para otros componentes. Dentro de este archivo, se define la estructura de la aplicación, incluyendo el diseño, la navegación y la lógica de renderizado condicional. Se pueden importar otros componentes y usarlos para construir la interfaz de usuario de la aplicación. En resumen, **App.js** es el punto de inicio para la composición de componentes de la aplicación React.

- **index.css:** Este archivo suele contener estilos CSS globales que se aplicarán a todos los componentes de la aplicación, aunque es posible también, que haya estilos específicos para componentes individuales.

- **package.json:** Este es un archivo de configuración de Node.js que se utiliza para definir metadatos del proyecto y gestionar sus dependencias. Aquí se especifican detalles como el nombre del proyecto, la versión, los scripts de ejecución, las dependencias del proyecto (incluyendo React y otras bibliotecas utilizadas), así como también otras configuraciones relacionadas con el proyecto. Es un archivo fundamental si se utiliza herramientas como npm para la gestión de paquetes, ya que permite instalar, actualizar y eliminar dependencias fácilmente.