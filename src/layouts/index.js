import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import './index.css'

import CarouselMain from '../components/carousel/carousel';
import TechList from '../components/tech/tech';
import ServiceList from '../components/services/services';
import ContactList from '../components/contacts/contacts';
import Map from '../components/map/map';
import MainForm from '../components/form/form';
import Info from "../components/info/info";

import { ParallaxProvider } from 'react-scroll-parallax';

const Layout = ({ children, data }) => (
  <div>
      <ParallaxProvider>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Электромонтаж персональный сайт' },
        { name: 'keywords', content: 'Электромонтаж, монтаж лифтов, обслуживание лифтов, монтаж лифтов в Туле, монтаж лифтов в Москве' },
      ]}
      link={[
          { rel: 'shortcut icon', type: 'image/png', href: "/static/favicon.png" }
      ]}
    />
      <Header siteTitle={data.site.siteMetadata.title} />
    <div className="container">
        {children()}
    </div>
      <CarouselMain/>
      <div className="container__white">
          <ServiceList/>
      </div>
      <Info/>
      <TechList/>
      <ContactList/>
      <Map/>
      <MainForm/>
      </ParallaxProvider>
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
