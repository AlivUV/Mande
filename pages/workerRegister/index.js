import { useRouter } from "next/Router"
import { useState } from "react"

import styles from '../../styles/Home.module.css'

//import useUser from "../../hooks/useUser"

export default function WorkerRegister() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [country, setCountry] = useState("")
  const [department, setDepartment] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardNum, setCardNum] = useState("")

  const router = useRouter()
  /*
    const { login, isLogged } = useUser()
  
    useEffect(() => {
      if (isLogged) router.push("/")
    }, [isLogged, router])
  */
  const handleSubmit = evt => {
    evt.preventDefault()
    router.push("/")
    //  login()
  }

  return (
    <div className={styles.register}>
      <formik>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nombres"
            onChange={evt => setFirstname(evt.target.value)}
            value={firstname}
          />
          <input
            placeholder="Apellidos"
            onChange={evt => setLastname(evt.target.value)}
            value={lastname}
          />
          <input
            placeholder="Nombre de usuario"
            onChange={evt => setUsername(evt.target.value)}
            value={username}
          />
          <input
            type={password}
            placeholder="Contraseña"
            onChange={evt => setPassword(evt.target.value)}
            value={password}
          />
          <input
            placeholder="Correo electrónico"
            onChange={evt => setEmail(evt.target.value)}
            value={email}
          />
          <input
            placeholder="Dirección"
            onChange={evt => setAddress(evt.target.value)}
            value={address}
          />
          <input
            placeholder="Número telefónico"
            onChange={evt => setPhoneNumber(evt.target.value)}
            value={phoneNumber}
          />
          <input
            placeholder="País"
            onChange={evt => setCountry(evt.target.value)}
            value={country}
          />
          <input
            placeholder="Departamento"
            onChange={evt => setDepartment(evt.target.value)}
            value={department}
          />
          <input
            placeholder="Tipo de tarjeta"
            onChange={evt => setPaymentMethod(evt.target.value)}
            value={paymentMethod}
          />
          <input
            placeholder="Nombre en la tarjeta"
            onChange={evt => setCardName(evt.target.value)}
            value={cardName}
          />
          <input
            placeholder="Número de la tarjeta"
            onChange={evt => setCardNum(evt.target.value)}
            value={cardNum}
          />
          <button>Registrar trabajador</button>
        </form>
      </formik>
    </div >
  );
}