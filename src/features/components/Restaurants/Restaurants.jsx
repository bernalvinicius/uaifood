import { Grid } from '@material-ui/core';
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
        <span className={classes.title}>
          Restaurantes em{' '}
          {data?.collections?.restaurants
            ? data?.collections?.restaurants[0]?.restaurant?.location?.city
            : '...'}
        </span>
      </div>
      <Grid container spacing={4}>
        {data.collections.restaurants?.map((item) => (
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Restaurant key={item} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Restaurants.propTypes = {
  data: PropTypes.isRequired,
};

export default Restaurants;
