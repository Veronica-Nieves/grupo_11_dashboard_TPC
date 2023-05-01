import React from 'react';

function Category(props){
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white shadow categories-card">
                    <div className="card-body categories-card">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;