import './styles.css'

interface IName {
  name: string
  title: string
}

export function Name(props: IName) {
  return (
    <label className="name" htmlFor={props.name}>
      {props.title}
      <input type="text" name={props.name} />
    </label>
  )
}
