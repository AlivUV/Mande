import Link from 'next/link'
import { useState } from 'react'

import styles from '/src/styles/Home.module.css'

export default function Request(props) {

  const data = props

  const URL = '/api/services/workerByService'

  let workers

  fetch(
    URL,
    {
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
    .then(response => response.json())
    .then(({ estado, mensaje, trabajadores }) => {
      switch (estado) {
        case 200:
          workers = trabajadores
          break
        case 404:
          console.log('No hay trabajadores disponibles')
          break
        default:
          console.log('mensaje')
          break
      }

    })
    .catch(error => console.error(`Error: ${error}`))

  return <>
    <nav>
      <Link href={`/requestService`}>
        <a>
          <div className={styles.card}>
            <h2>Volver &larr;</h2>
          </div>
        </a>
      </Link>
    </nav>

    <div className={styles.register}>
      {
        (workers)
          ? workers.map(singleWorker => (
            <nav key={singleWorker.telefono_usuario}>
              <Link href={`/requestService`}>
                <a>
                  <div className={styles.card}>
                    <h2>{singleWorker.nombres_usuario} {singleWorker.apellidos_usuario}</h2>
                    <p>{singleWorker.calificacion_trabajador}</p>
                    <p>{singleWorker.telefono_usuario}</p>
                  </div>
                </a>
              </Link>
            </nav>
          ))
          : <h1>No hay trabajadores disponibles.</h1>
      }
    </div>
  </>
}

export async function getServerSideProps(context) {

  return { props: context.query }
}