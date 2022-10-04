DECISIONES DE INTERFAZ:

    -En la pantalla de login no se usa la propiedad blur de los input (haría que se dejen de mostrar los errores de los campos cuando se pulse fuera del input) porque
        el usuario podria pensar que es correcta la informacion que ha escrito cuando pulsa fuera del input.
    
    -Se ha añadido un campo de contraseña de confirmacion en el formulario de sign up porque es lo más común.

    -El usuario de la sesion no aparecerá en la pantalla "Users" con el resto de usuarios, la gestion de su modificacion y eliminacion se lleva a cabo en la
        pantalla "Home".

    -Se ha añadido un enlace al github del proyecto en el footer y otro enlace a mi linkedin.

FUNCIONALIDADES DE LA APLICACIÓN:

    -Al registrar un usuario se redirige al usuario a la pantalla de login para que inicie sesion.

    -Al recargar la pagina si el usuario estaba logeado continuará logeado y en la misma pagina.

    -Al modificar o eliminar el usuario de la sesion se cierra la sesion para evitar errores.

    -Los usuarios cuyo dominio de su correo electronico sea "@hiberus" serán identificados como administradores, y por tanto podran modificar la informacion
        de otros usuarios y otros administradores, a los usuarios base no se les permite modificar la informacion de un usuario administrador.

    -Se permite al usuario realizar una busqueda dentro del conjunto de todos los usuarios, teniendo en cuenta nombre, apellidos, email y el rol de usuario.

    -Se han utilizado componentes NgbModal para gestionar la confirmacion de eliminacion o modificacion de informacion.

    -No se permite que se modifiquen ni el id ni el email de los usuarios por evitar posibles problemas con la base de datos, ya que no 
    tengo suficiente informacion sobre ella.

    
TIEMPO DEDICADO:

    -28/09/2022 Creacion del proyecto, de los componentes principales y las rutas. - 1 hora
    -29/09/2022 Investigacion sobre la API y creacion del formulario de login. - 2 horas
    -30/09/2022 Formulario de signup, conexion con la API conseguida y autorizado con las cabeceras Bearer, limitacion del usuario a entrar en 
        paginas si no esta logueado, footer añadido con estilos y obtener la lista de usuarios completa. - 6h
    -1/09/2022 Modificacion de estilos de login, signup, trabajar en que el navbar sea mas responsive y gestionar errores que devuelve la API. - 3h
    -2/09/2022 Añadidos Validators en los formularios de login y signup, modificacion de estilos en las pantallas de Home, Logout y Users, ahora cuando
        se recarga pantalla el usuario seguirá logueado. - 4h
    -3/09/2022 Modificacion de estilos en todas las paginas y correcciones responsive, tratado de usar modales sin éxito. - 2h
    -4/09/2022 Añadidos modales de modificacion y eliminacion de usuarios, eliminación de logs y traduccion de algunos alerts a ingles, modificacion
        de estilos del navbar y de las paginas Home, Login y Signup, añadidos filtros en la pagina de Users y modificada pagina de error. - 6h

    
    Total horas dedicadas: 24 horas

MAYORES DIFICULTADES AFRONTADAS:    

    La creacion de estilos para mejorar el aspecto de la web.