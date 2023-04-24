import React from 'react';

function ProductRowDetail (props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.sku}</td>
                <td>{props.name}</td>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.discount_price}</td>
                <td>{props.pieces}</td>
            </tr>
        </React.Fragment>
    )
}
export default ProductRowDetail;