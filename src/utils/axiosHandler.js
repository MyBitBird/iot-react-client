import React,{Component} from 'react'
import axios from 'axios'
import Aux from './Auxilary'
import { Snackbar, LinearProgress} from '@material-ui/core'

const axiosHandler = (WrappedComponent)=>{
    return class extends Component{
        state={
            isLoading: false,
            error: null
        }

        componentDidMount(){
           
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ isLoading: true });
                return req;
            }, error => error);

            this.resInterceptor = axios.interceptors.response.use(response => {
                this.setState({ isLoading: false });
                return response;

            }
                , error => {
                    let message = error.message;
                    if (error.response != null) {
                        switch (error.response.status) {
                            case 502:
                                message = error.response.data;
                                break;
                            case 401:
                                message = "Incorrect Username or Password!";
                                break;
                            case 403:
                                message = "Access Denied!";
                                break;
                            case 400:
                                //.Net core FluentValidator output
                                message = "Bad Request: " + Object.entries(error.response.data).map(x=>x[1]).map(error=> `${error}`);
                                break;
                            case 404:
                                message = "Network Error";
                                break;
                            case 500:
                                message = "Oops! Server Error";
                                break;
                            default:
                                message = "Undefined Erro: " + error.response;
                                break;
                        }
                    }

                    this.setState({ isLoading: false, error: message });
                    return Promise.reject(error);
                });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render()
        {
            const message=
                <Aux>
                    <span >{this.state.error}</span>
                    {this.state.isLoading ? <LinearProgress style={{width:300}} color="secondary" variant="query" /> : null}
                </Aux>

            return(
                <Aux>
                    <Snackbar 
                        autoHideDuration={3000}
                        onClose={() => this.setState({ error: null })}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={this.state.error != null || this.state.isLoading}
                        message={message} />
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default axiosHandler;