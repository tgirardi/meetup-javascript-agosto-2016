import delay from 'delay'
import { FIRST_COLOR, SECOND_COLOR } from './constants'

document.body.style.backgroundColor = FIRST_COLOR

delay(3000)
  .then(() => {
    document.body.style.backgroundColor = SECOND_COLOR
  })
