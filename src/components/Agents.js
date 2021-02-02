import React, {useEffect, Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAgentsAction} from "../actions/agentsActions";
import Agent from "./Agent";
import Pagination from "./Pagination";

const Agents = () => {

    const dispatch = useDispatch();

    const [currentPAge, setCurrentPAge] = useState(0);
    const [alertsPerPage, setAlertsPerPage] = useState(10)

    useEffect(() => {
        const getAgents = (offset, limit) => dispatch(getAgentsAction(offset, limit));
        getAgents(currentPAge, alertsPerPage);
    }, [])

    const agents = useSelector(state => state.agents.agents);
    const error = useSelector(state => state.agents.error);
    const loading = useSelector(state => state.agents.loading)

    const paginate = (pageNumber) => {
        dispatch(getAgentsAction(((pageNumber - 1) * alertsPerPage), alertsPerPage))
    };

    return (
        <div>
            <h1 className="mt-4 mb-3 text-center">List of Agents</h1>
            {!error && <Fragment>
                <table className="table table-hover mb-4">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th className="text-center" scope="col">NAME</th>
                        <th className="text-center" scope="col">IP</th>
                        <th className="text-center" scope="col">ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {agents.length !== 0 && agents.data.map(agent => (
                        <Agent key={agent.id} agent={agent}/>
                    ))
                    }
                    </tbody>
                </table>

                {
                    agents && agents.paging &&
                    <Pagination totalPost={agents.paging.total_items} postPerPage={alertsPerPage} paginate={paginate}/>
                }

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
