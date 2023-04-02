import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// const author = 'Jordan Moore';
// const title = 'Interesting Facts For Curious Mindssssss';

const books = [
  {
    author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
];

// const firstBook = {
//   author: 'Jordan Moore',
//   title: 'Interesting Facts For Curious Minds',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg',
// };
// const secondBook = {
//   author: 'James Clear',
//   title: 'Atomic Habits',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
// };

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);