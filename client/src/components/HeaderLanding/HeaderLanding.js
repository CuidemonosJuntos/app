import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeaderLanding.css';
import logo from './assets/whitelogo.png';

class HeaderLanding extends Component {
    renderContent(){
        switch(this.props.auth) {
            case null:
                return null;
            case false:
                return (<li><a href="/auth/google">Regístrate</a></li>)
            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }

    render() {
        return (
            <nav>
                <div className="row">
                    <Link 
                        to={this.props.auth ? '/dashboard' : '/'} 
                    >
                        <img className="brand-logo" src={logo} alt="Logo" />
                    </Link>
                    <ul className="main-nav">
                        <li><a href="#">Quiénes Somos</a></li>
                        <li><a href="#">Lo que ofrecemos</a></li>
                        <li><a href="#">Planes</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li>{this.renderContent()}</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(HeaderLanding)