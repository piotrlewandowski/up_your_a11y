import React from 'react'
import navStyle from './navigation.module.css'

class Navigation extends React.Component {
  render() {
    const { location } = this.props
    const activePage = location.pathname

    return (
      <nav>
        <ul className={navStyle.navList}>
          <li>
            <a
              href="#about"
              className={
                activePage === '/about'
                  ? `${navStyle.navLink} ${navStyle.activePage}`
                  : `${navStyle.navLink} ${navStyle.inactivePage}`
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={
                activePage === '/contact'
                  ? `${navStyle.navLink} ${navStyle.activePage}`
                  : `${navStyle.navLink} ${navStyle.inactivePage}`
              }
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#contribute"
              className={
                activePage === '/contribute-to-a11y-in-oss'
                  ? `${navStyle.navLink} ${navStyle.activePage}`
                  : `${navStyle.navLink} ${navStyle.inactivePage}`
              }
            >
              Contribute
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
