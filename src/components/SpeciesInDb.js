import React, {Component} from 'react';

//Importar nuestro componente
import Specie from './Specie';

export class SpeciesInDb extends Component{
    constructor(){
        super()
        this.state ={
            speciesList : []
        }
    }
    
    //Montaje
    componentDidMount(){
        fetch('/api/species') // despues hay que cambiarlos por la api de species
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(species =>{
            console.log(species)
            this.setState({speciesList: species.species}) // se debe cambiar data por species
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
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800 titulo">Especies</h6>
                        </div>
                        <div className="card-body fondoCaja">

                            <div  className="row">
                                {
                                    //console.log(this.state.speciesList)
                                    this.state.speciesList.map((specie,index)=>{
                                        return  <Specie  {...specie}  key={index+"specie"} />
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
export default SpeciesInDb;
