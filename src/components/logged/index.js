import useUser from '/src/hooks/useUser'

import UserHome from '../userHome'

import styles from '/src/styles/Home.module.css'

export default function Inicio() {
  const { logout } = useUser()

  const handleClick = (evt) => {
    evt.preventDefault()
    logout()
  }

  return <div className={styles.grid}>
    <nav>
      <div className={styles.card} onClick={handleClick}>
        <h2>Cerrar sesión &rarr;</h2>
        <p>Cierra sesión para poder ingresar con un nuevo usuario.</p>
      </div>
    </nav>

    <UserHome />
  </div>
}