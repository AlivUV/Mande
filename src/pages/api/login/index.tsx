import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from 'src/utils/database/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { usuario, contrasena } = JSON.parse(body)

  console.log('EEEEEEEEEEEEEEEEEE')
  console.log(usuario)

  switch (method) {
    case 'POST':
      try {
        const query = `SELECT contrasena_usuario, tipoUsuario FROM usuarios WHERE usuario = '${usuario}'`
        const { rows } = await conn.query(query)

        console.log(rows)

        if (rows.length === 0)
          return res.status(404).json({ estado: 404, mensaje: 'Usuario incorrecto' })

        if (contrasena === rows[0].contrasena_usuario)
          return res.status(200).json({ estado: 200, mensaje: 'Correcto', userType: rows[0].tipousuario })

        return res.status(400).json({ estado: 400, mensaje: 'Contraseña incorrecta' })


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