import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req
  console.log(query)

  switch (method) {
    case 'GET':
      try {
        res.status(200).json(`GET .`)
        break

      } catch (error) {
        res.status(400).json(error)
      }
    case 'PUT':
      try {
        res.status(200).json(`PUT .`)
        break

      } catch (error) {
        res.status(400).json(error)
      }

    default:
      try {
        res.status(200).json('Método inválido.')
        break

      } catch (error) {
        res.status(400).json(error)
      }
  }

}