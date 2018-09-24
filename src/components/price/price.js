import React, { Component } from 'react';
import '../price/price.css';

class PriceList extends React.Component {
    render() {
        return (
            <div className="price" id="prices">
                <h1 className="price-header">Дополнительные услуги</h1>
                <div className="price-container">
                    <table className="price-table">
                        <tbody>
                        <tr>
                            <td><strong>Услуга</strong></td>
                            <td><strong>Стоимость</strong></td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Час записи</td>
                            <td>800 Р.</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Сведение вокала с минусом</td>
                            <td>от 1000 Р.</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Сведение мультитрека</td>
                            <td>от 3000 Р.</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Мастеринг</td>
                            <td>от 500 Р.</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Тюнинг вокала (1 дорожка)</td>
                            <td>от 500 Р.</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Hip-Hop минусовка на заказ (эксклюзивные права)</td>
                            <td>от 3000 Р.</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Гострайтинг</td>
                            <td>от 2000 Р.</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Аренда студии без услуг звукорежиссера</td>
                            <td>от 400 Р./час</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Съемка видеоклипов</td>
                            <td>По договоренности</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PriceList;