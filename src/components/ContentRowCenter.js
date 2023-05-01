import React from 'react';

/* Importamos componentes */
import LastProductInDb from './LastProductInDb';
import SpeciesInDb from './SpeciesInDb';
import CategoriesInDb from './CategoriesInDb';


/* Mostramos componentes */
function ContentRowCenter(){
    return (
        <React.Fragment>
            <div className='middle-row'>
                <SpeciesInDb />
                <CategoriesInDb />
            </div>
            <LastProductInDb />
    
        </React.Fragment> 
    )
}

export default ContentRowCenter;