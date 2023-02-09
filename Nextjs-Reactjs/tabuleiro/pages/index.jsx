import Linha from '@/components/Linha'

export default function Home() {
  return (

    <div style=
    {{
      display:"flex",
      flexDirection: "column",
      alignItems:"center",
      justifyContent: "center",
      minHeight: "100vh"
    }}>
      <Linha />
      <Linha preta/>
      <Linha />
      <Linha preta/>
      <Linha />
      <Linha preta/>
      <Linha />
      <Linha preta/>
    </div>
  )
}
