import Link from 'next/link'

import styles from '/src/styles/Home.module.css'

export default function Inicio() {
  return <div className={styles.grid}>

    <h1 className={styles.title}>
      Bienvenido a <span className={styles.highlight}>mande!</span>
    </h1>

    <p className={styles.description}>
      Consigue personas trabajadoras, expertas y honestas para realizar a domicilio
      labores del día a día en el hogar. Si lo deseas también puedes ser parte de
      nuestro equipo de trabajo.
    </p>

    <nav>
      <Link href="/userRegister">
        <a>
          <div className={styles.card}>
            <h2>Registrarse como usuario &rarr;</h2>
            <p>Encuentra en poco tiempo al trabajador que necesitas.</p>
          </div>
        </a>
      </Link>
    </nav>

    <nav>
      <Link href="/workerRegister">
        <a>
          <div className={styles.card}>
            <h2>Registrarse como trabajador &rarr;</h2>
            <p>Sé parte de nuestro equipo y trabaja con nosotros.</p>
          </div>
        </a>
      </Link>
    </nav>

    <nav>

      <Link href="/login">
        <a>
          <div className={styles.card}>
            <h2>Inicia sesión</h2>
            <p>Si ya tienes una cuenta.</p>
          </div>
        </a>
      </Link>
    </nav>
  </div>
}
