import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <section>
      <div>
        <h2>Nendy Design</h2>
      <ul>
        <li>
          <a href='https://github.com/isnendyankp'>Github</a>
        </li>
      </ul>
      </div>
      <h3>Hello World</h3>
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);