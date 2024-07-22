import { IconEdit } from '@tabler/icons-react'
import classes from './app.module.css'

export function App() {
  return (
    <div className={classes.container}>

      <div className={classes.component}>
        <button className="$btn">Button</button>
        <button className="$btn $btn-square">
          <IconEdit />
        </button>
        <button className="$btn $btn-sm">Button</button>
        <button className="$btn $btn-square $btn-sm">
          <IconEdit />
        </button>
        <button className="$btn $btn-sm" disabled>Button</button>
        <button className="$btn $btn-square $btn-sm" disabled>
          <IconEdit />
        </button>
      </div>

    </div>
  )
}
