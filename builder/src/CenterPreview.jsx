import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Row from './Row';

const CenterPreview = ({ onDrop }) => {
  const [droppedComponents, setDroppedComponents] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => {
      setDroppedComponents((prevDropped) => [...prevDropped, item.component]);
      onDrop(item);
    },
  }));

  return (
    <div ref={drop} style={{ minHeight: '200px', width: '999px', border: '1px dashed #ccc', padding: '10px', backgroundColor: '#f0f0f0' }}>
      {droppedComponents.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
      <Row onDrop={onDrop} />
    </div>
  );
};

export default CenterPreview;
