import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { fetchByCity, fetchCollections } from '../../../api/index';
import logoRed from '../../../assets/images/logo-red.jpg';
import Button from '../../components/Button';
import DrawerComponent from '../../components/DrawerComponent';
import Restaurants from '../../components/Restaurants';
import Search from '../../components/Search';
import Spinner from '../../components/Spinner';
import { useStyles } from './styles';

const CardPage = (props) => {
  const { window } = props;
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchCity, setSearchCity] = useState(location.state);
  const [city, setCity] = useState(false);
  const [data, setData] = useState({
    locationSuggestions: [],
    collections: [],
    loading: false,
    error: null,
  });

  // const [activeFilter, setActiveFilter] = React.useState([]);
  // data?.collections?.restaurants[0]?.restaurant?.location?.city

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (event) => {
    console.log('aqui: ', event.target.value);
    setSearchCity(event.target.value);
  };

  const handlePress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const getByCityId = async (cityId) => {
    try {
      const { data: _data, status } = await fetchCollections(cityId);
      if (status !== 200)
        throw Object.assign(
          new Error(
            'Nenhum restaurante encontrado. Insira o código correto da cidade.'
          ),
          { code: status }
        );
      const collections = _data;
      setData((prev) => ({ ...prev, loading: false, collections }));
      setSearchCity(data.locationSuggestions.name);
      // setCity(false);
    } catch (error) {
      setData((prev) => ({
        ...prev,
        loading: false,
        error,
      }));
    }
  };

  const getByCity = async () => {
    try {
      const { data: _data, status } = await fetchByCity(searchCity);
      if (status !== 200)
        throw Object.assign(
          new Error(
            'Nenhum restaurante encontrado. Insira o nome correto da cidade.'
          ),
          { code: status }
        );
      const locationSuggestions = _data.location_suggestions;
      getByCityId(_data.location_suggestions[0].id);
      setData((prev) => ({ ...prev, loading: false, locationSuggestions }));
    } catch (error) {
      setData((prev) => ({
        ...prev,
        loading: false,
        error,
      }));
    }
  };

  const clickSearch = () => {
    setData((prev) => ({
      ...prev,
      loading: true,
    }));

    getByCity();
  };

  if (location.state && !city) {
    setCity(true);
    clickSearch();
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbarHeader}>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <div className={classes.logoDiv}>
            <Link
              style={{
                textDecoration: 'none',
              }}
              to={{ pathname: '/' }}>
              <img className={classes.logo} src={logoRed} alt="uaifood" />
            </Link>
          </div>
          <div className={classes.divHeader}>
            <div className={classes.divSearch}>
              <Search
                onKeyPress={handlePress}
                onChange={handleSearch}
                className={classes.search}
                value={searchCity}
              />
            </div>
            <div className={classes.buttonCpt}>
              <Button disabled={data.loading} onClick={clickSearch} />
            </div>
            <div className={classes.divIconButton}>
              <IconButton
                disabled={data.loading}
                onClick={clickSearch}
                className={classes.iconButton}>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}>
            <DrawerComponent
            // activeFilter={activeFilter}
            // setActiveFilter={setActiveFilter}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            <DrawerComponent
            // activeFilter={activeFilter}
            // setActiveFilter={setActiveFilter}
            />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.restaurants}>
          {data.error && <span>{data.error}</span>}
          {data.loading && <Spinner />}
          {!data.loading && !data.error && <Restaurants data={data} />}
        </div>
      </main>
    </div>
  );
};

CardPage.propTypes = {
  window: PropTypes.func.isRequired,
};

export default CardPage;
