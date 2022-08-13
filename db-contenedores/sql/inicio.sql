CREATE TABLE IF NOT EXISTS usuarios(
    nombres_usuario VARCHAR(32),
    apellidos_usuario VARCHAR(32),
    usuario VARCHAR(32),
    contrasena_usuario VARCHAR(32),
    email_usuario VARCHAR(32),
    tipoCuenta_usuario VARCHAR(32),
    nombreTarjeta_usuario VARCHAR(32),
    numeroTarjeta_usuario VARCHAR(32),
    latitud_usuario VARCHAR(16),
    longitud_usuario VARCHAR(16),
    telefono_usuario VARCHAR(16) PRIMARY KEY NOT NULL,
    pais_usuario VARCHAR(32),
    departamento_usuario VARCHAR(32),
    tipoUsuario VARCHAR(32)
);

CREATE TABLE IF NOT EXISTS cliente(
    telefono_cliente VARCHAR(16) PRIMARY KEY NOT NULL,
    recibo_cliente BYTEA,
    FOREIGN KEY (telefono_cliente) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS trabajador(
    telefono_trabajador VARCHAR(16) PRIMARY KEY NOT NULL,
    cedula_trabajador VARCHAR(32),
    estado VARCHAR(32),
    calificacion_trabajador INTEGER,
    foto_trabajador BYTEA,
    fotoDocumento_trabajador BYTEA,
    FOREIGN KEY (telefono_trabajador) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS servicios(
    id_servicio SERIAL PRIMARY KEY NOT NULL,
    trabajador_servicio VARCHAR(16),
    cliente_servicio VARCHAR(16),
    nombre_servicio VARCHAR(32),
    estado_servicio VARCHAR(32),
    descripcion_servicio VARCHAR(64),
    precioHora__servicio INTEGER
);

CREATE TABLE IF NOT EXISTS pagos(
    id_pago SERIAL PRIMARY KEY NOT NULL,
    servicio_pago INTEGER,
    medio_pago VARCHAR(32),
    total_pago INTEGER
);

INSERT INTO 
usuarios (nombres_usuario, apellidos_usuario, usuario, contrasena_usuario, email_usuario, latitud_usuario, longitud_usuario, 
          telefono_usuario, pais_usuario, departamento_usuario, tipoCuenta_usuario, nombreTarjeta_usuario, numeroTarjeta_usuario, tipoUsuario) 
VALUES ('Al', 'Port', 'Alp', 'contra', 'alp@mail.com', '123', '213', '3214567898',
	      'Colombia', 'Valle', 'Debito', 'Al Port', '1234567890', 'Usuario');

INSERT INTO
cliente (telefono_cliente)
VALUES ('3214567898');
