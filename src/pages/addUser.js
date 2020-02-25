import React, { Component } from 'react'
import '../styles/addUser.css'
import fondoSF from '../img/fondo.jpg';

import Header from '../components/Header';

export default class AddUser extends Component {
    render() {
        return (
            <div className='perfilNewUser'>

                <div className='head'>
                    <h7>.</h7>
                </div>
                
                <div className='datosUser'>
                    <div className='left-datos'>
                        <div className='foto'>
                            <h6>Perfil</h6>
                            <h6>FOTO</h6>
                        </div>
                        <div className='datos-input'>
                            <h6>Rut</h6>
                            <input 
                                type='text'
                                value='rut'
                            />
                        </div>
                    </div>
                        <div className='rigth-datos'>
                            <div className='datos-input'>
                                <h6>Nombres</h6>
                                <input className='nombresNewUser'
                                    type='text'
                                    value='Nombres'
                                />
                            <div/>
                            <div className='datos-input'>
                                <h6>Apellidos</h6>
                                <input className='apellidosNewUser'
                                    type='text'
                                    value='Apellidos'
                                />
                            </div>
                            <div className='datos-input'>
                                <h6>Email</h6>
                                <input className='emailNewUser'
                                    type='text'
                                    value='Email'
                                />
                            <div/>
                            <div className='datos-input'>
                                <h6>Telefono</h6>
                                <input className='telefonoNewUser'
                                    type='text'
                                    value='Telefono'
                                />
                            </div>
                            <div className='datos-input'>
                                <h6>Tipo</h6>
                                <input className='tipoNewUser'
                                    type=''
                                    value='ADMI/VENTAS/INVENT'
                                />
                            </div>
                            <div className='buttonAddUser'>
                                <button>ADD USER</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
