import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class CarouselMain extends React.Component {
    render() {
        return (
            <Carousel showThumbs={false}
                      axis={"horizontal"}
                      dynamicHeight={true}
                      infiniteLoop={true}
                      swipeable={true}
            >
                <div>
                    <picture>
                        <source media="(min-width: 960px)" srcSet="/static/3.jpg" />
                            <source media="(min-width: 620px)" srcSet="/static/3.jpg" />
                                <img src="/static/3.jpg" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source media="(min-width: 960px)" srcSet="/static/2.jpg" />
                        <source media="(min-width: 620px)" srcSet="/static/2.jpg" />
                        <img src="/static/2.jpg" />
                    </picture>
                </div>
                <div>
                    <picture>
                        <source media="(min-width: 960px)" srcSet="/static/1.jpg" />
                        <source media="(min-width: 620px)" srcSet="/static/1.jpg" />
                        <img src="/static/1.jpg" />
                    </picture>
                </div>
            </Carousel>
        );
    }
}

export default CarouselMain;