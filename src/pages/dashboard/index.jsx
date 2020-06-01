import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../../containers/layout/dashboard.jsx'
// import Dashboard from '../../components/dashboard'

export default class index extends Component {
  render () {
    return (
      <Layout>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title> Dashboard </title>
        </Helmet>

      </Layout>
    )
  }
}
