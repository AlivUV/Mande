import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </nav>
    </header>
  )
}