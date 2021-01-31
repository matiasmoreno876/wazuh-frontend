import React from 'react';

const Alert = ({alert}) => {
    const {_id, _type, _index, _score } = alert
    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{_type}</td>
            <td>{_index}</td>
            <td>{_score}</td>
        </tr>
    );
};

export default Alert;
