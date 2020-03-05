import React, { Component } from 'react'
import '../styles/LoginPage.css'
import logo from '../img/logoSF.png'
import feria from '../img/feria.png'
import {Link} from 'react-router-dom'

export default class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'noName', 
            pass:'noPass',
        }
    }
    onButtonClick = event => {
        console.log(this.state.name,this.state.pass)
        event.preventDefault()
    }
    updatePass = event =>{
        this.setState({pass: event.target.value })
    }
    updateUser = event => {
        this.setState({name: event.target.value})
    }
    render() {
        return (
            <div className='login-container'>
                <div className='login-left'>
                    <img src={feria} alt='Estamos de feria!'/>
                </div>
                <div className='login-right'>
                    <div className='headerLogin'>
                        <img src={logo}/>
                    </div>
                    <div className='formContainer'>
                        <form  onSubmit={event => this.onButtonClick(event)}>
                            <div className='textLogin'>
                                <h1>LOGIN</h1>{/*comentario*/}
                            </div>
                            <div className='rut'>
                                <h4>Rut</h4>
                                <input 
                                    type='text' 
                                    placeholder='12.345.678-9' 
                                    onChange={event => this.updateUser(event)}
                                />
                            </div>
                            <div className='pass'>
                                <h4>Constraseña</h4>
                                <input 
                                    type='password' 
                                    placeholder='********' 
                                    onChange={event => this.updatePass(event)}
                                />
                            </div>
                            <div className='buttonsSesion'>
                                <Link to='/home'>
                                    <input className='buttonLogin' 
                                        type='submit' 
                                        value='Iniciar sesion'
                                    />
                                </Link>
                                <input className='buttonRecoverPass'
                                    type='submit' 
                                    value='Recuperar contraseña'
                                /> 
                            </div>
                        </form>
                    </div>
                    <div className='firmaContainer'>
                        <p>Derechos reservados de Cuapapiya</p>
                    </div>
                </div>
            </div>
        )
    }
}
 