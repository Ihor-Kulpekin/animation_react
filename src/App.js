import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Header from './components/Header';
import MainContent from './components/MainContent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 100 + '%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const App = () => {
  const [value, setValue] = useState(0);
  const arrayIndex = [0, 1, 2];
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Header handleChange={handleChange} value={value}/>
      <MainContent value={value} arrayIndex={arrayIndex}/>
    </div>
  );
};

export default App;
