import React, {Component} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";

const withLoader = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                request: null
            };

            axios.interceptors.request.use(response => {
                this.setState({request: true});
                return response;
            });

            axios.interceptors.response.use(response => {
                this.setState({request: false});
                return response;
            }, error => {
                this.setState({request: false});
                return error;
            });
        }
        render() {
            return (
                <>
                    <WrappedComponent {...this.props} />
                    <Backdrop show={this.state.request}/>
                </>
            )
        }
    }
};

export default withLoader;