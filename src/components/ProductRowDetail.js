import React from 'react';

function ProductRowDetail (props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.sku}</td>
                <td>{props.name}</td>
                <td>{props.specie}</td>
                <td>{props.category}</td>
                <td>{props.price}</td>
                <td>{props.piece}</td>
            </tr>
        </React.Fragment>
    )
}
export default ProductRowDetail;