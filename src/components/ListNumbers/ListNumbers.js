import React from 'react';
import {Sortable} from '@progress/kendo-react-sortable';

import SortableItemUI from './SortableItem';

const ListNumbers = ({data,onDragOver,onNavigate}) => {
  return (
    <div style={{marginTop: 100}}>
      <Sortable
        idField={'id'}
        disabledField={'disabled'}
        data={data}
        itemUI={SortableItemUI}
        onDragOver={onDragOver}
        onNavigate={onNavigate}/>
    </div>
  )
};

export default ListNumbers;