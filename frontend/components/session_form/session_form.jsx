import React from 'react';

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

    //handleDemoSubmit function, trigger with a DemoUser button (only render if formType is login) this should be a user from db seeds
    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {
            email: '',
            password: ''
        }
        this.props.processForm(user)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
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
                <button className="demo-submit" onClick={this.handleDemoSubmit}>Demo</button>
            </div>  
        }

        let nameInputs;
        if (this.props.formType === 'Sign Up') {
            nameInputs =
            <div>
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
            </div>
        }

        return (
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    <h3>{this.props.message}</h3>
                    <br />
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
                        {}
                        {nameInputs}
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;