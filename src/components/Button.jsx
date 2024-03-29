import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage(props) {

  return <Button variant="contained">{props.buttonText}</Button>;
}