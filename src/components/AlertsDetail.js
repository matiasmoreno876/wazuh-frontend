import React from 'react';
import {Link} from "react-router-dom";

const AlertsDetail = () => {
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
