import { useRouter } from "next/Router"
import { Formik } from 'formik'

import styles from '../../styles/Home.module.css'

//import useUser from "../../hooks/useUser"

export default function UserRegister() {

  const router = useRouter()
  /*
    const { login, isLogged } = useUser()
  
    useEffect(() => {
      if (isLogged) router.push("/")
    }, [isLogged, router])
  */

  const handleSubmit = evt => {
    console.log("Why")
    router.push("/")
    //  login()
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
            <form onSubmit={values => console.log(values)}>
              <input
                name="nombres"
                placeholder="Nombres"
                handleChange={handleChange}
              />
              <input
                name="apellidos"
                placeholder="Apellidos"
                handleChange={handleChange}
              />
              <input
                name="usuario"
                placeholder="Nombre de usuario"
                handleChange={handleChange}
              />
              <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                handleChange={handleChange}
              />
              <input
                name="correo"
                placeholder="Correo electrónico"
                handleChange={handleChange}
              />
              <input
                name="direccion"
                placeholder="Dirección"
                handleChange={handleChange}
              />
              <input
                name="telefono"
                placeholder="Número telefónico"
                handleChange={handleChange}
              />
              <input
                name="pais"
                placeholder="País"
                handleChange={handleChange}
              />
              <input
                name="departamento"
                placeholder="Departamento"
                handleChange={handleChange}
              />
              <input
                name="tipoTarjeta"
                placeholder="Tipo de tarjeta"
                handleChange={handleChange}
              />
              <input
                name="nombreTarjeta"
                placeholder="Nombre en la tarjeta"
                handleChange={handleChange}
              />
              <input
                name="numeroTarjeta"
                placeholder="Número de la tarjeta"
                handleChange={handleChange}
              />
              <button>Registrar usuario</button>
            </form>
          )
        }
      </Formik>
    </div >
  );
}