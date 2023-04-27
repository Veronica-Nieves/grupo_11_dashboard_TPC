import React from 'react';

/* Importamos componentes */
import ContentScoreCard from './ContentScoreCard';


/* Estructuraos componente ContentRowTop */
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Header -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">DASHBOARD</h1>
					</div>
				
					{/*<!-- Content Score Cards -->*/}
					<ContentScoreCard />
				
				</div>
        </React.Fragment>
    )

}
export default ContentRowTop;