import { h } from 'preact'
import { reset } from 'stitches-reset'
import { globalCss, styled } from '../stitches.config'

/**
 * Spread in css object so more can be spread in later
 **/
const globalStyles = globalCss({ ...reset })

const Button = styled('button', {
  'backgroundColor': '$violet800',
  'borderRadius': '9999px',
  'fontSize': '13px',
  'padding': '10px 15px',
  '&:hover': {
    backgroundColor: '$primary',
  },
})

export function App() {
  globalStyles()
  return (
    <div>
      <h1>App</h1>
      <Button>Button</Button>
    </div>
  )
}
