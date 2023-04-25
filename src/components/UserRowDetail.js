import React from 'react';

function UserRowDetail (props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
            </tr>
        </React.Fragment>
    )
}
export default UserRowDetail;