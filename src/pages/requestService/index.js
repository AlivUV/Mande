import { useRouter } from 'next/Router'
import Link from 'next/link'

import useService from '/src/hooks/useService'

import styles from '/src/styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'

export default function RequestService() {
  const { isSelected, searchWorkersByService } = useService()
  const [name, setName] = useState()

  const router = useRouter()

  const availableServices = [
    { id: 1, nombre: 'Paseo de mascotas', descripcion: 'Se pasean mascotas' }
  ]

  const handleClick = useCallback(nombre => {
    searchWorkersByService(nombre)
    router.push(`/requestService/${nombre}`)
  }, [router, searchWorkersByService])

  useEffect(() => {
    if (isSelected) {

    }
  }, [isSelected, router])

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
              <div className={styles.card} onClick={handleClick(singleService.nombre.replace(/\s+/g, ''))} key={singleService.id} >
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