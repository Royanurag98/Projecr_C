import React from 'react';
import './Fitness.css'
import img1 from '../assets/img/gm.png'
import img2 from '../assets/img/ps1.jpg'
import img3 from '../assets/img/ft2.png'
import img4 from '../assets/img/img6.jpg'
import img5 from '../assets/img/e3.jpeg'
import img6 from '../assets/img/img5.jpg'


function Fitness() {
    return (
        <div>
            <div className="FitnessGym">

                <div className="traning">

                    <div className="cardA">
                        <img src={img1} alt="Card 1" />
                        <div className="card-contentA">
                            <h3>Good Management</h3>
                            <p className="par">What hurts today makes you stronger tomorrow</p>

                        </div>
                    </div>

                    <div className="cardA">
                        <img src={img2} alt="Card 1" />
                        <div className="card-contentA">
                            <h3>Practice Sessions</h3>
                            <p className="par">Motivate is what gets you started</p>

                        </div>
                    </div>

                    <div className="cardA">
                        <img src={img3} alt="Card 1" />
                        <div className="card-contentA">
                            <h3>Personal Trainers</h3>
                            <p className="par">if it dosen't challenge you, it won't change you</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="Fitness"> </div>
            {/* <!-- imgCards /////////////////////////////////////////////////////////--> */}
            <div className="imgCards">
                <div className="cardB">
                    <img src={img4} alt="Card 1" />
                    <div className="card-contentB">
                        <h3>Best place for body transformation</h3>
                    </div>
                </div>

                <div className="cardB">
                    <img src={img5} alt="Card 1" />
                    <div className="card-contentB">
                        <h3>Best Cross Fit gym in this area</h3>
                    </div>
                </div>

                <div className="cardB">
                    <img src={img6} alt="Card 1" />
                    <div className="card-contentB">
                        <h3>Best Bodybuilding gym in the city it has all required equipment</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Fitness;
