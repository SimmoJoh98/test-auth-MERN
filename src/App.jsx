import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


class App extends Component {
    constructor(){
        super()
        this.state = {
            FullName:'',
            Username:'',
            Password:'',
            Email:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            FullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            Username:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            Password:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            Email:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        
        const registered = {
            FullName: this.state.FullName,
            Username: this.state.Username,
            Password: this.state.Password,
            Email: this.state.Email
        }

        axios.post('http://localhost:3001/app/signup', registered)
        .then(res => {
            console.log(res.data)
        })
        this.setState({
            FullName: '',
            Username: '',
            Password: '',
            Email: ''
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input className="form-control form-group" type="text" placeholder="Full Name" onChange={this.changeFullName} value={this.state.FullName} />
                            <input className="form-control form-group" type="text" placeholder="Username" onChange={this.changeUsername} value={this.state.Username}  />
                            <input className="form-control form-group" type="password" placeholder="Password" onChange={this.changePassword} value={this.state.Password}  />
                            <input className="form-control form-group" type="text" placeholder="Email" onChange={this.changeEmail} value={this.state.Email}  />
                            <input type="submit" className="btn btn-danger btn-block" value='submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;