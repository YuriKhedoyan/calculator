import * as React from 'react';
import Button from '@mui/material/Button';
import '../../Assets/numberButtons.css'

const NumberButtons = props => {

  return (
    <Button variant="contained" size="large" onClick={props.onClick} style={{backgroundColor: props.color, width: props.width}}>{props.title}</Button>
  )

}

export default NumberButtons;