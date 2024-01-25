import React from 'react';
import { useDrop } from 'react-dnd';

const Row = ({ children, onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => {
      onDrop(item);
    },
  }));

  return (
    <div ref={drop} style={{ display: 'flex', width: '100%', minHeight: '200px', border: '1px dashed #ccc', padding: '10px', backgroundColor: '#f0f0f0' }}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={{ flex: 1, marginRight: '10px' }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Row;
