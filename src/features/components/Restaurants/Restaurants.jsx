import PropTypes from 'prop-types';
import React from 'react';

import Restaurant from '../Restaurant';
import { useStyles } from './styles';

const Restaurants = (props) => {
  const { data } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.divTitle}>
        <span className={classes.title}>Restaurantes em São Paulo</span>
      </div>
      {data.collections.collections.map((item) => (
        <Restaurant key={item} item={item} />
      ))}
    </div>
  );
};

Restaurants.propTypes = {
  data: PropTypes.isRequired,
};

export default Restaurants;
