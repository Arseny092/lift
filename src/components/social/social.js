import React, { Component } from 'react';
import '../social/social.css';

class Social extends React.Component {
    render() {
        return (
            <div className="social">
                <a className="social__item social__item--insta" href="https://www.instagram.com/ep_prod/ "></a>
                <a className="social__item social__item--fb" href="https://www.facebook.com/epproductionmoscow/ "></a>
                <a className="social__item social__item--vk" href="https://vk.com/ep_prod "></a>
            </div>
        );
    }
}

export default Social;