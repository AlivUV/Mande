import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from 'src/utils/database/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { usuario, contrasena } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query = `SELECT contrasena FROM usuarios WHERE usuario = '${usuario}'`
        const { rows } = await conn.query(query)

        if (rows.length === 0)
          return res.status(404).json({ estado: 404, mensaje: 'Usuario incorrecto' })

        if (contrasena === rows[0].contrasena)
          return res.status(200).json({ estado: 200, mensaje: 'Correcto' })

        return res.status(400).json({ estado: 400, mensaje: 'Contraseña incorrecta' })


      } catch (error) {
        res.status(400).json(error)

      } finally {
        break;
      }

    case 'PUT':
      try {
        res.status(200).json(`PUT .`)
        break

      } catch (error) {
        res.status(400).json(error)

      } finally {
        break;
      }

    default:
      try {
        res.status(200).json('Método inválido.')
        break

      } catch (error) {
        res.status(400).json(error)

      } finally {
        break;
      }

  }

}