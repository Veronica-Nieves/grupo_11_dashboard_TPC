import React from 'react';

/* Importamos componentes */
import LastProductInDb from './LastProductInDb';
import SpeciesInDb from './SpeciesInDb';


/* Mostramos componentes */
function ContentRowCenter(){
    return (
        <div className="row">
            <LastProductInDb />
            <SpeciesInDb />
        </div>
    )
}

export default ContentRowCenter;