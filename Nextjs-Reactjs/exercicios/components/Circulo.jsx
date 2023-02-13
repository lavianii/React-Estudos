import styles from "../styles/Circulo.module.css"

export default function Circulo(props) {

  return (
    <div className={styles.container}>
      {props.numero}
    </div>
  )
}