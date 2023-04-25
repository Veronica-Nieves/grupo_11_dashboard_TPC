import React, {Component} from 'react';

//Importar nuestro componente
import ScoreCard from './ScoreCard';


/* ---------- Definición de Scores de prueba -------- */
let products = {
    color:   "primary",
    name: "Productos",
    valor: 0,
    icono: "fas fa-fw fa-box-open",
    }

let species ={
    color:   "primary",
    name: "Especies",
    valor: 0,
    icono: "fas fa-fw fa-dog",
    }

let users = {
    color:   "primary",
    name: "Usuarios",
    valor: 0,
    icono: "fas fa-user",
    }

let scoreExample = [products, species, users];
/* ----------Fin definicion de scores de ejemplo ---------*/


class ContentScoreCard extends Component{
    constructor(){
        super()
        this.state ={
                genresCount: "",
                scores: [],
                productsScore: {
                    color: "success",
                    name: "Productos",
                    valor: 1,
                    icono: "fas fa-fw fa-box-open",
                },
                speciesScore: {
                    color: "success",
                    name: "Especies",
                    valor: 2,
                    icono: "fas fa-fw fa-dog",
                },
                usersScore:{
                    color: "success",
                    name: "Usuarios",
                    valor: 3,
                    icono: "fas fa-user",
                    }
            }
    }

    
    /* Montaje: Llamada de las api para consumir datos */
    componentDidMount(){
        /* Estraemos Score de Productos */
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            this.setState({productsScore: products.count})
        /* Extraemos Score de Species */
        fetch('/api/species')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(species =>{
                this.setState({speciesScore: species.count})
        /* Extraemos Score de Usuarios */
        fetch('/api/users')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(users =>{
                this.setState({usersScore: users.count})
                this.state.scores = [this.state.productsScore, this.state.speciesScore, this.state.usersScore];
        })
        })
        })
        .catch(error => console.log(error))
    }

    

    


    render(){
    return(
        <React.Fragment>

        {/*<!-- Renderizamos el contenido de las 3 Score Card -->*/}
        <div className="row">
            {
                scoreExample.map((score,index)=>{
                    return <ScoreCard  {...score}  key= {index+"-score"}/>
                })
            }      
        </div>
        {/*<!-- Fin de renderizar las score cards-->*/}

        </React.Fragment>
    )
    }
}
export default ContentScoreCard;
