import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getRulesAction} from "../actions/rulesActions";
import Rule from "./Rule";

const Rules = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getRules = () => dispatch(getRulesAction());
        getRules();
    }, [])

    const rules = useSelector(state => state.rules.rules);
    const error = useSelector(state => state.rules.error);
    const loading = useSelector(state => state.rules.loading)

    console.log(rules)

    return (
        <div>
            <h1 className="mt-4 mb-3 text-center">List of Rules</h1>
            {!error && <Fragment>
                <table className="table table-hover mb-4">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th className="text-center" scope="col">LEVEL</th>
                        <th className="text-center" scope="col">FIREDTIMES</th>
                        <th className="text-center" scope="col">TOTAL ALERTS</th>
                        <th className="text-center" scope="col">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rules.length !== 0 && rules.data.map(rule => (
                        <Rule key={rule._id} rule={rule}/>
                    ))
                    }
                    </tbody>
                </table>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </Fragment>}

            {error &&
            <div className="alert alert-danger" role="alert">
                There was an error trying to load the rules
            </div>
            }
        </div>
    );
};

export default Rules;
