import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';

import LinkTab from './LinkTab';

const allProps = (index) => {
  return {
    id:'nav-tab-'+index,
    'aria-controls':'nav-tabpanel-'+index
  }
};

const Header = ({handleChange, value}) => {
  return (
    <>
      <AppBar>
        <Tabs variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example">
          <LinkTab label="ListNumbers" href="/listNumbers" {...allProps(0)}/>
          <LinkTab label="Graphics" href="/graphic" {...allProps(1)}/>
          <LinkTab label="JumpingCircle" href="/jumpingCircle" {...allProps(2)}/>
        </Tabs>
      </AppBar>
    </>
  )
};

export default Header;