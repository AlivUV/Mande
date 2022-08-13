import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req

  switch (method) {
    case 'GET':
      try {
        res.status(200).json(`GET ${query.id}.`)
        break

      } catch (error) {

        res.status(400).json(error)
      }
    case 'PUT':
      try {
        res.status(200).json(`PUT ${query.id}.`)
        break

      } catch (error) {

        res.status(400).json(error)
      }

    default:
      res.status(404).json('Método inválido.')
      break
  }

}