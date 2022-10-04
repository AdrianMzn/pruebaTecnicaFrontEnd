EJECUCIÓN:

    Desde la carpeta appUsers ejecutar "npm i --force" para instalar las dependencias y node_modules.

    Desde esta misma carpeta ejecutar "npm start", lo que lanzará la web en un puerto en local.


DECISIONES DE INTERFAZ:

    -En la pantalla de login no se usa la propiedad blur de los input (haría que se dejen de mostrar los errores de los campos cuando se pulse fuera del input) porque
        el usuario podría pensar que es correcta la informacion que ha escrito cuando pulsa fuera del input.
    
    -Se ha añadido un campo de contraseña de confirmación en el formulario de sign up porque es lo más común.

    -El usuario de la sesión no aparecerá en la pantalla "Users" con el resto de usuarios, la gestión de su modificación y eliminación se lleva a cabo en la
        pantalla "Home".

    -Se ha añadido un enlace al github del proyecto en el footer y otro enlace a mi linkedin.


FUNCIONALIDADES DE LA APLICACIÓN:

    -Al registrar un usuario se redirige al usuario a la pantalla de login para que inicie sesión.

    -Al recargar la página si el usuario estaba logueado continuará logueado y en la misma página.

    -Al modificar o eliminar el usuario de la sesión se cierra la sesión para evitar errores.

    -Los usuarios cuyo dominio de su correo electrónico sea "@hiberus" serán identificados como administradores, y por tanto podrán modificar la informacion
        de otros usuarios y otros administradores, a los usuarios base no se les permite modificar la informacion de un usuario administrador.

    -Se permite al usuario realizar una búsqueda dentro del conjunto de todos los usuarios, teniendo en cuenta nombre, apellidos, email y el rol de usuario.

    -Se han utilizado componentes NgbModal para gestionar la confirmación de eliminación o modificación de informacion.

    -No se permite que se modifiquen ni el id ni el email de los usuarios por evitar posibles problemas con la base de datos, ya que no 
    tengo suficiente informacion sobre ella.

    
TIEMPO DEDICADO:

    -28/09/2022 Creación del proyecto, de los componentes principales y las rutas. - 1 hora
    -29/09/2022 Investigación sobre la API y creación del formulario de login. - 2 horas
    -30/09/2022 Formulario de sign up, conexión con la API conseguida y autorizado con las cabeceras Bearer, limitación del usuario a entrar en 
        paginas si no está logueado, footer añadido con estilos y obtener la lista de usuarios completa. - 6h
    -1/09/2022 Modificación de estilos de login, sign up, trabajar en que el navbar sea más responsive y gestionar errores que devuelve la API. - 3h
    -2/09/2022 Añadidos Validators en los formularios de login y sign up, modificación de estilos en las pantallas de Home, Logout y Users, ahora cuando
        se recarga pantalla el usuario seguirá logueado. - 4h
    -3/09/2022 Modificación de estilos en todas las páginas y correcciones responsive, tratado de usar modales sin éxito. - 2h
    -4/09/2022 Añadidos modales de modificación y eliminacion de usuarios, eliminación de logs y traducción de algunos alerts a inglés, modificación
        de estilos del navbar y de las páginas Home, Login y Signup, añadidos filtros en la página de Users y modificada página de error. - 6h

    
    Total horas dedicadas: 24 horas

    
MAYORES DIFICULTADES AFRONTADAS:    

    La creación de estilos para mejorar el aspecto de la web.
