import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from 'src/utils/database/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case 'POST':
      try {
        const query = ` SELECT nombres_usuario, 
                              apellidos_usuario,
                              telefono_usuario,
                              calificacion_trabajador,
                              latitud_usuario,
                              longitud_usuario
                        FROM usuarios U
                          INNER JOIN trabajadores T
                            ON U.telefono_usuario = T.telefono_trabajador
                          INNER JOIN labores L
                            ON U.telefono_usuario = L.trabajador_labor
                        WHERE L.;`
        const { rows } = await conn.query(query)

        if (rows.length === 0)
          return res.status(404).json({ estado: 404, mensaje: 'Usuario incorrecto' })
        console.log(rows[0].contrasena)

        if (rows[0].contrasena)
          return res.status(200).json({ estado: 200, mensaje: 'Correcto', userType: rows[0].tipousuario })

        return res.status(400).json({ estado: 400, mensaje: 'Contraseña incorrecta' })


      } catch (error) {
        res.status(400).json(error)

      } finally {
        break
      }

    default:
      try {
        res.status(404).json('Método inválido.')
        break

      } catch (error) {
        res.status(400).json(error)

      } finally {
        break
      }

  }

}