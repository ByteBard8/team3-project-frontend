import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage(props) {

  return <Button style={{minWidth: props.minW, maxWidth: props.maxWidth}} 
  variant="outlined">
    {props.buttonText}
  </Button>;
}