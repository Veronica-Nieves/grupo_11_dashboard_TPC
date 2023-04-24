import React from 'react';

/* Importamos componentes */
import LastProductInDb from './LastProductInDb';
import SpeciesInDb from './SpeciesInDb';


/* Mostramos componentes */
function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <SpeciesInDb />

        </div>
    )
}

export default ContentRowCenter;