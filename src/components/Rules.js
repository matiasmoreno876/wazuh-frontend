import React, {useEffect, Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getRulesAction} from "../actions/rulesActions";
import Rule from "./Rule";
import Pagination from "./Pagination";

const Rules = () => {

    const dispatch = useDispatch();

    const [currentPAge, setCurrentPAge] = useState(0);
    const [alertsPerPage, setAlertsPerPage] = useState(10)

    useEffect(() => {
        const getRules = (offset, limit) => dispatch(getRulesAction(offset, limit));
        getRules(currentPAge, alertsPerPage);
    }, [])

    const rules = useSelector(state => state.rules.rules);
    const error = useSelector(state => state.rules.error);
    const loading = useSelector(state => state.rules.loading)

    const paginate = (pageNumber) => {
        dispatch(getRulesAction(((pageNumber - 1) * alertsPerPage), alertsPerPage))
    };

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
                        <Rule key={rule.id} rule={rule}/>
                    ))
                    }
                    </tbody>
                </table>

                {
                    rules && rules.paging &&
                    <Pagination totalPost={rules.paging.total_items} postPerPage={alertsPerPage} paginate={paginate}/>
                }

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
