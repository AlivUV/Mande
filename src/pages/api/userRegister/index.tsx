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
    numeroTarjeta
  } = JSON.parse(body)

  console.log('EEEEEEEEEEEEEEEEEEEEEEE')
  console.log(contrasena)

  switch (method) {
    case 'PUT':
      try {
        const query = `
          INSERT INTO usuarios (
            nombres,
            apellidos,
            usuario,
            contrasena,
            email,
            direccion,
            telefono,
            pais,
            departamento,
            tipotarjeta,
            nombretarjeta,
            numerotarjeta
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
            '${numeroTarjeta}'
          )
          RETURNING *;
        `

        const { rowcount, rows } = await conn.query(query)

        console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII')
        console.log(rows[0].usuario)

        if (rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al usuario' })

        return res.status(200).json({ estado: 200, mensaje: 'Usuario creado con éxito', usuario: rows[0].usuario })




      } catch (error) {
        res.status(400).json(error)

      } finally {
        break
      }

    default:
      try {
        res.status(200).json('Método inválido.')

      } catch (error) {
        res.status(400).json(error)

      } finally {
        break
      }

  }

}