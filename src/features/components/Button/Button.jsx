import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';

import { useStyles } from './styles';

const ButtonCpt = (props) => {
  const { disabled, onClick } = props;
  const classes = useStyles();
  return (
    <Button
      onClick={onClick}
      className={classes.container}
      disabled={disabled}
      variant="contained"
      color="primary">
      BUSCAR
    </Button>
  );
};

ButtonCpt.propTypes = {
  disabled: PropTypes.isRequired,
  onClick: PropTypes.isRequired,
};

export default ButtonCpt;
