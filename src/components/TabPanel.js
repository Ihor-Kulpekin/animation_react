import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Box} from '@material-ui/core';

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <Typography component="div"
                role="tabpanel"
                hidden={value !== index}
                id={'nav-tabpanel-' + index}
                aria-labelledby={'nav-tab-' + index}
                {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
};

export default TabPanel;