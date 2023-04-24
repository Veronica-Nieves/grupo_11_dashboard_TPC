/* --- Componente que muestra el listado de productos --- */
import React, {Component} from 'react';

//Importar nuestro componente
import MovieList from './MovieList';
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
        fetch('/api/products') // aqui es necesario cambiar por la api de productos
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            console.log(products)
            // aqui es necesario cambiar por products.products en lugar de products.data
            this.setState({products: products.products})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            <h1 className="h3 mb-2 text-gray-800">Catálogo de productos</h1>
            
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


    
    </React.Fragment>
    )
    }
}
export default ProductTable;
