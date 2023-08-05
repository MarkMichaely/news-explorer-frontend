import React from 'react';
import './NothingFound.css';
import notFoundImg from '../../images/notFound.png';

function NothingFound() {
  return (
    <section className='not-found not-found_hidden'>
      <img src={notFoundImg} alt='not found image' className='not-found__image' />
      <div className='not-found__content'>
        <h4 className='not-found__header'>Nothing found</h4>
        <p className='not-found__text'>
          Sorry, but nothing matched{' '}
          <span className='not-found__span'>your search terms.</span>
        </p>
      </div>
    </section>
  );
}

export default NothingFound;
