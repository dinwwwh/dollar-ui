import classes from './app.module.css'

export function App() {
  return (
    <div className={classes.container}>

      <div className={classes.component}>
        <button className="$btn">Button</button>
        <button className="$btn $btn-sm">Button</button>
      </div>

    </div>
  )
}
