import React from 'react';

function Specie(props){
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white shadow species-card">
                    <div className="card-body species-card">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Specie;