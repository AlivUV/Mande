import styles from '/src/styles/Home.module.css'

export default function WorkerHome() {

  const handleClose = (evt) => {
    evt.preventDefault()
    logout()
  }

  return <div className={styles.gridWorker}>

    <label>
      Dinero ganado:
    </label>

    <nav>
      <div className={styles.card} onClick={handleClose}>
        <h2>Cerrar sesión &rarr;</h2>
        <p>Cierra sesión para poder ingresar con un nuevo usuario.</p>
      </div>
    </nav>

    <nav>
      <div className={styles.card}>
        <h2>Trabajos pendientes &rarr;</h2>
        <p>Acceso a los trabajos que puedes realizar.</p>
      </div>
    </nav>

    <nav>
      <a>
        <div className={styles.card}>
          <h2>Trabajos actuales &rarr;</h2>
          <p>Mira los servicios que estás realizando por el momento.</p>
        </div>
      </a>
    </nav>

    <nav>
      <a>
        <div className={styles.card}>
          <h2>Historial de servicios &rarr;</h2>
          <p>Revisa los servicios que has completado.</p>
        </div>
      </a>
    </nav>



  </div>
}
