console.log("App is running")

const app = {
	title: "Visibility Toggle"
}

const appRoot = document.getElementById("app")

let toggleShowState = false

const toggleSwitch = () => {
	if (toggleShowState) {
		toggleShowState = false
	} else {
		toggleShowState = true
	}
	renderApp()
}

const toggleButtonMessage = () => {
	if (toggleShowState) {
		return "Hide details"
	} else {
		return "Show details"
	}
}

const hideParagraph = () => toggleShowState ? {} : {display: 'none'}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleSwitch}>{toggleButtonMessage()}</button>
      <p style={hideParagraph()}>Hey. These are some details you can now see!</p>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()