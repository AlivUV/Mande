import { useRouter } from "next/Router"
import { Formik } from 'formik'
import { useEffect } from "react"

import styles from 'src/styles/Home.module.css'

import useUser from "src/hooks/useUser"

export default function UserRegister() {

  const router = useRouter()

  const { userRegister, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) router.push("/")
  }, [isLogged, router])

  const handleSubmit = values => {
    //router.push("/")
    userRegister(values)

  }

  return (
    <div className={styles.register}>
      <Formik
        initialValues=
        {{
          nombres: "",
          apellidos: "",
          usuario: "",
          contrasena: "",
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
                name="contrasena"
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
              <button>Registrar usuario</button>
            </form>
          )
        }
      </Formik>
    </div >
  );
}