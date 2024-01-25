import React from 'react';
import { useDrag } from 'react-dnd';
import ComponentA from './ComponentA';
import Row from './Row';
import ComponentB from './ComponentB'
import NavbarComponent from './NavbarComponent';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import FooterComponent from './FooterComponent';

const LeftPanel = ({ onAddComponent }) => {
  const createDraggableComponent = (type, component, html) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'COMPONENT',
      item: { type, component, html },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return (
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <p onClick={() => onAddComponent(component, html)}>{type}</p>
      </div>
    );
  };

  return (
    <div>
      {createDraggableComponent('ComponentA', <ComponentA />, '<nav class="navstyle"><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav>')}
      {createDraggableComponent('Row', <Row><ComponentA /><ComponentA /></Row>, '')}
      {createDraggableComponent('Hero Section', <ComponentB />, '<div class="hero-container"><div class="hero-background"><img src="https://placehold.co/1920x1080/png" alt="Hero Background Image"></div><div class="hero-content"><h1 class="hero-title">Your Hero Title</h1><p class="hero-subtitle">Your Hero Subtitle or Description</p></div></div>')}
      {createDraggableComponent('Navbar', <NavbarComponent />, '<div class="navbar-container container"><nav class="navbar"><ul><li><a href="#">Home</a></li><li><a href="#">Features</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></nav></div>')}
      {createDraggableComponent('Feature 1', <Feature1 />, '<div class="feature-container container feature1-container"><div class="feature-content"><h2 class="feature-title">Feature 1</h2><p class="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div>')}
      {createDraggableComponent('Feature 2', <Feature2 />, '<div class="feature-container container feature2-container"><div class="feature-image"><img src="feature-image.jpg" alt="Feature Image"></div><div class="feature-content"><h2 class="feature-title">Feature 2</h2><p class="feature-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div>')}
      {createDraggableComponent('Footer', <FooterComponent />, '<div class="footer-container container"><footer class="footer"><div class="footer-links"><a href="#">Link 1</a><a href="#">Link 2</a><a href="#">Link 3</a><a href="#">Link 4</a></div><p>&copy; 2024 Goprotoz. All rights reserved.</p></footer></div>')}
      {createDraggableComponent('ComponentA', <ComponentA />,)}
    </div>
  );
};

export default LeftPanel;
