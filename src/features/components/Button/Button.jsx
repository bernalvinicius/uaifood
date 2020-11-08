import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';

import { useStyles } from './styles';

const ButtonCpt = (props) => {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      className={classes.container}
      variant="contained"
      color="primary">
      BUSCAR
    </Button>
  );
};

ButtonCpt.propTypes = {
  onClick: PropTypes.isRequired,
};

export default ButtonCpt;
