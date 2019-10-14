import React, { Component } from 'react'
import '../styles/HomePage.css'
import fondo from'../img/sfFondo.jpg'

export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            user: 'nulo'
        }
    }
    
    render() {
        return (
            <div className='home'>
                <div className='headerHomeAdmi'>
                    <h1>Santa Feria</h1>
                    <h3>ADMINISTRACION</h3>
                </div>
                <div className='menuAdm'>
                    <div className='optionsHomeAdmi'>
                        <div className='addUser'>
                            <input 
                                type='submite'
                                value='Agregar usuario'
                            />
                        </div>
                        
                        <div className='listUsers'>
                            <input 
                                type='submite'
                                value='Lista de usuarios'
                            />
                        </div>

                        <div className='reports'>
                            <input 
                                type='submit'
                                value='Gestion de reportes'
                            />
                        </div>
                    </div>

                    <div className='windows'>

                    </div>

                </div>

            </div>
        )
    }
}
