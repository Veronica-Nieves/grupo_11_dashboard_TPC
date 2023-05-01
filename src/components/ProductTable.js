/* --- Componente que muestra el listado de productos --- */
import React, {Component} from 'react';

//Importar nuestro componente
import ProductRowDetail from './ProductRowDetail';

class ProductTable extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    
    // Al montar el componente extraemos los datos de la api con url: /api/products
    componentDidMount(){
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(products)
            this.setState({products: products.products})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            <div className="table-wrap">
                <h1 className="h3 text-gray-800 tatle-title">Catálogo de productos</h1>
                
                {/*<!-- Tabla de productos -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Sku</th>
                                        <th>Nombre</th>
                                        <th>Especie</th>
                                        <th>Categoría</th>
                                        <th>Precio</th>
                                        <th>Inventario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        //console.log(this.state.products)
                                        this.state.products.map((product,index)=>{
                                            return <ProductRowDetail  {...product} key={index}  />
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Sku</th>
                                        <th>Nombre</th>
                                        <th>Especie</th>
                                        <th>Categoría</th>
                                        <th>Precio</th>
                                        <th>Inventario</th>
                                    </tr>
                                </tfoot>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
    )
    }
}
export default ProductTable;
