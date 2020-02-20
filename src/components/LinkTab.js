import React from 'react';
import Tab from '@material-ui/core/Tab';

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}/>
  );
};

export default LinkTab;