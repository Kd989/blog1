import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-scroller py-1 mb-3 border-bottom'>
      <nav className='nav nav-underline justify-content-between'>
        <Link to="/" className='nav-item nav-link link-body-emphasis active'>World</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>US</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Design</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Technology</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Culture</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Politics</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Science</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Health</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Style</Link>
        <Link to="/" className='nav-item nav-link link-body-emphasis'>Travel</Link>
      </nav>
    </div>
  );
}

export default Nav;
