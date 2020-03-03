import React from 'react';
import { withRouter } from 'react-router-dom';

class RouteModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        let stringCoordinates = JSON.stringify(this.props.coordinates)

        e.preventDefault();
        const route = ({
            title: this.state.title,
            sport: this.props.sport,
            coordinates: stringCoordinates
        });
        this.props.createRoute(route)
            .then(() => this.props.history.push("/routes/"));
    }

    render() {
        return (
            <div className='modal-background'>
                <form className='save-route-form' onSubmit={this.handleSubmit}>
                    <div className='save-route-header'>
                        <h1>Save</h1>
                    </div>
                    <div className='save-route-main'>
                        <div className='save-route-content'>
                            <p className='save-route-text'>Enter a name for your route below. On the next page you'll be able to see your route.</p>
                                <br/>
                            <label className='save-route-text'>
                                Route Name (required)
                                <br/>
                                <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    className="save-route-input"
                                />
                            </label>
                                <br/>
                        </div>
                        <div className='save-route-buttons'>
                            <button type="button" onClick={() => this.props.toggleModal()}>Cancel</button>
                            <input className="save-route-submit" type="submit" value="Save" />
                        </div>
                    </div>
                </form>    
            </div>
        )
    }
}

export default withRouter(RouteModal);