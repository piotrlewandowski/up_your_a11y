import React from 'react'
import aboutStyle from './homepageabout.module.css'

class HomePageAbout extends React.Component {
  render() {
    return (
      <div className={aboutStyle.aboutWrapper}>
        <h1 className={aboutStyle.title}>a web accessibility toolkit</h1>
        <p>
          tutorials &amp; resources for developers seeking to build accessible
          web experiences
        </p>
      </div>
    )
  }
}

export default HomePageAbout
