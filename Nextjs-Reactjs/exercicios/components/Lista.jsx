export default function Lista(props) {
  return (
    <div>
      <h1>Lista de algo</h1>
      <ul>
        <ul>
          {props.children}
        </ul>
      </ul>
    </div>
  )
}