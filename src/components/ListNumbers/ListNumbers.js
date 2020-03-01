import React from 'react';
import {Sortable} from '@progress/kendo-react-sortable';

import SortableItemUI from './SortableItem';
import styles from './ListNumbers.module.css';

const ListNumbers = ({data,onDragOver,onNavigate}) => {
  return (
    <div className={styles.info}>
      <div className={styles.boxes}>
        <Sortable
          idField={'id'}
          disabledField={'disabled'}
          data={data}
          itemUI={SortableItemUI}
          onDragOver={onDragOver}
          onNavigate={onNavigate}/>
      </div>
    </div>
  )
};

export default ListNumbers;