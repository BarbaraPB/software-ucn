import React, { Component } from 'react'
import '../styles/listarProducto.css'

export default class ListarProducto extends Component {

    constructor(props){
        super(props)
        this.state={
            comestibleONo:'comestible',
            colegioAseo:'colegio',
            codigo:'null',
            nombre:'null',
            marca:'null',
            precio:'null',
            stockactual:'null',
            stockminimo:'null',
            elavoracion:'null',
            vencimiento:'null'
        }
        this.onScroll={
            myScroll(){}
        }
        
    }
    onButtonClick = event => {
        console.log('Comestible o no: ',this.state.comestibleONo)
        console.log('Aseo u colegio: ',this.state.colegioAseo)
        console.log('Código: ',this.state.codigo)
        console.log('Nombre: ',this.state.nombre)
        console.log('Marca: ',this.state.marca)
        console.log('Precio: ',this.state.precio)
        console.log('Stock actual: ',this.state.stockactual)
        console.log('Stock minimo: ',this.state.stockminimo)
        console.log('Fecha elavoración: ',this.state.elavoracion)
        console.log('Fecha vencimiento: ',this.state.vencimiento)
        event.preventDefault()
    }
    updateComestibleONo = event => {
        this.setState({comestibleONo: event.target.value})
    }
    updateColegioAseo = event => {
        this.setState({colegioAseo: event.target.value})    
    }
    updateCodigo = event =>{
        this.setState({codigo: event.target.value})
    }
    updateNombre = event =>{
        this.setState({nombre: event.target.value})
    }
    updateMarca = event =>{
        this.setState({marca: event.target.value})
    }
    updatePrecio = event =>{
        this.setState({precio: event.target.value})
    }
    updateStockActual = event =>{
        this.setState({stockactual: event.target.value})
    }
    updateStockMinimo = event =>{
        this.setState({stockminimo: event.target.value})
    }
    updateElavoracion = event =>{
        this.setState({elavoracion: event.target.value})
    }
    updateVencimiento = event =>{
        this.setState({vencimiento: event.target.value})
    }
    setDefaultValues(){
        this.state.comestibleONo='comestible'
        this.state.colegioAseo='colegio'
        
    }

    /*=====================================================*/
    
    
    
    
    /*=====================================================*/



    render() {
        if (this.state.comestibleONo == 'comestible'){
        this.setDefaultValues()
        return (
            <div className='listarBody'>
                
                <div className='listarTop'><h1>HERE'S THE TOP</h1></div>




                <div className='listarMiddle'>
                    
                    <div className='listarMiddleSubRow'></div>

                    <div className='listarMiddleSubColumn'>
                        
                            <form id="holi">
                            <div id="navbar"
                                 onScroll='navbar'>
                                <h2>Hola munde</h2>
                                
                            </div>
                            </form>
                    </div>

                </div>




                <div className='listarBottom'><h5>Here's the bottom</h5></div>

            </div>
        )
        }
        
    }
}