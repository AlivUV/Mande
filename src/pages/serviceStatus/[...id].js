import Link from 'next/link'

import styles from '/src/styles/Home.module.css'

export default function Status({ id }) {

  return <>
    <nav>
      <Link href={`/serviceStatus`}>
        <a>
          <div className={styles.card}>
            <h2>Volver &larr;</h2>
          </div>
        </a>
      </Link>
    </nav>

    <div className={styles.card}>
      <h2>Servicio {id} &rarr;</h2>
    </div>
  </>
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  return { props: { id } };
}