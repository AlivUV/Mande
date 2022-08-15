import Link from 'next/link'
import { useState } from 'react'

import styles from '/src/styles/Home.module.css'

export default function ServiceStatus(props) {
  const [currentServices, setCurrentServices] = useState(props.services)

  return <div>
    <Link href='/'>
      <a>
        <div className={styles.card}>
          <h2>Volver al inicio &larr;</h2>
        </div>
      </a>
    </Link>
    <section>
      {
        [{ name: 'S' }, { name: 'S' }, { name: 'S' }].map((singleService) => (
          <nav>
            <Link href={`/serviceStatus/${singleService.id}`}>
              <a>
                <div className={styles.card}>
                  <h2>{singleService.name} &rarr;</h2>
                  <p>El servicio se encuentra en proceso.</p>
                </div>
              </a>
            </Link>
          </nav>
        ))
      }
    </section>
  </div>
}