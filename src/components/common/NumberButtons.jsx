import * as React from 'react';
import Button from '@mui/material/Button';
import '../../Assets/numberButtons.sass'
const NumberButtons = props => {
  return (
    <Button variant="contained" size="large" onClick={props.onClick} id={props.elementId}>{props.title}</Button>
  )

}

export default NumberButtons;