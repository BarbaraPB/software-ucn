import React, { Component } from 'react'
import '../styles/HomePage.css'
import fondo from'../img/sfFondo.jpg'
import logo from '../img/sfLogo.png'

export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            user: 'nulo'
        }
    }
    
    render() {
        return (
            <div className='menuAdmi'>
                <div className='headerHomeAdmi'>
                    <div className='logoMenuAdmi'>
                        <img src={logo}/>
                    </div>
                    
                    <div className='optionsMenuAdmi'>
                        <div className='addUser'>
                            <button>Agregar usuario</button>
                        </div>
                        
                        <div className='listUsers'>
                            <button>Lista de usuarios</button>
                        </div>

                        <div className='reports'>
                            <button>Gestion de reportes</button>
                        </div>
                    </div>

                    <div className='perfilMenuAdmi'>

                    </div>

                </div>

                <div className='windowAdmi'>
                    <h6>agregar ventana</h6>
                </div>

                <div className='pieMenuAdmi'>
                    <h7>aaaaaaaaaaa</h7>
                </div>

            </div>
        )
    }
}
