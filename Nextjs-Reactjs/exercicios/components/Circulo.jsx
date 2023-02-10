export default function Circulo(props){

  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent: "center",
      backgroundColor: "#222",
      height: "100px",
      width:"100px",
      borderRadius: "50%",
      color: "#fff",
      fontSize: "30px",
    }}>
      
      {props.numero}
    </div>
  )
}