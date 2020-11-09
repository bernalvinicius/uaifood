import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: 10000,
    boxShadow: 'none',
    borderBottom: '1px solid #CCC',
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginLeft: '-20px',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fafafa',
    borderRight: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  restaurants: {
    padding: '20px 0',
  },
  toolbarHeader: {
    backgroundColor: '#fff',
    height: '70px',
  },
  toolbarTitle: {
    color: '#6c7680',
    fontWeight: 300,
    fontSize: '24px',
  },
  logoDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'min-content',
    width: '100%',
    maxWidth: '0px',

    '@media (min-width: 576px)': {
      maxWidth: '70px',
      marginRight: '10px',
      marginTop: '5px',
    },
  },
  buttonCpt: {
    display: 'none',

    '@media (min-width: 768px)': {
      display: 'block',
      marginLeft: '15px',
    },
  },
  divIconButton: {
    display: 'block',

    '@media (min-width: 768px)': {
      display: 'none',
      marginLeft: '15px',
    },
  },
  logo: {
    width: '100%',
  },
  divSearch: {
    border: '1px solid #CCC',
    width: '100%',
    maxWidth: '900px',
  },
  divHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '@media (min-width: 1220px)': {
      justifyContent: 'flex-end',
    },
  },
  search: {},
  iconButton: {
    backgroundColor: '#39b54a',
    marginLeft: '10px',
    color: '#fff',
  },
}));
