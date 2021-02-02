import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAgentAction} from "../actions/agentsActions";

const AgentsDetail = (props) => {
    const dispatch = useDispatch();

    const id = props.match.params.id;

    useEffect(() => {
        const getAgent = id => dispatch(getAgentAction(id));
        getAgent(id);
    }, [])

    const agent = useSelector(state => state.agents.agent);
    const error = useSelector(state => state.agents.error);
    const loading = useSelector(state => state.agents.loading)

    console.log(agent)

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-sm-12">
                    {agent && <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Detail of the agent: {agent.id}</h3>
                            <hr/>
                            <div className="ml-3">
                                <p className="card-text">Id: {agent.id}</p>
                                <p className="card-text">Level: {agent.name}</p>
                                <p className="card-text">Description: {agent.ip}</p>
                                <p className="card-text">Total alerts: {agent.total_alerts}</p>
                            </div>
                            <hr/>
                            <div className="ml-3 mb-4">
                                {agent.alerts && agent.alerts.length > 0 &&
                               <div>
                                   <h5 className="card-title">Alerts id:</h5>
                                   {agent.alerts.map(a =>
                                       <span>
                                        <span className="badge badge-secondary m-1 p-2">{a._id}</span>
                                    </span>
                                   )}
                               </div>
                                }
                            </div>
                            <Link to={'/agents'} className="btn btn-primary btn-block">Back to list</Link>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default AgentsDetail;
