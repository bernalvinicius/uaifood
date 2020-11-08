import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { fetchByCity } from '../../../api/index';
import logoRed from '../../../assets/images/logo-red.jpg';
import Button from '../../components/Button';
import DrawerComponent from '../../components/DrawerComponent';
import Search from '../../components/Search';
// import Card from './components/Card';
import { useStyles } from './styles';

const CardPage = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [activeFilter, setActiveFilter] = React.useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    fetchByCity('São Paulo').then((seila) => {
      console.log('response: ', seila);
    });
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            <img className={classes.logo} src={logoRed} alt="uaifood" />
          </div>
          <div className={classes.divHeader}>
            <div className={classes.divSearch}>
              <Search className={classes.search} />
            </div>
            <div className={classes.buttonCpt}>
              <Button />
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
        {/* <Card activeFilter={activeFilter} /> */}
        <p>CARD</p>
      </main>
    </div>
  );
};

CardPage.propTypes = {
  window: PropTypes.func.isRequired,
};

export default CardPage;
