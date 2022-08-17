import { useRouter } from 'next/Router'
import Link from 'next/link'

import useService from '/src/hooks/useService'

import styles from 'src/styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'

export default function RequestService() {

  const router = useRouter()

  const { isSelected, workersByService, searchWorkersByService } = useService()

  const availableServices = [
    { id: 1, nombre: 'Paseo de mascotas', descripcion: 'Se pasean mascotas' },
    { id: 2, nombre: 'Otra cosa', descripcion: 'Se pasean mascotas' }
  ]

  const [nombre, setNombre] = useState()

  const handleClick = useCallback(servicio => {
    searchWorkersByService(servicio)
  }, [searchWorkersByService])

  useEffect(() => {
    if (isSelected) {
      router.push(`/requestService/${nombre}`)
    }
  }, [isSelected, nombre, router, workersByService])

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
              <div
                className={styles.card}
                onClick={(evt) => {
                  evt.preventDefault()
                  setNombre(singleService.nombre.replace(/\s+/g, ''))
                  handleClick(singleService.nombre.replace(/\s+/g, ''))
                }}
                key={singleService.id}
              >
                <h2>{singleService.nombre} &rarr;</h2>
                <p>{singleService.descripcion}</p>
              </div>
            ))
          }
        </div >
      </div >
    </>
  );
}