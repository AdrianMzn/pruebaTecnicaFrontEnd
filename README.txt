DECISIONES DE INTERFAZ:

    -En la pantalla de login no se usa la propiedad blur de los input (haría que se dejen de mostrar los errores de los campos cuando se pulse fuera del input) porque
        el usuario podria pensar que es correcta la informacion que ha escrito cuando pulsa fuera del input.
    
    -He añadido un campo de contraseña de confirmacion en el formulario de sign up porque es lo más común.

    -Se han dedicado varias horas a tratar de evitar que los componentes del navbar se superponganal hacerse la pantalla mas pequeña.

    -No se permite que se modifiquen ni el id ni el email de los usuarios por evitar posibles problemas con la base de datos, ya que no 
        tengo suficiente informacion sobre ella.


FUNCIONALIDADES DE LA APLICACIÓN:

    -Al registrar un usuario se redirige al usuario a la pantalla de login para que inicie sesion.

    -Al recargar la pagina si el usuario estaba logeado continuará logeado y en la misma pagina.

    -Al modificar o eliminar el usuario de la sesion se cierra la sesion para evitar errores.

    -Los usuarios cuyo dominio de su correo electronico sea "@hiberus" serán identificados como administradores, y por tanto podran modificar la informacion
        de otros usuarios y otros administradores, a los usuarios base no se les permite modificar la informacion de un usuario administrador.

    -Se han utilizado componentes NgbModal para gestionar la confirmacion de eliminacion o modificacion de informacion.




TIEMPO DEDICADO:

    -28/09/2022 Creacion del proyecto, de los componentes principales y las rutas - 1 hora
    -29/09/2022 Investigacion sobre la API y creacion del formulario de login - 2 horas