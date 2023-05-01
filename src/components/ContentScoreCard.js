import React, {Component} from 'react';

//Importar nuestro componentes
import ScoreCard from './ScoreCard';

//Montamos componente
class ContentScoreCard extends Component{
    constructor(){
        super()
        this.state ={
                scores: []
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
            let apiScores = []
            let productsScore = {
                color: "success",
                name: "Productos",
                valor: products.count,
                icono: "fas fa-fw fa-box-open",
            }
            apiScores.push(productsScore)



        /* Extraemos Score de Species */
        fetch('/api/species')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(species =>{
                let speciesScore = {
                    color: "success",
                    name: "Especies",
                    valor: species.count,
                    icono: "fas fa-fw fa-dog",
                }
                apiScores.push(speciesScore)
                


        /* Extraemos Score de Usuarios */
        fetch('/api/users')
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(users =>{
                let usersScore = {
                    color: "success",
                    name: "Usuarios",
                    valor: users.count,
                    icono: "fas fa-user",
                }
                apiScores.push(usersScore)
                this.setState({
                    scores: apiScores
                })
                //console.log("NUEVOS scores")
                //console.log(this.state.scores)
        })
        })
        })
        .catch(error => console.log(error))
    }
    
    render(){
    return(
        <React.Fragment>
        <div className="row">
            {
            this.state.scores.map((score,index)=>{
                return <ScoreCard  {...score}  key= {index}/>
            })
            }      
        </div>
        </React.Fragment>
    )
    }
}
export default ContentScoreCard;
