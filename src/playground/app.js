import Button from '@material-ui/core/Button';

console.log("App is running")

const app = {
	title: "Daddy Wants No Scammy",
	subtitle: "This is some info",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ""
    renderApp()
  }
}

const appRoot = document.getElementById("app")

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle && <p>{app.subtitle}</p>}</p>
      <p>{app.options.length}</p>
      <ol>
        {
          app.options.map((option) => <li>Option: {option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        //<button>Add Option</button>
        <Button variant="raised" color="primary">
          Add Option
        </Button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()