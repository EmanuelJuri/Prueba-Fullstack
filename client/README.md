# Prube Fullstack SIW CARGO


El candidato realizara una aplicación donde pueda registrarse como usuario, iniciar sesión y listar la facturas luego de iniciar sesión. Desarrollando tanto el backend, como el frontend.
## Backend
Desarrolle en Nodejs, utilizando express como framework una API REST
1.	Cree un endpoint para crear el usuario
2.	Cree un endpoint para actualizar un usuario. En la respuesta incluya todo lo que le parezca pertinente.
2.	Cree un endpoint para recuperar la informacion del cliente.
4.	Crear un endpoint para realizar el log-in.
5.	Cree una tabla, factura con los siguientes campos idFactura, cliente, total , fecha . Llene aleatoriamente unos 10 registros
6.	Cree un endpoint para recuperar las facturas.

Para todos los endpoint. Validar campos obligatorios, como son idUsuario para GET, POST y PUT. Y como opcionales username, password, usuario y nombre, para POST y PUT. Validar cualquier error que pueda producirse con try catch y retornan el error y un estado HTTP 400.

## Frontend
Crear una aplicación con REACT y REACT ROUTER con los siguientes requisitos.
1.	Una pantalla de inición de sesión con 2 campos, usuario y contraseña. 2 enlaces en la parte inferior, uno para actualizar la clave y otro para registrarse. Un boton para iniciar sesión.
2.	Los campos usuario y contraseña tienen que validar que no esten vacíos antes de enviarlos al backend. 
3.	Generar pantallas de inicio de sesion.
4.	Una vez que el usuario se logeo correctamente. Mostrar los datos y guardar la sesion.
5.	Listar las facturas que se devuelvan de EP de facturas. Puede agregar si desea un buscado y ordenar la lista.

Los puntos 1, 2, 3 y 4 son obligatorios. El 5 es opcional y se deja a su criterio la vista y el framework de CSS. Pudiendo usar Material UI, Bootstrap, etc.
