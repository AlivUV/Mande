import { Formik } from 'formik'
import { useRouter } from "next/Router"
import { useEffect } from "react"

import styles from '/src/styles/Home.module.css'

import useUser from "src/hooks/useUser"

export default function WorkerRegister() {

  const router = useRouter()

  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) router.push("/")
  }, [isLogged, router])

  const handleSubmit = values => {
    console.log(values)
    // router.push("/")
  }

  return (
    <div className={styles.register}>
      <Formik
        initialValues=
        {{
          nombres: "",
          apellidos: "",
          usuario: "",
          contraseña: "",
          correo: "",
          direccion: "",
          telefono: "",
          pais: "",
          departamento: "",
          tipoTarjeta: "",
          nombreTarjeta: "",
          numeroTarjeta: ""
        }}
        onSubmit={handleSubmit}
      >
        {
          ({ handleChange, handleSubmit }) =>
          (
            <form onSubmit={handleSubmit}>
              <input
                name="nombres"
                placeholder="Nombres"
                onChange={handleChange}
              />
              <input
                name="apellidos"
                placeholder="Apellidos"
                onChange={handleChange}
              />
              <input
                name="usuario"
                placeholder="Nombre de usuario"
                onChange={handleChange}
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                onChange={handleChange}
              />
              <input
                name="correo"
                placeholder="Correo electrónico"
                onChange={handleChange}
              />
              <input
                name="direccion"
                placeholder="Dirección"
                onChange={handleChange}
              />
              <input
                name="telefono"
                placeholder="Número telefónico"
                onChange={handleChange}
              />
              <input
                name="pais"
                placeholder="País"
                onChange={handleChange}
              />
              <input
                name="departamento"
                placeholder="Departamento"
                onChange={handleChange}
              />
              <input
                name="tipoTarjeta"
                placeholder="Tipo de tarjeta"
                onChange={handleChange}
              />
              <input
                name="nombreTarjeta"
                placeholder="Nombre en la tarjeta"
                onChange={handleChange}
              />
              <input
                name="numeroTarjeta"
                placeholder="Número de la tarjeta"
                onChange={handleChange}
              />
              <button>Registrar trabajador</button>
            </form>
          )
        }
      </Formik>
    </div >
  );
}