import { makeStyles } from '@material-ui/core';

import bg from '../../../assets/images/bg.jpg';

export const useStyles = makeStyles({
  container: {
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '100%',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  content: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '0 20px',
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
    fontSize: '20px',
    fontWeight: '800',
    textAlign: 'initial',
  },
  divSearch: {
    width: '100%',
  },
});
