import React, {useEffect, Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAlertsAction} from "../actions/alertsActions";
import Alert from "./Alert";
import Pagination from "./Pagination";

const Alerts = () => {

    const dispatch = useDispatch();

    const [currentPAge, setCurrentPAge] = useState(0);
    const [alertsPerPage, setAlertsPerPage] = useState(10)

    useEffect(() => {
        const getAlerts = (offset, limit) => dispatch(getAlertsAction(offset, limit));
        getAlerts(currentPAge, alertsPerPage);
    }, [])

    const alerts = useSelector(state => state.alerts.alerts);
    const error = useSelector(state => state.alerts.error);
    const loading = useSelector(state => state.alerts.loading)

    const paginate = (pageNumber) => {
        dispatch(getAlertsAction(((pageNumber - 1) * alertsPerPage), alertsPerPage))
    };

    return (
        <div>
            <h1 className="mt-4 mb-3 text-center" data-cy="title">List of Alerts</h1>
            {!error && <Fragment>
                <table data-cy="table" className="table table-hover mb-4">
                    <thead className="thead-dark">
                    <tr>
                        <th data-cy="col-1" scope="col">ID</th>
                        <th data-cy="col-2" scope="col">TYPE</th>
                        <th data-cy="col-3" scope="col">INDEX</th>
                        <th data-cy="col-4" scope="col">SCORE</th>
                        <th data-cy="col-5" scope="col">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {alerts.length !== 0 && alerts.data.map(alert => (
                        <Alert key={alert._id} alert={alert}/>
                    ))
                    }
                    </tbody>
                </table>

                {
                    alerts && alerts.paging &&
                    <Pagination totalPost={alerts.paging.total_items} postPerPage={alertsPerPage} paginate={paginate}/>
                }

            </Fragment>}

            {error &&
            <div className="alert alert-danger" role="alert">
                There was an error trying to load the alerts
            </div>
            }
        </div>
    );
};

export default Alerts;
