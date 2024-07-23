import { IconMenu2, IconUpload } from '@tabler/icons-react'
import { Popover, PopoverContent, PopoverPortal, PopoverTrigger } from '@radix-ui/react-popover'
import classes from './app.module.css'

export function App() {
  return (
    <div className={classes.container}>

      <div className={classes.component}>
        <button className="$btn">Button</button>
        <button className="$btn $btn-square">
          <IconMenu2 />
        </button>
        <button className="$btn $btn-square">
          B
        </button>
        <button className="$btn $btn-sm">Get started</button>
        <button className="$btn $btn-square $btn-sm">
          <IconUpload />
        </button>
        <button className="$btn $btn-sm" disabled>Button</button>
        <button className="$btn $btn-square $btn-sm" disabled>
          <IconUpload />
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

      <div className={classes.component}>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: 200 }}>
          <input className="$input $input-sm" placeholder="First name" style={{ marginRight: 8 }} />
          <button className="$btn $btn-square $btn-sm" style={{ flexShrink: 0 }}>
            <IconUpload />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', maxWidth: 200 }}>
          <div style={{ position: 'relative' }}>
            <input className="$input" placeholder="First name" style={{ paddingRight: 60 }} />

            <button className="$btn $btn-sm" style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)' }}>
              Save
            </button>
          </div>
        </div>
      </div>

      <div className={classes.component}>
        <Popover>
          <PopoverTrigger asChild>
            <button className="$btn">Open Popover</button>
          </PopoverTrigger>

          <PopoverPortal>
            <PopoverContent sideOffset={4} className="$radix-popover-content">
              xin chao
            </PopoverContent>
          </PopoverPortal>
        </Popover>

      </div>

    </div>
  )
}
