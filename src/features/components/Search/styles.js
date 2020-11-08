import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  search: {
    width: '100%',
    maxWidth: '900px',
    padding: '5px 0 0 5px',
  },
  input: {
    minWidth: '100%',
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
      width: '100%',
    },
    '& label.Mui-focused': {
      color: '#767676',
    },
  },
  inputContent: {
    color: '#767676',
    fontSize: '24px',
    fontWeight: 300,
  },
  inputLabel: {
    color: '#767676',
    lineHeight: '1.45',
    letterSpacing: '0.5px',
  },
});
