import React, { Component } from 'react';
import '../contacts/contacts.css';

class ContactList extends React.Component {
    render() {
        return (
            <div className="contacts" id="contacts">
                <div className="contacts-container">
                    <h1 className="contacts-header">Контакты</h1>
                    <p className="contacts-content">
                        <a href="tel:+79109403128">+7 (910) 940-31-28 </a><br/>
                        <a href="mailto:paramonovatula@mail.ru">paramonovatula@mail.ru</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default ContactList;