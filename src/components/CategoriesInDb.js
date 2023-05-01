import React, {Component} from 'react';

//Importar nuestro componente
import Category from './Category';

export class CategoriesInDb extends Component{
    constructor(){
        super()
        this.state ={
            categoriesList : []
        }
    }
    
    //Montaje
    componentDidMount(){
        fetch('/api/categories') 
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(categories =>{
            this.setState({categoriesList: categories.categories}) // se debe cambiar data por species
        })
        .catch(error => console.log(error))

    }


    fondo(){
        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- Species in DB -->*/}
                {/*<div className="col-lg-6 mb-4">*/}	
                <div className="col-lg-6 mb-4 card-cat">				
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800 titulo">Categorias</h6>
                        </div>
                        <div className="card-body fondoCaja">

                            <div  className="row">
                                {
                                    //console.log(this.state.speciesList)
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  {...category}  key={category+"specie"} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default CategoriesInDb;
