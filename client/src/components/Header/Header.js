import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from './assets/blacklogo.png';

class Header extends Component {
    renderContent(){
        switch(this.props.auth) {
            case null:
                return null;
            case false:
                return (<li><a href="/auth/google">Sign Up</a></li>)
            default:
                return <li><a href="/api/logout">Logout</a></li>
        }
    }

    render() {
        return (
            <nav>
                <div >
                    <Link 
                        to={this.props.auth ? '/dashboard' : '/'} 
                    >
                        <img className="brand-logo" src={logo} alt="Logo" />
                    </Link>
                    <ul >
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

export default connect(mapStateToProps)(Header)