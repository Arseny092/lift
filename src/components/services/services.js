import React, { Component } from 'react';
import '../services/services.css';

class ServiceList extends React.Component {
    render() {
        return (
            <div className="service" id="services">
                <h1 className="service-header">Услуги</h1>
                <div className="service-container">
                    <div className="service-elem">
                        <h3 className="service-elem-header">Монтаж лифтов</h3>
                        <p>Весь спектр работ по комплексному монтажу лифтов любой сложности.
                        </p>
                    </div>
                    <div className="service-elem">
                        <h3 className="service-elem-header">Обслуживание лифтов</h3>
                        <p>Возьмем на обслуживание уже смонтированные (нами или сторонней организацией) лифты. Качественно, недорого.
                        </p>
                    </div>
                    <div className="service-elem">
                        <h3 className="service-elem-header">Комплексное консультирование</h3>
                        <p>Имеем опыт в реализации сложных и нестандартных объектов. Поможем, проконсультируем, реализуем.
                        </p>
                    </div>
                </div>
                <a href="#form" className="service-btn">Оставить заявку</a>
            </div>
        );
    }
}

export default ServiceList;