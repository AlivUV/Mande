import Link from 'next/link'

import useUser from '/src/hooks/useUser'

import styles from '/src/styles/Home.module.css'

export default function UserHome() {
  const { logout } = useUser()

  const handleClose = (evt) => {
    evt.preventDefault()
    logout()
  }

  return <div className={styles.grid}>
    <nav>
      <div className={styles.card} onClick={handleClose}>
        <h2>Cerrar sesión &rarr;</h2>
        <p>Cierra sesión para poder ingresar con un nuevo usuario.</p>
      </div>
    </nav>

    <nav>
      <Link href="/serviceHistory">
        <a>
          <div className={styles.card}>
            <h2>Historial de servicios &rarr;</h2>
            <p>Mira los servicios que has solicitado y ya fueron completados.</p>
          </div>
        </a>
      </Link>
    </nav>

    <nav>
      <Link href="/requestService">
        <a>
          <div className={styles.card}>
            <h2>Solicitar un servicio &rarr;</h2>
            <p>Encuentra en poco tiempo al trabajador que necesitas.</p>
          </div>
        </a>
      </Link>
    </nav>

    <nav>
      <Link href="/serviceStatus">
        <a>
          <div className={styles.card}>
            <h2>Servicios actuales &rarr;</h2>
            <p>Mira el estado de los servicios que has solicitado.</p>
          </div>
        </a>
      </Link>
    </nav>

  </div>
}