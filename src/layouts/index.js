import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

import './index.css'

const Layout = ({ children, data }) => (
  
  <div>

    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Interaction Designer based in Stockholm, Seoul' },
        { name: 'keywords', content: 'interaction, design, designer, ixd, ux, stockholm' },
        { property: 'og:image', content: 'https://preview.ibb.co/dta06U/preview.png'}
      ]}
    />
    {children()}
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
