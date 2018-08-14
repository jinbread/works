import React from 'react';
import Link from 'gatsby-link';
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      {/* <Link to="/"><img width="30" /></Link> */}
      <Link to="/">Jinbread.works</Link>
      <Link to="/works">Works</Link>
      <Link to="/play">Play</Link>
      <Link to="/write">Write</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/buy"><button>Buy</button></Link>  */}
  </div>
</div>
)

export default Header
