import React, {useEffect, useState} from 'react';

const getBaseItemStyle = (isActive) => ({
  height: 70,
  lineHeight: '68px',
  fontSize: '16px',
  textAlign: 'center',
  outline: 'none',
  border: '1px solid',
  cursor: 'move',
  display: 'inline-block',
  background: isActive ? '#27aceb' : '#bfe7f9',
  color: isActive ? '#fff' : '#1494d0',
  borderColor: isActive ? '#27aceb' : '#fff'
});

const SortableItemUI = (props) => {
  const {isDisabled, isActive, style, attributes, dataItem, forwardRef} = props;
  const classNames = ['col-xs-6 col-sm-3'];

  if (isDisabled) {
    classNames.push('k-state-disabled');
  }
  
  const [dataText, setDataText] = useState(dataItem.text);

  const handleChangeText = (event) => {
    setDataText(event.target.value);
  };

  useEffect(() => {
    const dataText = localStorage.getItem(dataItem.text);
    if (dataText) {
      setDataText(JSON.parse(dataText))
    }
  },[dataItem.text]);

  useEffect(() => {
    localStorage.setItem(dataItem.text,
      JSON.stringify(dataText))
  });

  return (
    <div className="example-config">
      <input
        ref={forwardRef}
        {...attributes}
        style={{
          ...getBaseItemStyle(isActive),
          ...style
        }}
        className={classNames.join(' ')}
        value={dataText}
        onChange={handleChangeText}/>
    </div>
  );
};

export default SortableItemUI;