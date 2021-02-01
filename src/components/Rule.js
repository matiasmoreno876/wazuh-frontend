import React from 'react';
import {Link} from "react-router-dom";

const Rule = ({rule}) => {
    const {id, level, firedtimes, total_alerts} = rule
    console.log(rule)
    return (
        <tr>
            <th scope="row">{id}</th>
            <td className="text-center">{level}</td>
            <td className="text-center">{firedtimes}</td>
            <td className="text-center">{total_alerts}</td>
            <td className="text-center">
                <Link to={`/rules/${id}`}
                      className="btn btn-primary">
                    View Rule
                </Link>
            </td>
        </tr>
    );
};

export default Rule;
