import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Restaurant = (props) => {
  const { item } = props;
  console.log('item: ', item);
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box>
            <Typography>Teste</Typography>
            {/* <img src={item.collection.image_url} alt="" /> */}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

Restaurant.propTypes = {
  item: PropTypes.isRequired,
};

export default Restaurant;
