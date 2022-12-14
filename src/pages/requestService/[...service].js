import Link from 'next/link'
import { useRouter } from 'next/Router'
import { useCallback, useEffect } from 'react'

import useService from '/src/hooks/useService'

import styles from '/src/styles/Home.module.css'

export default function Request({ props }) {

  const router = useRouter()

  const { isSelected, workersByService, setWorkersByService } = useService()

  const handleBack = useCallback(() => {
    setWorkersByService(null)
  }, [setWorkersByService])

  useEffect(() => {
    if (!isSelected)
      router.push(`/requestService`)
  }, [isSelected, router, workersByService])

  return <>
    <div className={styles.card} onClick={handleBack}>
      <h2>Volver &larr;</h2>
    </div>

    <div className={styles.register}>
      {
        (workersByService && workersByService.length !== 0)
          ? workersByService.map(singleWorker => (
            <nav key={singleWorker.telefono_usuario}>
              <div className={styles.card}>
                <h2>Nombre: {singleWorker.nombres_usuario} {singleWorker.apellidos_usuario}</h2>
                <p>Estrellas: {singleWorker.calificacion_trabajador}</p>
                <p>Telefono: {singleWorker.telefono_usuario}</p>
              </div>
            </nav>
          ))
          : <h1>No hay trabajadores disponibles.</h1>
      }
    </div>
  </>
}