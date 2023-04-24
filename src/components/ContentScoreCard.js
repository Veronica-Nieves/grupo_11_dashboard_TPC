import React, {Component} from 'react';

//Importar nuestro componente
import ScoreCard from './ScoreCard';


/* ---------- Definición de Scores de prueba -------- */
let products = {
    color:   "primary",
    name: "Productos",
    valor: 0,
    icono: "fas fa-film",
    }

let species ={
    color:   "primary",
    name: "Especies",
    valor: 0,
    icono: "fas fa-award",
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
                scores: [{
                    color: "primary",
                    name: "Productos",
                    valor: 1,
                    icono: "fas fa.shield-dog",
                },
                {
                    color: "primary",
                    name: "Especies",
                    valor: 2,
                    icono: "fas fa-award",
                },
                {
                    color: "primary",
                    name: "Usuarios",
                    valor: 3,
                    icono: "fas fa-user",
                    }
            ]}
    }

    
    //Montaje: Llamada de las api para consumir datos
    
    componentDidMount(){
        fetch('/api/genres')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(genres =>{
            this.setState({genresCount: genres.meta.total})
            
        
            // solo para comprobar que si trae los datos
            console.log("Extraemos datos de la Api: ")
            // console.log(this.state.genresCount) 
            console.log(this.state.scores[0].valor) 
        })
        .catch(error => console.log(error))
    }
    

    


    render(){
    return(
        <React.Fragment>

        {/*<!-- Renderizamos el contenido de las 3 Score Card -->*/}
        <div className="row">
            {
                this.state.scores.map((score,index)=>{
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
