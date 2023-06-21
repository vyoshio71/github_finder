import Home from "./routes/Home"
import classes from "./App.module.css"

function App() {

  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Home />
    </div>
  )
}

export default App
