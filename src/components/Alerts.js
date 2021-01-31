import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAlertsAction} from "../actions/alertsActions";
import Alert from "./Alert";

const Alerts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getAlerts = () => dispatch(getAlertsAction());
        getAlerts();
    }, [])
    const alerts = useSelector(state => state.alerts.alerts);
    console.log(alerts)
    return (
        <div>
            <h1 className="mt-4 mb-3 text-center">List of Alerts</h1>
            <table className="table table-hover mb-4">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">TYPE</th>
                    <th scope="col">INDEX</th>
                    <th scope="col">SCORE</th>
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
        </div>
    );
};

export default Alerts;
