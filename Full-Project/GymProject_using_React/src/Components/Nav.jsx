import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css'

function Nav() {
  const [color, setColor] = useState("red");
  const { user, loginWithRedirect, logout, isLoading } = useAuth0();
  const prf = user ? user.picture : "";
  const Pname = user ? user.name : "";
  const pEmail = user ? user.email : "";
  console.table(user)

  useEffect(() => {
    if (!isLoading && !user) {
      loginWithRedirect();

    }
  }, [isLoading, user, loginWithRedirect]);




  const colorChanger = () => {
    const body = document.querySelector("#root");
    if (color === "black") {
      setColor("white");
      document.body.style.backgroundColor = "white";
    } else {
      setColor("black");
      document.body.style.backgroundColor = "black";
    }
  }

  return (
    <div>
      <nav className='nav'>
        <input type="checkbox" id="Check" />
        <label htmlFor="Check" className="checkbtn">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGRJREFUSEvtkjsKACAMQyN4/ws76OIHQUgKFkHaOTRpXhOcJznvRxjQhp9UVHusYV4AZBp1CbbQpwvcDQxhufQJAx7LoFAYDCbqWjPk6wZqUkkXkE81BWTpeabozy+ydUDU7hU1ApwMGeTiyUAAAAAASUVORK5CYII=" className="hamb" />
        </label>
        <label className="logo"><span style={{color:"orange", textDecoration:"underline #fff"}}>Flexfit</span>-Gym</label>
        <span className='down'>
          <input type="checkbox" name="checkbox" id="toggle" onClick={colorChanger} />
          <label htmlFor="toggle" className="switch" />
        </span>
        <ul>
          <div className='infoBox'>
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARlJREFUSEvt1M8qxUEYxvHP2SrZEMpCUlyD/Cls5TZkq9yJzsZKuQG5AmSFbP3JmiVX4PfWqF/6nZlx6mRzZjm98zzv8513pmfEqzdifWODIuF/R3SMM7wPaHUFGzgdFCWX4BAneMFmh8kyrjGHfVx0meQM4mAIhNBr6vQnyRJuMYtHbOHrrwZR32UyUSseAjWXPI+rlOQJU8n4vkm4g8/cKNUYxPmFhGsxiWWxtA1rDYJ1MA/2sR6aVNul7msRhfhNQvScEMXeXbO/WzIpJWh3/oY1TLbGs5gkZ9Al/pEQxegGspkSrpzBQTPnfQSWmPPfr3k1JZnGHi6HeQdHOM98FWGyPuxXUfwpawpKl1yjka0ZGxQRjhzRNxi0NBmpupZSAAAAAElFTkSuQmCC" onClick={() => { const form = document.querySelector('.nav'); form.style.display = "none"; }} />
            </div>
            <div className="infoBOxImg"><img src={prf} alt="" /></div>
            <h1>{Pname}</h1> 
             <p >{pEmail}</p>
          </div>
          <li>
            <a href="#" className="Active hover-line">Home</a>
          </li>
          <li>
            <a href="#" className="hover-line">Classes</a>
          </li>
          <li>
            <a href="#" className="hover-line">Product</a>
          </li>
          <li>
            <a href="#" className="hover-line">Blogs</a>
          </li>
          <li><div className="navBtn"><img src={prf} alt="" /></div></li>
          <li><button className='btnlogout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

