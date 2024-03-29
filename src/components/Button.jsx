import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage(props) {

  return <Button style={{minWidth: '289px', maxWidth: '289px'}} variant="outlined">{props.buttonText}</Button>;
}