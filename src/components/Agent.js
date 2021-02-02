import React from 'react';
import {Link} from "react-router-dom";

const Agent = ({agent}) => {
    const {id, name, ip} = agent
    return (
        <tr>
            <th  scope="row">{id}</th>
            <td className="text-center">{name}</td>
            <td className="text-center">{ip}</td>
            <td className="text-center">
                <Link to={`/agents/${id}`}
                      className="btn btn-primary">
                    View Agent
                </Link>
            </td>
        </tr>
    );
};

export default Agent;
