import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAlertAction} from "../actions/alertsActions";

const AlertsDetail = (props) => {
    const dispatch = useDispatch();

    const id = props.match.params.id;

    useEffect(() => {
        const getAlert = id => dispatch(getAlertAction(id));
        getAlert(id);
    }, [])

    const alert = useSelector(state => state.alerts.alert);
    const error = useSelector(state => state.alerts.error);
    const loading = useSelector(state => state.alerts.loading)

    console.log(alert)

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-sm-12">
                    { alert._source && <div className="card">
                        <div className="card-body">
                            <h3 data-cy="title" className="card-title">Detail of the alert: {alert._id}</h3>
                            <hr/>
                            <div className="ml-3">
                                <h5 data-cy="title-rule" className="card-title">Rule:</h5>
                                <p className="card-text">Id: {alert._source.rule.id}</p>
                                <p className="card-text">Level: {alert._source.rule.level}</p>
                                <p className="card-text">Description: {alert._source.rule.description}</p>
                            </div>
                            <hr/>
                            <div className="ml-3">
                                <h5 data-cy="title-agent" className="card-title">Agent:</h5>
                                <p className="card-text">Id: {alert._source.agent.id}</p>
                                <p className="card-text">Ip: {alert._source.agent.ip}</p>
                                <p className="card-text">Name: {alert._source.agent.name}</p>
                            </div>
                            <hr/>
                            <div className="ml-3 mb-4">
                                <h5 data-cy="title-manager" className="card-title">Manager:</h5>
                                <p className="card-text">Name: {alert._source.manager.name}</p>
                            </div>
                            <Link data-cy="link-to-list" to={'/alerts'} className="btn btn-primary btn-block">Back to list</Link>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default AlertsDetail;
