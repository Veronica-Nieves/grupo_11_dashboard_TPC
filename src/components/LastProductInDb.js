import React, { Component } from 'react'

import image from '../assets/images/admin.png';


export class LastProductInDb extends Component {
    constructor(){
        super()
        this.state ={
            LastProduct : []
        }
    }
    
    // Al montar el componente extraemos el ultimo producto desde url: /api/products
    componentDidMount(){
        fetch('/api/products') // aqui es necesario cambiar por la api de productos
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            console.log(products)
            this.setState({LastProduct: products.products})
            console.log("Last Product")
            console.log(this.state.LastProduct)
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
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={image} alt=" The Pets Club "/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalles</a>
                </div>
            </div>
            </div>
        )
    }
}

export default LastProductInDb