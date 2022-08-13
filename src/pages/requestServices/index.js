import Link from 'next/link'
import { useState } from 'react'

import styles from '/src/styles/Home.module.css'

export default function ServiceStatus() {
  const [currentServices, setCurrentServices] = useState(null)

  const a = [
    { id: 1, name: 'Primer Servicio' },
    { id: 2, name: 'Segundo Servicio' },
    { id: 3, name: 'Tercer Servicio' }
  ]

  setCurrentServices(a)

  return <>
    {
      currentServices.map((singleService) => {
        <nav>
          <Link href={`/serviceStatus/${singleService.id}`}>
            <a>
              <div className={styles.card}>
                <h2>Servicio {singleService.name} &rarr;</h2>
                <p>El servicio se encuentra en proceso.</p>
              </div>
            </a>
          </Link>
        </nav>
      })
    }
  </>
}