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
    recibo
  } = JSON.parse(body)

  switch (method) {
    case 'PUT':
      try {
        const query1 = `
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
            'Cliente'
          )
          RETURNING *;
        `

        const query2 = `
        INSERT INTO clientes (
            telefono_cliente,
            recibo_cliente
          )
          VALUES (
            '${telefono}',
            '${recibo}'
          )
          RETURNING *;
        `

        const res1 = await conn.query(query1)

        const res2 = await conn.query(query2)

        if (res1.rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al usuario' })

        if (res2.rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al cliente' })

        return res.status(200).json({
          estado: 200,
          mensaje: 'Usuario creado con éxito',
          usuario: res1.rows[0].usuario
        })

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