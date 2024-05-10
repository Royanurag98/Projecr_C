import React, { useState } from 'react';
import './Slider.css'
import './Form.css'

function Slider() {
    const [show, setShow] = useState(false)

    let currentSlide = 0;
    const slides = document.querySelectorAll('.items');
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }
    
    function slideNextImg() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function slidePrevImg() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
       showSlide(currentSlide);
    }

     // form Show click on Join Us ////////////////////////////////////////
     const showForm = (prevShow) => {
        setShow(!show);
    
      }
          // form submit function/////////////////////////////////////
    let arr=[]
    const handleSubmit = (e) => {
      e.preventDefault();
      let form = new FormData(e.target)
      let formObj = Object.fromEntries(form.entries());
      arr.push(formObj)
      console.table(arr)
      
    }
    return (
        <div>
            <div className="slider">
                <div className="list">
                    <div className="items active">
                        <img
                            src="https://images.pexels.com/photos/136410/pexels-photo-136410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Image 1"
                        />
                        <div className="content">
                            <h2>Revitalize your body</h2>
                            <p>Fall in love with taking care of yourself: mind, body and spirit.</p>
                            <div className="btnBox">
                                <button className="btn1" onClick={showForm}>Get Started</button>
                                <button className="btn1">Free Trial ⩥</button>
                            </div>
                        </div>
                    </div>
                    {/* Add more .items here */}
                    <div className="items active">
                        <img
                            src="https://images.pexels.com/photos/136410/pexels-photo-136410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Image 1"
                        />
                        <div className="content">
                            <p>Design</p>
                            <h2>Revitalize your body</h2>
                            <p>Fall in love with taking care of yourself: mind, body and spirit.</p>
                        </div>
                    </div>
                    <div className="items active">
                        <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        "&gt;
                        <div className="content">
                            <p>Design</p>
                            <h2>Revitalize your body</h2>
                            <p>Fall in love with taking care of yourself: mind, body and spirit.</p>
                        </div>
                    </div>
                    <div className="items active">
                        <img src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        "&gt;
                        <div className="content">
                            <p>Design</p>
                            <h2>Revitalize your body</h2>
                            <p>Fall in love with taking care of yourself: mind, body and spirit.</p>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <button className="Prev" onClick={slideNextImg}>
                        ⩤
                    </button>
                    <button className="Next" onClick={slidePrevImg}>
                        ⩥
                    </button>
                </div>
                {/* Social Icon ////////////////////////////////////////////////////*/}
                <div className="socialIcon">
                    <div className="s1">
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div className="s1">
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="s1">
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={40}
                                height={40}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(0, 0, 0, 1)" }}
                            >
                                <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Form////////////////////////////// */}
            <span>
          {show && (
            <div className="container2">
              <div className='head-box'>
                <h2>Membership Form</h2>
                  {/* <button onClick={(e)=>loginWithRedirect()}> Redirect on Login page</button> */}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARlJREFUSEvt1M8qxUEYxvHP2SrZEMpCUlyD/Cls5TZkq9yJzsZKuQG5AmSFbP3JmiVX4PfWqF/6nZlx6mRzZjm98zzv8513pmfEqzdifWODIuF/R3SMM7wPaHUFGzgdFCWX4BAneMFmh8kyrjGHfVx0meQM4mAIhNBr6vQnyRJuMYtHbOHrrwZR32UyUSseAjWXPI+rlOQJU8n4vkm4g8/cKNUYxPmFhGsxiWWxtA1rDYJ1MA/2sR6aVNul7msRhfhNQvScEMXeXbO/WzIpJWh3/oY1TLbGs5gkZ9Al/pEQxegGspkSrpzBQTPnfQSWmPPfr3k1JZnGHi6HeQdHOM98FWGyPuxXUfwpawpKl1yjka0ZGxQRjhzRNxi0NBmpupZSAAAAAElFTkSuQmCC" 
                onClick={() => {
                  const form = document.querySelector('.container2')
                  form.style.display = "none"
                }} />
               
              </div>
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="full-name" id="label1">Full Name:</label>
                  <input type="text" id="full-name" name="full-name" required="" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" id="label1">Email:</label>
                  <input type="email" id="email" name="email" required="" />
                </div>
                <div className="form-group2">
                  <label htmlFor="mobile-number" id="label1">Mobile Number:</label>
                  <input type="tel" id="mobile-number" name="mobile-number" required="" />
                </div>
                <div className="form-group">
                  <label htmlFor="duration" id="label1">Duration:</label>
                  <select id="duration" name="duration" required="">
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mode-of-payment" id="label1">Mode of Payment:</label>
                  <select id="mode-of-payment" name="mode-of-payment" required="">
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                  </select>
                </div>
                <p className="head">Personal Training:</p>
                <div className="radio-container">
                  <div className="b1">
                    <input
                      type="radio"
                      id="option1"
                      name="preference"
                      defaultValue="option1"
                    />
                    <label htmlFor="option1" className="options1" id="label1">
                      Required
                    </label>
                  </div>
                  <div className="b2">
                    <input
                      type="radio"
                      id="option2"
                      name="preference"
                      defaultValue="option2"
                    />
                    <label htmlFor="option2" className="options1" id="label1">
                      Not Required
                    </label>
                  </div>
                </div>
                <div className="Agrement">
                  <input
                    type="checkbox"
                    id="accept-terms"
                    name="accept-terms"
                    required="" style={{ display: 'block' }}
                  />
                  <label htmlFor="accept-terms" className="accept" id="label1" style={{ display: "block" }}>
                    I accept all the terms and conditions
                  </label>
                </div>
                <button type="submit" className='submit'>Buy Plan</button>
              </form>
            </div>
          )}
        </span>
        </div>
    );
}

export default Slider;
