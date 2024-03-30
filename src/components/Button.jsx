import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage(props) {

  return <Button style={{minWidth: props.minwidth, maxWidth: props.maxwidth}} 
  variant="outlined" {...props}>
    {props.buttontext}
  </Button>;
}