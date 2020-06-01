import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import '../../themes/sass/pages/Home.sass'

export default class index extends Component {
  render () {
    return (
      <>
        {/*  this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet='utf-8' />
          <title>Home Page</title>
        </Helmet>
        <div>
         welcome home
        </div>
      </>
    )
  }
}
