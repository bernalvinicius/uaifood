import React, { useState } from 'react';

import logoWhite from '../../../assets/images/logo-white.jpg';
import Button from '../../components/Button';
import Search from '../../components/Search';
import { useStyles } from './styles';

const HomePage = () => {
  const classes = useStyles();
  const [searchCity, setSearchCity] = useState([]);

  console.log('searchCity: ', searchCity);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.logoDiv}>
          <img className={classes.logo} src={logoWhite} alt="uaifood" />
        </div>
        <div className={classes.spanTitle}>
          <p className={classes.span}>
            {' '}
            Descubra os melhores restaurantes em sua cidade
          </p>
        </div>
        <div className={classes.searchBtn}>
          <div className={classes.divSearch}>
            <Search setSearchCity={setSearchCity} />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
