import React, { Component } from 'react';
import Iframe from 'react-iframe';
import '../map/map.css';

class Map extends React.Component {
    render() {
        return (
            <div className="map-container">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.3741675753186!2d37.62024531586979!3d54.17344898016071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41343f943a1dbe09%3A0x30ab1bcb8c087154!2z0J_QtdGA0LXQutC-0L_RgdC60LDRjyDRg9C7LiwgMdCQLCDQotGD0LvQsCwg0KLRg9C70YzRgdC60LDRjyDQvtCx0LsuLCAzMDAwNDU!5e0!3m2!1sru!2sru!4v1537812497294"
                        width="100%"
                        height="100%"
                        id="myMap"
                        className="map"
                        display="initial"
                        position="relative"
                />
            </div>
        );
    }
}

export default Map;