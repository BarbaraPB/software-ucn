import React, { Component } from 'react'
import '../styles/HomePage.css'
import logo from '../img/sfLogo.png'
import addUser from './AddUser'

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
                    <div className='logoMenuAdmi'>
                        <img src={logo}/>
                    </div>
                    
                    <div className='optionsMenuAdmi'>
                        <div className='a1'>
                            <ul className='opAdmi'>
                                <li><a href='addUser'>nuevo usuario</a>
                                    <ul>
                                        <li><a href='holaa'>1</a>
                                            <ul>
                                                <li><a href='xdddd'></a>

                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
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

                <div className='windowAdmi' style={{flex:4}}>
                    <addUser/>
                </div>

            </div>
        )
    }
}
