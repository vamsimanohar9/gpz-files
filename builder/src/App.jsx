import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LeftPanel from './LeftPanel';
import CenterPreview from './CenterPreview';
import './App.css';

const App = () => {
  const [components, setComponents] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarContent, setSidebarContent] = useState('');

  const addComponent = (component, html) => {
    setComponents([...components, { component, html }]);
  };

  const exportHTML = () => {
    const html = components.map((item) => item.html).join('');
    setSidebarContent(html);
    setSidebarVisible(true);
  };

  const onDrop = (item) => {
    setComponents((prevComponents) => [...prevComponents, { component: item.component, html: item.html }]);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: '#e0e0e0', padding: '10px', width: '200px' }}>
          <LeftPanel onAddComponent={addComponent} />
        </div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', flex: 1 }}>
          <CenterPreview components={components.map((item) => item.component)} onDrop={onDrop} />
          <button style={{ marginTop: '10px' }} onClick={exportHTML}>
            Export
          </button>
        </div>
        {sidebarVisible && (
          <div className="sidebar" style={{ width: '400px', backgroundColor: '#fff', padding: '10px', borderLeft: '1px solid #ccc' }}>
            <button onClick={closeSidebar} style={{ float: 'right' }}>
              Close
            </button>
            <textarea value={sidebarContent} readOnly style={{ width: '100%', height: '100%' }} />
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default App;
