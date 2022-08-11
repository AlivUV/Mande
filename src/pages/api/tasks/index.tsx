import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        res.status(200).json(`GET.`)
        break

      } catch (error) {
        res.status(200).json(error)
      }
    case 'POST':
      try {
        res.status(200).json(`POST.`)
        break

      } catch (error) {
        res.status(200).json(error)
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