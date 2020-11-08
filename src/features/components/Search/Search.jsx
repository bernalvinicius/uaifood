import { Box } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import RoomIcon from '@material-ui/icons/Room';
import PropTypes from 'prop-types';
import React from 'react';

import { useStyles } from './styles';

const Search = (props) => {
  const { setSearchCity } = props;
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.search}>
        <TextField
          onChange={(event) => setSearchCity(event.target.value)}
          placeholder="Digite a sua cidade"
          fullWidth
          focused="false"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon />
              </InputAdornment>
            ),
            focused: false,
            className: classes.inputContent,
          }}
          InputLabelProps={{
            shrink: false,
            focused: false,
            className: classes.inputLabel,
          }}
          className={classes.input}
        />
      </div>
    </Box>
  );
};

Search.propTypes = {
  setSearchCity: PropTypes.isRequired,
};

export default Search;
