import React from 'react';

import TabPanel from './TabPanel';
import Graphic from './Graphic/Graphic';
import JumpingCircle from './JumpingCircle/JumpingCircle';
import DataContainer from './ListNumbers/DataContainer';

const MainContent = ({value, arrayIndex}) => {
  return (
    <div style={{marginTop:45}}>
      <TabPanel value={value} index={arrayIndex[0]}>
        <DataContainer/>
      </TabPanel>
      <TabPanel value={value} index={arrayIndex[1]}>
        <Graphic/>
      </TabPanel>
      <TabPanel value={value} index={arrayIndex[2]}>
        <JumpingCircle/>
      </TabPanel>
    </div>
  )
};

export default MainContent;