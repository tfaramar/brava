import React from 'react';

import { camelToSnakeCase } from '../../util/helper_functions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.formType === 'Log In') {
            this.state = {
                email: '',
                password: ''
            }
        } else {
            this.state = {
                email: '',
                password: '',
                firstName: '',
                lastName: ''
            }
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {
            email: 'tfaramar@example.com',
            password: 'password'
        }
        this.props.processForm(user)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        const snakeCaseUser = Object.fromEntries(
            Object.entries(user).map(([k, v]) => [camelToSnakeCase(k), v])
        );
        this.props.processForm(snakeCaseUser)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className={this.props.formType === "Sign Up" ? "signup-error" : "login-error"} key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let demoButton;
        if (this.props.formType === 'Log In') {
            demoButton = 
            <div>
                <br />
                <button className="demo-submit" type="button" onClick={this.handleDemoSubmit}>Demo</button>
            </div>  
        }

        let nameInputs;
        if (this.props.formType === 'Sign Up') {
            nameInputs =
            <div className="added-inputs">
                <input type="text"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.update('firstName')}
                    className="login-input"
                />
                <br />
                <input type="text"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.update('lastName')}
                    className="login-input"
                />
                <br />
            </div>
        }

        return (
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    <h1 className="login-form-message">{this.props.message}</h1>
                    {this.renderErrors()}
                    <div className="login-form">
                        {demoButton}
                        <br />
                        <input type="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        <br />
                        <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        <br />
                        {nameInputs}
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;