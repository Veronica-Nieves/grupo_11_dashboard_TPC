/* --- Componente que muestra la tabla de usuarios --- */
import React, {Component} from 'react';

//Importar nuestro componente
import UserRowDetail from './UserRowDetail';

class UserTable extends Component{
    constructor(){
        super()
        this.state ={
            users : []
        }
    }
    
    // Al montar el componente extraemos los datos de la api con url: /api/users
    componentDidMount(){
        fetch('/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users =>{
            // console.log(users)
            this.setState({users: users.users})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            <h1 className="h3 mb-2 text-gray-800">Directorio de Usuarios</h1>
            
            {/*<!-- Tabla de uuarios -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    //console.log(this.state.products)
                                    this.state.users.map((user,index)=>{
                                        return <UserRowDetail  {...user} key={index}  />
                                    })
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
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
export default UserTable;
