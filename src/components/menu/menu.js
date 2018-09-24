import React from 'react'
import Link from 'gatsby-link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import '../menu/menu.css'

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if(!this.dropdownMenu.contains(event.target)) {

            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }


    render () {
        return (
            <div className="menu-icon">
                <div onClick={this.showMenu}>
                    {this.state.showMenu
                        ? <FontAwesomeIcon icon={faTimes} size="lg"/>
                        : <FontAwesomeIcon icon={faBars} size="lg"/>

                    }
                </div>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <ul className="menu-nav">
                                    <li>
                                        <Link to="/about">О нас</Link>
                                        <Link to="/blog">Блог</Link>
                                    </li>
                                </ul>
                            </div>

                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default Menu;