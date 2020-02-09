import React from 'react'
// import { Link } from "gatsby"
import { connect } from 'react-redux'
import { Button, Link, Typography } from '@material-ui/core'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { toggleDarkMode } from '../state/app'

const IndexPage = ({ isDarkMode, dispatch }) => (
  <Layout>
    <SEO title="Home" />
    <h1 style={isDarkMode ? { color: '#663399' } : null}>Hi people</h1>
    <Typography variant="h3" style={isDarkMode ? { color: 'navy' } : null}>Hi buddies</Typography>
    <Typography>Welcome to your new Gatsby site.</Typography>
    <Typography>Now go build something great.</Typography>
    <Button
      type="button"
      variant={isDarkMode ? 'contained' : 'outlined'}
      color={isDarkMode ? 'primary' : 'secondary'}
      onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
    >
      Dark Mode
      {' '}
      {isDarkMode ? 'on' : 'off'}
    </Button>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default connect((state) => ({
  isDarkMode: state.app.isDarkMode,
}), null)(IndexPage)
