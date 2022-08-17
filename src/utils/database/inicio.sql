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

CREATE TABLE IF NOT EXISTS clientes(
    telefono_cliente VARCHAR(16) PRIMARY KEY NOT NULL,
    recibo_cliente BYTEA,
    FOREIGN KEY (telefono_cliente) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS trabajadores(
    telefono_trabajador VARCHAR(16) PRIMARY KEY NOT NULL,
    cedula_trabajador VARCHAR(32),
    estado VARCHAR(32),
    calificacion_trabajador INTEGER,
    foto_trabajador BYTEA,
    fotoDocumento_trabajador BYTEA,
    FOREIGN KEY (telefono_trabajador) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS labores(
    id_labor SERIAL PRIMARY KEY NOT NULL,
    trabajador_labor VARCHAR(16),
    tipoServicio_labor VARCHAR(32),
    descripcion_labor VARCHAR(64),
    precioHora_labor INTEGER,
    FOREIGN KEY (trabajador_labor) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS servicios(
    id_servicio SERIAL PRIMARY KEY NOT NULL,
    calificacion_servicio INTEGER,
    trabajador_servicio VARCHAR(16),
    cliente_servicio VARCHAR(16),
    nombre_servicio VARCHAR(32),
    estado_servicio VARCHAR(32),
    notas_servicio VARCHAR(64),
    FOREIGN KEY (cliente_servicio) REFERENCES usuarios(telefono_usuario),
    FOREIGN KEY (trabajador_servicio) REFERENCES usuarios(telefono_usuario)
);

CREATE TABLE IF NOT EXISTS pagos(
    id_pago SERIAL PRIMARY KEY NOT NULL,
    servicio_pago INTEGER,
    medio_pago VARCHAR(32),
    precioHora_servicio INTEGER,
    tiempo_servicio INTEGER,
    total_pago INTEGER,
    FOREIGN KEY (servicio_pago) REFERENCES servicios(id_servicio)
);

INSERT INTO 
usuarios (nombres_usuario, apellidos_usuario, usuario, contrasena_usuario, email_usuario, latitud_usuario, longitud_usuario, 
          telefono_usuario, pais_usuario, departamento_usuario, tipoCuenta_usuario, nombreTarjeta_usuario, numeroTarjeta_usuario, tipoUsuario) 
VALUES ('Al', 'Port', 'Alp', 'contra', 'alp@mail.com', '123', '213', '3214567898',
	      'Colombia', 'Valle', 'Debito', 'Al Port', '1234567890', 'Cliente');

INSERT INTO 
usuarios (nombres_usuario, apellidos_usuario, usuario, contrasena_usuario, email_usuario, latitud_usuario, longitud_usuario, 
          telefono_usuario, pais_usuario, departamento_usuario, tipoCuenta_usuario, nombreTarjeta_usuario, numeroTarjeta_usuario, tipoUsuario) 
VALUES ('Kar', 'Mort', 'Kart', 'contra', 'Kart@mail.com', '123', '213', '3124567898',
	      'Colombia', 'Valle', 'Debito', 'Al Port', '1234567890', 'Trabajador');

INSERT INTO
clientes (telefono_cliente)
VALUES ('3214567898');

INSERT INTO
trabajadores (telefono_trabajador, cedula_trabajador, calificacion_trabajador)
VALUES ('3124567898', '1005318426', 0);

INSERT INTO
labores (trabajador_labor, tipoServicio_labor, descripcion_labor, precioHora_labor)
VALUES ('3124567898', 'Paseo de mascotas', 'Se pasean mascotas', 20000);