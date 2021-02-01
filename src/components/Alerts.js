import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAlertsAction} from "../actions/alertsActions";
import Alert from "./Alert";

const Alerts = () => {

    const dispatch = useDispatch();

    let offset = 0;
    let limit = 10;

    useEffect(() => {
        const getAlerts = (offset, limit) => dispatch(getAlertsAction(offset, limit));
        getAlerts(offset, limit);
    }, [])

    const alerts = useSelector(state => state.alerts.alerts);
    const error = useSelector(state => state.alerts.error);
    const loading = useSelector(state => state.alerts.loading)

    return (
        <div>
            <h1 className="mt-4 mb-3 text-center">List of Alerts</h1>
            {!error && <Fragment>
                <table className="table table-hover mb-4">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">INDEX</th>
                        <th scope="col">SCORE</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {alerts.length !== 0 && alerts.data.map(alert => (
                        <Alert key={alert._id} alert={alert}/>
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
                There was an error trying to load the alerts
            </div>
            }
        </div>
    );
};

export default Alerts;
