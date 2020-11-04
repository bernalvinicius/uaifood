import Button from '@material-ui/core/Button';
import React from 'react';

import { useStyles } from './styles';

const ButtonCpt = () => {
  const classes = useStyles();
  return (
    <Button className={classes.container} variant="contained" color="primary">
      BUSCAR
    </Button>
  );
};

export default ButtonCpt;
