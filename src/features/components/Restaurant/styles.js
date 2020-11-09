import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  divBox: {
    // width: '100%',
    // maxWidth: '350px',
    // height: '100%',
    // maxHeight: '200px',
  },
  divImg: {
    position: 'relative',
    height: '300px',
    maxWidth: '350px',
    border: '1px solid #CCC',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  divInfos: {
    position: 'absolute',
    bottom: 0,
    height: '50%',
    width: '100%',
    color: '#000',
    backgroundColor: '#fff',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  restaurantName: {
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '16px',
  },
  restaurantAddress: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '14px',
    color: '#767676',
  },
  stars: {
    color: '#39b54a',
    fontWeight: 600,
    fontSize: '18.6px',
  },
  twoPeople: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '24px',
    marginRight: '5px',
  },
  divFooterInfos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  divAverage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    backgroundColor: '#39b54a',
    padding: '0 10px',
  },
  average: {
    color: '#fff',
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '18px',
  },
  divCuisines: {
    backgroundColor: '#E9E9E9',
    padding: '0 10px',
  },
  cuisines: {
    color: '#484848',
    fontFamily: 'Open Sans',
    fontWeight: 300,
    fontSize: '18px',
  },
});
