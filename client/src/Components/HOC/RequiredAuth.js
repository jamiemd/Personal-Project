import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
    class RequireAuthentication extends Component {
        componentWillMount() {
            console.log('signed in', this.props.authenticated);
            if (!this.props.authenticated) {
                this.props.history.push('/signin');
            }
        }

        render() {
            return (
                <div>
                    {this.props.authenticated ? (
                        <ComposedComponent />
                    ) : null}
                </div>
            );
        }
    }

    const mapStateToProps = state => {
        return {
            authenticated: state.auth.authenticated
        };
    };

    return connect(mapStateToProps)(RequireAuthentication);
};