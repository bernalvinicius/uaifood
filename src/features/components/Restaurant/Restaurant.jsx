import { Box, Typography } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import StarIcon from '@material-ui/icons/Star';
import PropTypes from 'prop-types';
import React from 'react';

import thumb from '../../../assets/images/thumb.jpg';
import { useStyles } from './styles';

const stars = new Array(3).fill(null);

const Restaurant = (props) => {
  const { item } = props;
  const classes = useStyles();

  const Stars = ({ number }) => {
    return new Array(number)
      .fill(null)
      .map((_val) => <StarIcon className={classes.stars} key={_val} />);
  };

  return (
    <>
      <Box className={classes.divBox}>
        <div className={classes.divImg}>
          <img
            className={classes.img}
            src={
              item.restaurant.thumb.split('?')[0] !== ''
                ? item.restaurant.thumb.split('?')[0]
                : thumb
            }
            alt=""
          />
          <div className={classes.divInfos}>
            <Typography className={classes.restaurantName}>
              {item.restaurant.name}
            </Typography>
            <Typography className={classes.restaurantAddress}>
              {item.restaurant.location.address}
            </Typography>
            <div>
              {stars.map((_val, idx) => (
                <Stars number={idx} key={_val} />
              ))}
            </div>
            <div className={classes.divFooterInfos}>
              <div className={classes.divAverage}>
                <PeopleAltIcon className={classes.twoPeople} />
                <span className={classes.average}>
                  R${item.restaurant.average_cost_for_two}
                </span>
              </div>
              <div className={classes.divCuisines}>
                <span className={classes.cuisines}>
                  {item.restaurant.cuisines.split(',')[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

Restaurant.propTypes = {
  item: PropTypes.isRequired,
};

export default Restaurant;
