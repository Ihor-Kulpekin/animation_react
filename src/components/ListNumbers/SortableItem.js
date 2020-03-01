import React, {useEffect, useState} from 'react';

const getBaseItemStyle = (isActive) => ({
  height: 70,
  lineHeight: '68px',
  fontSize: '16px',
  textAlign: 'center',
  outline: 'none',
  border: '1px solid',
  cursor: 'move',
  background: '#3f51b5',
  color:'#fff',
  borderColor: '#fff',
  borderRadius:5
});

const SortableItemUI = (props) => {
  const {isActive, style, attributes, dataItem, forwardRef} = props;

  const [dataText, setDataText] = useState(dataItem.text);

  const handleChangeText = (event) => {
    setDataText(event.target.value);
  };

  useEffect(() => {
    const dataText = localStorage.getItem(dataItem.text);
    if (dataText) {
      setDataText(JSON.parse(dataText))
    }
  }, [dataItem.text]);

  useEffect(() => {
    localStorage.setItem(dataItem.text,
      JSON.stringify(dataText))
  });

  return (
    <div>
      <input
        ref={forwardRef}
        {...attributes}
        style={{
          ...getBaseItemStyle(isActive),
          ...style
        }}
        value={dataText}
        onChange={handleChangeText}/>
    </div>
  );
};

export default SortableItemUI;