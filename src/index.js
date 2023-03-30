import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const author = 'Jordan Moore';
const title = 'Interesting Facts For Curious Mindssssss';

const BookList = () =>{
  return (
    <section className='booklist'>
      <Book job='developer' />
      <Book title='random title' number={22} />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img 
    src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
    alt='Interesting Facts For Curious Minds' 
      />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);