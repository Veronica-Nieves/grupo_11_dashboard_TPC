import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import image from '../assets/images/logo.png'

/* Importamos componentes */
import ContentWrapper from './ContentWrapper';
import ProductTable from './ProductTable';
import SpeciesInDb from './SpeciesInDb';
import CategoriesInDb from './CategoriesInDb';
import UserTable from './UserTable';


/*Definimos componente SlideBar*/
function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50 rounded-logo" src={image} alt="The Pets Club"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-paw"></i>
                        <span className="text-center">The Pets Club </span>
                        <i className="fas fa-fw fa-paw"></i>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>


                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Secciones</div>

                {/*<!-- Nav Item - Productos -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/ProductTable">
                        <i className="fas fa-fw fa-box-open"></i>
                        <span>Productos</span>
                    </Link>
                </li>


                {/*<!-- Nav Item - Especies -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/SpeciesInDb">
                        <i className="fas fa-fw fa-dog"></i>
                        <span>Especies</span>
                    </Link>
                </li>


                {/*<!-- Nav Item - Categorias -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-circle"></i>
                        <span>Categorias</span>
                    </Link>
                </li>


                {/*<!-- Nav Item - Usuarios -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/UserTable">
                        <i className="fas fa-user"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}


            {/*<!-- Routes -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ProductTable">
                    <ProductTable />
                </Route>
                <Route path="/SpeciesInDb">
                    <SpeciesInDb />
                </Route>
                <Route path="/CategoriesInDb">
                    <CategoriesInDb />
                </Route>
                <Route path="/UserTable">
                    <UserTable />
                </Route>
                {/*<!--<Route component={NotFound} /> -->*/}
            </Switch>

            
        </React.Fragment>
    )
}
export default SideBar;