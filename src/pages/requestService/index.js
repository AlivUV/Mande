import { useRouter } from 'next/Router'
import { Formik } from 'formik'
import Link from 'next/link'

import useService from '/src/hooks/useService'

import styles from 'src/styles/Home.module.css'

export default function RequestService() {

  //const { availableServices } = useService()

  const availableServices = [
    { id: 1, nombre: 'Paseo de mascotas', descripcion: 'Se pasean mascotas' }
  ]

  const router = useRouter()

  const handleSubmit = values => {

  }

  const handleCancel = evt => {
    evt.preventDefault()
    router.push("/")
  }

  return (
    <>
      <Link href='/'>
        <a>
          <div className={styles.card}>
            <h2>Volver al inicio &larr;</h2>
          </div>
        </a>
      </Link>

      <div className={styles.register}>

        <h1>Seleccionar servicio</h1>
        <div className={styles.grid}>
          {
            availableServices.map(singleService => (
              <Link href={`/requestService/${singleService.nombre.replace(/\s+/g, "")}`} key={singleService.id}>
                <a>
                  <div className={styles.card}>
                    <h2>{singleService.nombre} &rarr;</h2>
                    <p>{singleService.descripcion}</p>
                  </div>
                </a>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  );
}