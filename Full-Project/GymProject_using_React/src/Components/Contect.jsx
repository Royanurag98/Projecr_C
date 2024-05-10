import React from 'react';
import './Contect.css'
import img7 from '../assets/img/fitnessLogo.png'

function Contect() {
    return (
        <>

            <div className="Contect">
                <div className="cardX">
                    <div className="card-contentX">
                        <img src={img7} alt="Card 1" />
                        <h3>Prioritize Your Fitness Goals With our world class services</h3>
                    </div>
                </div>
                <div className="cardy">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            <tr>
                                <th>COMPANY</th>
                                <th>CONTACT</th>
                                <th>MORE</th>
                            </tr>
                            <tr>
                                <td>About</td>
                                <td>Help/FAQS</td>
                                <td>Program</td>
                            </tr>
                            <tr>
                                <td>Careers</td>
                                <td>Press</td>
                                <td>Plans</td>
                            </tr>
                            <tr>
                                <td>Blogs</td>
                                <td>Mobile</td>
                                <td>Method</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cardz">
                    <h3 style={{ textDecoration: "underline #fff" }}>Popular Tags</h3>
                    <div className="boxes">
                        <div
                            className="mini-box"
                            style={{ backgroundColor: "hsl(0, 2%, 55%)" }}
                        >
                            ABS
                        </div>
                        <div
                            className="mini-box"
                            style={{ backgroundColor: "hsl(0, 2%, 55%)" }}
                        >
                            Workout
                        </div>
                        <div className="mini-box" style={{ backgroundColor: "orange" }}>
                            Natrition
                        </div>
                        <div
                            className="mini-box"
                            style={{ backgroundColor: "hsl(0, 2%, 55%)" }}
                        >
                            Gym
                        </div>
                        <div className="mini-box" style={{ backgroundColor: "orange" }}>
                            Box
                        </div>
                        <div
                            className="mini-box"
                            style={{ backgroundColor: "hsl(0, 2%, 55%)" }}
                        >
                            Trainers
                        </div>
                        <div className="mini-box" style={{ backgroundColor: "orange" }}>
                            Facilities
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <h1>@ CopyRight All Rights Reserved</h1>
            </footer>
        </>

    );
}

export default Contect;
