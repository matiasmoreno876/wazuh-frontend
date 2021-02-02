import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRuleAction} from "../actions/rulesActions";

const RulesDetail = (props) => {
    const dispatch = useDispatch();

    const id = props.match.params.id;

    useEffect(() => {
        const getRule = id => dispatch(getRuleAction(id));
        getRule(id);
    }, [])

    const rule = useSelector(state => state.rules.rule);
    const error = useSelector(state => state.rules.error);
    const loading = useSelector(state => state.rules.loading)

    console.log(rule)

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-sm-12">
                    {rule && <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Detail of the rule: {rule.id}</h3>
                            <hr/>
                            <div className="ml-3">
                                <p className="card-text">Id: {rule.id}</p>
                                <p className="card-text">Level: {rule.level}</p>
                                <p className="card-text">Description: {rule.description}</p>
                                <p className="card-text">Total Alerts: {rule.total_alerts}</p>
                            </div>
                            <hr/>
                            <div className="ml-3">
                                <h5 className="card-title">pci_dss:</h5>
                                {rule.pci_dss && rule.pci_dss.length > 0 ?
                                    rule.pci_dss.map(
                                        p => <p className="card-text">{p}</p>
                                    ) : null
                                }
                            </div>
                            <hr/>
                            <div className="ml-3">
                                <h5 className="card-title">hipaa:</h5>
                                {rule.hipaa && rule.hipaa.length > 0 ?
                                    rule.hipaa.map(
                                        p => <p className="card-text">{p}</p>
                                    ) : null
                                }
                            </div>
                            <hr/>
                            <div className="ml-3 mb-4">
                                <h5 className="card-title">groups:</h5>
                                {rule.groups && rule.groups.length > 0 ?
                                    rule.groups.map(
                                        p => <p className="card-text">{p}</p>
                                    ) : null
                                }
                            </div>

                            <Link to={'/rules'} className="btn btn-primary btn-block">Back to list</Link>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default RulesDetail;
