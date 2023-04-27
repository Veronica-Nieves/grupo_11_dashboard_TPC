import React, { Component } from 'react'

import image from '../assets/images/product.png';

export class LastProductInDb extends Component {
    constructor(){
        super()
        this.state ={
            LastProduct : [],
        }
    }
    
    // Al montar el componente extraemos el ultimo producto desde url: /api/products
    componentDidMount(){
        fetch('/api/products') // aqui es necesario cambiar por la api de productos
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            /* Identificamos el Id del ultimo producto */
            let lastId = 0;
            products.products.map((product) =>{
                if (product.id > lastId){
                    lastId = product.id
                }
            })
            //console.log(lastId)
            /* Ingresamos al detalle del ultimo producto */
            fetch('/api/products/'+lastId.toString()) 
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(lastProduct =>{
                this.setState({LastProduct: lastProduct.product})
                console.log(this.state.LastProduct)
            })
            /* Extraemos la imagen */

        })
        .catch(error => console.log(error))

    }



    render() {
        return (
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 product-image" style={{width: 40 +'rem'}} src={image} alt=" The Pets Club "/>
                    </div>
                    <p className="m-0 font-weight-bold text-gray-800">{this.state.LastProduct.name}</p>
                    <p>{this.state.LastProduct.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalles</a>
                </div>
            </div>
            </div>
        )
    }
}

export default LastProductInDb