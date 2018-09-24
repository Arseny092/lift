import React, { Component } from 'react';
import '../tech/tech.css';

class TechList extends React.Component {
    render() {
        return (
            <div className="tech" id="techs">
                <h1 className="tech-header">Наши партнеры</h1>
                <div className="tech-container">
                    <div className="tech-elem tech-elem_1">
                    </div>
                    <div className="tech-elem tech-elem_2">
                    </div>
                    <div className="tech-elem tech-elem_3">
                    </div>
                </div>
            </div>
        );
    }
}

export default TechList;