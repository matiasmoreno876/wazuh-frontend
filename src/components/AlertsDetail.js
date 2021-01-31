import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAlertAction} from "../actions/alertsActions";

const AlertsDetail = () => {
    const dispatch = useDispatch();

    const id = '3XGmr3QB4YtWQbLv1inX'
    useEffect(() => {
        const getAlert = id => dispatch(getAlertAction(id));
        getAlert(id);
    }, [])

    const alerts = useSelector(state => state.alerts.alerts);
    const error = useSelector(state => state.alerts.error);
    const loading = useSelector(state => state.alerts.loading)

    console.log(alerts)
    console.log(error)
    console.log(loading)

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <Link to={'/alerts'} className="btn btn-primary btn-block">Back to list</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertsDetail;
