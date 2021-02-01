import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAgentsAction} from "../actions/agentsActions";
import Agent from "./Agent";

const Agents = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getAgents = () => dispatch(getAgentsAction());
        getAgents();
    }, [])

    const agents = useSelector(state => state.agents.agents);
    const error = useSelector(state => state.agents.error);
    const loading = useSelector(state => state.agents.loading)

    return (
        <div>
            <h1 className="mt-4 mb-3 text-center">List of Agents</h1>
            {!error && <Fragment>
                <table className="table table-hover mb-4">
                    <thead className="thead-dark">
                    <tr>
                        <th  scope="col">ID</th>
                        <th className="text-center" scope="col">NAME</th>
                        <th className="text-center" scope="col">IP</th>
                        <th className="text-center" scope="col">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {agents.length !== 0 && agents.data.map(agent => (
                        <Agent key={agent._id} agent={agent}/>
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
                There was an error trying to load the agents
            </div>
            }
        </div>
    );
};

export default Agents;
