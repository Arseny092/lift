import React from 'react'
import Link from 'gatsby-link'
import Menu from "../menu/menu";
import Media from 'react-media';
import '../header/header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className="header-container"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}>
          {siteTitle}
        </Link>
      </h1>
        <Media query="(min-width: 830px)">
            {matches =>
                matches ? (
                    <ul className="header-nav">
                        <li className="header-nav-el"><a href="#services">Услуги</a></li>
                        <li className="header-nav-el"><a href="#infos">О нас</a></li>
                        <li className="header-nav-el"><a href="#techs">Наши партнеры</a></li>
                        <li className="header-nav-el"><a href="#contacts">Контакты</a></li>
                    </ul>
                ) : (
                    <Menu/>
                )
            }
        </Media>
    </div>
  </div>
)

export default Header
