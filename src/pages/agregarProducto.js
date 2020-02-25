import React, { Component } from 'react'
import '../styles/agregarProducto.css'

export default class AgregarProducto extends Component {

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


    render() {
        if (this.state.comestibleONo == 'comestible'){
        this.setDefaultValues()
        return (
            <div className='inventoryBody'>

                <div className='inventoryTop'></div>

                <div className='inventoryMiddle'>

                    <div className='inventoryMiddleSubRow'></div>

                    <div className='inventoryMiddleSubColumn'>

                        <form onSubmit={event => this.onButtonClick(event)} >

                            <div className ='inventoryMiddleSubRowFila  '>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Código</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='código'
                                        onChange={event => this.updateCodigo(event)}
                                    ></input>
                                </div>
                                
                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Nombre</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='nombre'
                                        onChange={event => this.updateNombre(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Marca</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='marca'
                                        onChange={event => this.updateMarca(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Precio</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='precio'
                                        onChange={event => this.updatePrecio(event)}
                                    ></input>
                                </div>

                            </div>

                            <div className ='inventoryMiddleSubRowFila'>
                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Stock actual</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='-'
                                        onChange={event => this.updateStockActual(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Stock minimo</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='-'
                                        onChange={event => this.updateStockMinimo(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Seleccione tipo</h4>
                                    <select name = 'simpleSelect'
                                            onChange={event => this.updateComestibleONo(event)}>
                                        <option value="comestible">Comestible</option>
                                        <option value="nocomestible">No comestible</option>
                                    </select>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInvisible'></div>
                            </div>

                            <div className ='inventoryMiddleSubRowFila'>
                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Fecha de elaboración</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='-'
                                        onChange={event => this.updateElavoracion(event)}
                                    ></input>
                                </div>
                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Fecha de vencimiento</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='-'
                                        onChange={event => this.updateVencimiento(event)}
                                    ></input>
                                </div>
                                <div className = 'inventoryMiddleSubColumnInvisible'>
                                        <input
                                        className='simpleButton' 
                                        type='submit' 
                                        value='Agregar +'/>
                                </div>
                                <div className = 'inventoryMiddleSubColumnInvisible'></div>
                            </div>
                            
                            <div className ='inventoryMiddleSubRowFila'>
                                    <div className = 'inventoryMiddleSubColumnInput'></div>
                                    <div className = 'inventoryMiddleSubColumnInput'></div>
                                    <div className = 'inventoryMiddleSubColumnInput'></div>
                            </div>

                        </form>

                    </div>

                </div>

                <div className='inventoryBottom'></div>

            </div>
        )
        }
        else{
        
        return (
            <div className='inventoryBody'>

                <div className='inventoryTop'></div>

                <div className='inventoryMiddle'>

                    <div className='inventoryMiddleSubRow'></div>

                    <div className='inventoryMiddleSubColumn'>

                        <form onSubmit={event => this.onButtonClick(event)} >

                            <div className ='inventoryMiddleSubRowFila  '>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Código</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='código'
                                    ></input>
                                </div>
                                
                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Nombre</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='nombre'
                                        onChange={event => this.updateNombre(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Marca</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='marca'
                                        onChange={event => this.updateMarca(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Precio</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='precio'
                                        onChange={event => this.updatePrecio(event)}
                                    ></input>
                                </div>

                            </div>

                            <div className ='inventoryMiddleSubRowFila'>
                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Stock actual</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='-'
                                        onChange={event => this.updateStockActual(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Stock minimo</h4>
                                    <input
                                        className='simpleInput'
                                        type='text'
                                        placeholder='-'
                                        onChange={event => this.updateStockMinimo(event)}
                                    ></input>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Seleccione tipo</h4>
                                    <select name = 'simpleSelect'
                                            onChange={event => this.updateComestibleONo(event)}>
                                        <option value="comestible">Comestible</option>
                                        <option value="nocomestible">No comestible</option>
                                    </select>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInvisible'></div>
                            </div>

                            <div className ='inventoryMiddleSubRowFila'>

                                <div className = 'inventoryMiddleSubColumnInput'>
                                    <h4>Tipo</h4>
                                    <select name = 'simpleSelect'
                                            onChange={event => this.updateColegioAseo(event)}>
                                        <option value="colegio">Colegio</option>
                                        <option value="aseo">Aseo</option>
                                    </select>
                                </div>

                                <div className = 'inventoryMiddleSubColumnInvisible'></div>
                                <div className = 'inventoryMiddleSubColumnInvisible'>
                                        <input
                                        className='simpleButton' 
                                        type='submit' 
                                        value='Agregar +'/>
                                </div>
                                <div className = 'inventoryMiddleSubColumnInvisible'></div>
                            </div>
                            
                            <div className ='inventoryMiddleSubRowFila'>
                                    <div className = 'inventoryMiddleSubColumnInput'></div>
                                    <div className = 'inventoryMiddleSubColumnInput'></div>
                                    <div className = 'inventoryMiddleSubColumnInput'></div>
                            </div>

                        </form>

                    </div>

                </div>

                <div className='inventoryBottom'></div>

            </div>
        )
        }
    }
}