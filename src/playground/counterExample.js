let count = 0
const substractOne = () => {
  console.log("substractOne")
  count--
  renderApp()
}
const addOne = () => {
  console.log("addOne")
  count++
  renderApp()
}
const setupReset = () => {
  console.log("setupReset")
  count = 0
  renderApp()
}

const renderApp = () => {
  const templateThree = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={substractOne}>-1</button>
    <button onClick={addOne}>+1</button>
    <button onClick={setupReset}>Reset</button>
  </div>
  )
  ReactDOM.render(templateThree, appRoot)
}

renderApp()