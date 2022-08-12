CREATE TABLE estudiantes (
    codigo VARCHAR(12) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    cargo VARCHAR(50),
    semestre integer 
);

CREATE TABLE usuarios(
    nombres VARCHAR(32),
    apellidos VARCHAR(32),
    usuario VARCHAR(32),
    contrasena VARCHAR(32),
    email VARCHAR(32),
    direccion VARCHAR(32),
    telefono VARCHAR(32),
    pais VARCHAR(32),
    departamento VARCHAR(32),
    tipoTarjeta VARCHAR(32),
    nombreTarjeta VARCHAR(32),
    numeroTarjeta VARCHAR(32)
);

INSERT INTO estudiantes (codigo, nombre, cargo, semestre) VALUES ('1922373', 'Karen', 'Estudiante', 5);

INSERT INTO 
usuarios (nombres, apellidos, usuario, contrasena, email, direccion, telefono, 
		  pais, departamento, tipoTarjeta, nombreTarjeta, numeroTarjeta) 
VALUES ('Al', 'Port', 'Alp', 'contra', 'alp@mail.com', 'Cra calle 1', '3214567898',
	      'Colombia', 'Valle', 'Credito', 'Al Port', '1234567890');
