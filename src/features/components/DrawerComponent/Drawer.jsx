import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';

import country from '../../../assets/data/country';
import prices from '../../../assets/data/prices';
import { useStyles } from './styles';

const stars = new Array(5).fill(null);

const Drawer = () => {
  const classes = useStyles();

  const Stars = ({ number }) => {
    return new Array(number)
      .fill(null)
      .map((_val) => (
        <StarBorderIcon className={classes.itemName} key={_val} />
      ));
  };

  return (
    <div className={classes.root}>
      <div className={classes.contentDrawer}>
        <div>
          <div className={classes.divTitle}>
            <span className={classes.title}>NOTA:</span>
          </div>
          {stars.map((_val, idx) => (
            <ListItem className={classes.itemList} button key={_val}>
              <Checkbox size="small" />
              <Stars number={idx + 1} />
            </ListItem>
          ))}
        </div>
        <div>
          <div className={classes.divSTitle}>
            <span className={classes.title}>CUSTO PARA 2 PESSOAS:</span>
          </div>
          <List className={classes.list}>
            {prices.map((item) => (
              <ListItem className={classes.itemList} button key={item.id}>
                <Checkbox size="small" />
                <ListItemText
                  className={classes.itemName}
                  primary={item.name}
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <div>
            <span className={classes.title}>TIPO DE COZINHA:</span>
          </div>
          <List className={classes.list}>
            {country.map((item) => (
              <ListItem className={classes.itemList} button key={item.id}>
                <Checkbox size="small" />
                <ListItemText
                  className={classes.itemName}
                  primary={item.name}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
