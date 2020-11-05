import { makeStyles } from '@material-ui/core';

import bg from '../../../assets/images/bg.jpg';

export const useStyles = makeStyles({
  container: {
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100%',
    overflow: 'hidden',
    minHeight: '100vh',

    '@media (min-width: 960px)': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  content: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0 20px',

    '@media (min-width: 960px)': {
      width: '100%',
      maxWidth: '900px',
    },
  },
  logoDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'min-content',
    width: '100%',
    maxWidth: '110px',
  },
  logo: {
    width: '100%',
  },
  spanTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  span: {
    margin: 0,
    padding: 0,
    color: '#fff',
    fontSize: '35px',
    fontWeight: '800',
    textAlign: 'initial',

    '@media (min-width: 576px)': {
      fontSize: '49px',
    },

    '@media (min-width: 960px)': {
      fontSize: '60px',
    },
  },
  searchBtn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (min-width: 576px)': {
      flexDirection: 'row',
    },
  },
  divSearch: {
    width: '100%',
    background: '#fff',
    marginBottom: '20px',

    '@media (min-width: 576px)': {
      margin: '0 20px 0 0',
    },
  },
});
