CREATE TABLE IF NOT EXISTS usuarios(
    nombres_usuario VARCHAR(32),
    apellidos_usuario VARCHAR(32),
    usuario_usuario VARCHAR(32),
    contrasena_usuario VARCHAR(32),
    email_usuario VARCHAR(32),
    tipoCuenta_usuario VARCHAR(32),
    nombreTarjeta_usuario VARCHAR(32),
    numeroTarjeta_usuario VARCHAR(32),
    latitud_usuario INTEGER,
    longitud_usuario INTEGER,
    telefono_usuario INTEGER PRIMARY KEY NOT NULL,
    pais_usuario VARCHAR(32),
    departamento_usuario VARCHAR(32),
    tipoUsuario VARCHAR(32)
);

CREATE TABLE IF NOT EXISTS cliente(
    telefono_cliente INTEGER PRIMARY KEY NOT NULL,
    recibo_cliente BYTEA,
    FOREIGN KEY (telefono_cliente) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS trabajador(
    telefono_trabajador INTEGER PRIMARY KEY NOT NULL,
    cedula_trabajador VARCHAR(32),
    estado VARCHAR(32),
    calificacion_trabajador INTEGER,
    foto_trabajador BYTEA,
    fotoDocumento_trabajador BYTEA,
    FOREIGN KEY (telefono_trabajador) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS servicios(
    id_servicio SERIAL PRIMARY KEY NOT NULL,
    nombre_servicio VARCHAR(32),
    estado_servicio VARCHAR(32),
    descripcion_servicio VARCHAR(64),
    precioHora__servicio INTEGER

);

INSERT IF NOT EXISTS INTO 
usuarios (nombres_usuario, apellidos_usuario, usuario_usuario, contrasena_usuario, email_usuario, latitud_usuario, longitud_usuario, 
          telefono_usuario, pais_usuario, departamento_usuario, tipoCuenta_usuario, nombreTarjeta_usuario, numeroTarjeta_usuario) 
VALUES ('Al', 'Port', 'Alp', 'contra', 'alp@mail.com', 123, 213, 3214567898,
	      'Colombia', 'Valle', 'Debito', 'Al Port', '1234567890', 'Usuario');

INSERT IF NOT EXISTS INTO
cliente (telefono_cliente)
VALUES (3214567898);
