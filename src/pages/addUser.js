import React, { Component } from 'react'
import '../styles/addUser.css'

export default class addUser extends Component {
    render() {
        return (
            <div className='perfilNewUser'>
                <div className='head'>
                    <h7>.</h7>
                </div>
                <div className='fotoPerfil'>
                    <div className='foto'>
                        <h6>FOTO</h6>
                        <h6>cuadro foto</h6>
                    </div>
                    <div className='rut'>
                        <h6>Rut</h6>
                        <input 
                            type='text'
                            value='rut'
                        />
                    </div>
                </div>

                <div className='datosPerfil'>
                    <div className='datos1Pefil'>
                        <input className='nombresNewUser'
                            type='text'
                            value='Nombres'
                        />
                        <input className='apellidosNewUser'
                            type='text'
                            value='Nombres'
                        />
                    </div>
                    <div className='datos2Perfil'>
                        <input className='emailNewUser'
                            type='text'
                            value='Nombres'
                        />
                        <input className='telefonoNewUser'
                            type='text'
                            value='Nombres'
                        />
                        <input className='tipoNewUser'
                            type=''
                            value='Nombres'
                        />
                    </div>
                    <div className='buttonAddUser'>
                        <button>ADD USER</button>                         />
                    </div>
                </div>
            </div>
        )
    }
}
