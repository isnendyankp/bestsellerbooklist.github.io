import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () =>{
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () =>{
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
    alt='Interesting Facts For Curious Minds'
  />
);
const Title = () => <h2>Title of the book</h2>;
const Author = () => {
  return <h4>Author</h4>
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);