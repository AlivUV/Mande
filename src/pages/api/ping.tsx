import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '../../utils/database'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await conn.query(`SELECT nombre FROM estudiantes WHERE codigo = '1922373';`)

  res.status(200).json(`Conectado ${response.rows[0].nombre}.`)
}