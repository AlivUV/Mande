import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from 'src/utils/database/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const {
    nombres,
    apellidos,
    usuario,
    contrasena,
    correo,
    direccion,
    telefono,
    pais,
    departamento,
    tipoTarjeta,
    nombreTarjeta,
    numeroTarjeta,
    cedula,
    foto,
    fotoDocumento
  } = JSON.parse(body)

  switch (method) {
    case 'PUT':
      try {
        const query = `
          INSERT INTO usuarios (
            nombres_usuario,
            apellidos_usuario,
            usuario,
            contrasena_usuario,
            email_usuario,
            direccion_usuario,
            telefono_usuario,
            pais_usuario,
            departamento_usuario,
            tipotarjeta_usuario,
            nombretarjeta_usuario,
            numerotarjeta_usuario,
            tipoUsuario
          )
          VALUES (
            '${nombres}',
            '${apellidos}',
            '${usuario}',
            '${contrasena}',
            '${correo}',
            '${direccion}',
            '${telefono}',
            '${pais}',
            '${departamento}',
            '${tipoTarjeta}',
            '${nombreTarjeta}',
            '${numeroTarjeta}',
            'Trabajador'
          );

          INSERT INTO trabajadores (
            telefono_trabajador,
            cedula_trabajador,
            foto_trabajador,
            fotoDocumento_trabajador
          )
          VALUES (
            '${telefono}',
            '${cedula}',
            '${foto}',
            '${fotoDocumento}'
          )
          RETURNING *;
        `

        const { rowcount, rows } = await conn.query(query)

        if (rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al usuario' })

        return res.status(200).json({ estado: 200, mensaje: 'Usuario creado con éxito', usuario: rows[0].usuario })

      } catch (error) {
        res.status(400).json(error)

      } finally {
        break
      }

    default:
      res.status(404).json('Método inválido.')
      break

  }

}