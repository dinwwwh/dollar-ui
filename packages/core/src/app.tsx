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

      <div className={classes.component}>
        <input className="$input" placeholder="Enter your first name" />
        <input className="$input" placeholder="Enter your last name" disabled />
      </div>

      <div className={classes.component}>
        <input className="$input $input-sm" placeholder="Enter your first name" />
        <input className="$input $input-sm" placeholder="Enter your last name" value="with value" disabled />
      </div>

      <div className={classes.component} style={{ maxWidth: 360 }}>
        <input className="$input" placeholder="Enter your first name" />
        <button className="$btn">Button</button>
      </div>

      <div className={classes.component} style={{ maxWidth: 200 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input className="$input $input-sm" placeholder="Enter your first name" style={{ marginRight: 8 }} />
          <button className="$btn $btn-square $btn-sm">
            <IconEdit />
          </button>
        </div>
      </div>

    </div>
  )
}
