import React from 'react';
import Link from 'gatsby-link';
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <div className="logo">
        <Link to="/">Jinbread.works</Link>
      </div>
      <div className="MenuGroup">
          <div className="MenuDetail">
            <Link to="/works">Works</Link>
            <Link to="/play">Play</Link>
            <Link to="/write">Write</Link>
            <Link to="/about">About</Link>
          </div>
          
      </div>

  </div>
</div>
)

export default Header
