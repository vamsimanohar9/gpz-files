import React from 'react';

const ComponentA = () => {
  return (
    <nav className='navstyle'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export const componentAHtml = '<nav class="navstyle"><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav>';
export default ComponentA;
