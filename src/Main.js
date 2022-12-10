import { useAlert } from "./alert/AlertContext"

export default function Main() {
  const { show } = useAlert()

  return (
    <>
      <h1>Hello in example with hooks: useContext & useReducer</h1>
      <button
        onClick={() => show('This is a very important message!')}
        className="btn btn-success"
      >
        Show alert
      </button>
    </>
  )
}
