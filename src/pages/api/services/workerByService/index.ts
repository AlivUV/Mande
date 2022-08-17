import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const { service } = JSON.parse(body)

  console.log(service)

  switch (method) {
    case 'GET':
      res.status(200).json('GET.')
      break
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
                        WHERE L.tipoServicio_labor = '${service}';`

        const { rows } = await conn.query(query)

        console.log(rows)

        if (rows.length === 0)
          return res.status(404).json({ estado: 404, mensaje: 'No hay trabajadores disponibles' })

        return res.status(200).json({ estado: 200, mensaje: 'Correcto', trabajadores: rows })

      } catch (error) {
        res.status(500).json(error)

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