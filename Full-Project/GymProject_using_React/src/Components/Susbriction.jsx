import React from 'react';
import './SubsCription.css'

function Susbriction() {
    return (
        <div>
            {/* <!-- Subscription cards --> */}
            <div className="Subscription-Plain">
                <h1 className="heading">Subscription Plans</h1>
                <div className="container5">
                    <div className="card">

                        <div className="card-content3">
                            <h3 className="h3">Basic</h3>
                            <p>for 12 Months</p>
                            <h3 className="h3">800/Month</h3>
                            <p>for Streaming.</p>
                        </div>
                        <div><button className="btn-5"> Select Plan</button></div>
                    </div>
                    <div className="card">

                        <div className="card-content3">
                            <h3 className="h3">Intermediate</h3>
                            <p>for 12 Months</p>
                            <h3 className="h3">1000/Month</h3>
                            <p>for Streaming.</p>
                        </div>
                        <div><button className="btn-5">Select Plan</button></div>
                    </div>
                    <div className="card">

                        <div className="card-content3">
                            <h3 className="h3">Advanced</h3>
                            <p>for 12 Months</p>
                            <h3 className="h3">1500/Month</h3>
                            <p>for Streaming.</p>
                        </div>
                        <div><button className="btn-5"> Select Plan</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Susbriction;
