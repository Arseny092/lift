import React, { Component } from 'react';
import '../form/form.css';

class MainForm extends React.Component {
    render() {
        return (
            <div className="form-container" id="form">
                <h1 className="form-header">Форма обратной связи</h1>
                <form method="post" name="contact-form" data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      className="form">
                    <input type="hidden" name="bot-field" />
                    <div className="form-name">
                        <label htmlFor="name">Имя</label>
                        <input type="text" name="name" id="name" className="form-input" required />
                    </div>
                    <div className="form-email">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" className="form-input" required />
                    </div>
                    <div className="form-message">
                        <label htmlFor="message">Желаемая услуга</label>
                        <textarea name="message" id="message" rows="6" className="form-input"></textarea>
                    </div>
                    <input type="submit" value="Отправить" className="form-submit" />
                </form>
            </div>
        );
    }
}

export default MainForm;