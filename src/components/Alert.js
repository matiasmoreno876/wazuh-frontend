import React from 'react';
import {Link} from "react-router-dom";

const Alert = ({alert}) => {
    const {_id, _type, _index, _score} = alert
    return (
        <tr Lin>
            <th scope="row">{_id}</th>
            <td>{_type}</td>
            <td>{_index}</td>
            <td>{_score}</td>
            <td>
                <Link to={`/alerts/${_id}`}
                      className="btn btn-primary">
                    View Alert
                </Link>
            </td>
        </tr>
    );
};

export default Alert;
