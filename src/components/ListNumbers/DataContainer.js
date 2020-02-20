import React, {useEffect, useState} from 'react';

import ListNumbers from './ListNumbers';

const DataContainer = () => {
  const [data, setData] = useState([
    {id: 1, text: 'item11'},
    {id: 2, text: 'item2'},
    {id: 3, text: 'item3'},
    {id: 4, text: 'item4'},
    {id: 5, text: 'item5'}
  ]);

  const onDragOver = (event) => {
    setData(event.newState);
  };

  const onNavigate = (event) => {
    setData(event.newState);
  };

  useEffect(() => {
    const data = localStorage.getItem('listData');
    if (data) {
      setData(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listData', JSON.stringify(data))
  });

  return <ListNumbers data={data}
                      onDragOver={onDragOver}
                      onNavigate={onNavigate}/>
};

export default DataContainer;