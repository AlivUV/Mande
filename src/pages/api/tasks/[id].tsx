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
        console.log(error)
      }
    case 'PUT':
      try {
        res.status(200).json(`PUT ${query.id}.`)
        break

      } catch (error) {
        console.log(error)
      }

    default:
      try {
        res.status(200).json('Método inválido.')
        break

      } catch (error) {
        console.log(error)
      }
  }

}