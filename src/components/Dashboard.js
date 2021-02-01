import React, {useEffect} from 'react';
import Pie from './Pie';
import {useDispatch, useSelector} from "react-redux";
import {getAgentsAction} from "../actions/agentsActions";

const Dashboard = () => {
    const dispatch = useDispatch();

    let offset = 0;
    let limit = 100;

    useEffect(() => {
        const getAgents = (offset, limit) => dispatch(getAgentsAction(offset,limit));
        getAgents(offset,limit);
    }, [])

    const agents = useSelector(state => state.agents.agents);

    return (
        <div>
            <h1 className="mb-5 mt-3">Dashboard Alerts by Agents</h1>
            <div className="card">
                <div className="card-body text-center">
                    {agents && agents.data && <Pie data={agents.data}
                                                   width={600}
                                                   height={600}
                                                   innerRadius={0}
                                                   outerRadius={300}></Pie>}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
