import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <h2>My First Component</h2>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);