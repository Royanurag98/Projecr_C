import React from 'react';
import './Facilities.css'
import imge1 from '../assets/img/WeightBag.jpg';
import imge2 from '../assets/img/Yoga.png';
import imge3 from '../assets/img/cycle-removebg-preview.png';
import imge4 from '../assets/img/lift.jpg';
import imge5 from '../assets/img/images-removebg-preview (2).png';

import imge6 from '../assets/img/run-removebg-preview.png';

function Facilities() {
  return (
    <div>

    {/*  cards ///////////////////////////////////////////*/}
    <div className="mainBox">
      <div className="container">
        <div className="card1">
          <img src={imge1} alt="Card 1" />
          <div className="card-content1">
            <h3 className='text'>Weight Loss</h3>
          </div>
        </div>
        <div className="card2">
          <img src={imge2} alt="Card 1" />
          <div className="card-content1">
            <h3 className='text'>Classic Yoga</h3>
          </div>
        </div>
        <div className="card3">
          <img src={imge3} alt="Card 1" />
          <div className="card-content1">
            <h3 className='text'>Cycling</h3>
          </div>
        </div>
        <div className="card4">
          <img src={imge4} alt="Card 1" />
          <div className="card-content1">
            <h3 className='text'>Body-bulding</h3>
          </div>
        </div>
        <div className="card5">
          <img src={imge5} alt="Card 1" />
          <div className="card-content1">
            <h3 className='text'>Hyper-trophy</h3>
          </div>
        </div>
        <div className="card6">
          <img src={imge6} alt="Card 1" />
          <div className="card-content1">
            <h3 className='text'>Running</h3>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Facilities;
