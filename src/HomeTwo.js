import React, { useEffect, useState } from "react";
import Menu from "./components/Navbar";
import "react-modal-video/scss/modal-video.scss";
import Tilt from "react-tilt";
import About from "./components/About";
import Feature from "./components/Feature";
import ScreenShot from "./components/Screenshot";
// import Team from "./components/Team";
import Price from "./components/Price";
// import Contact from "./components/Contact";
// import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Promo from "./components/Promo";
// import TypeFormContat from "./components/TypeFormContact";
// import CheckoutNew from "./components/CheckoutNew";
// import Testimonial from "./components/Testimonial";
import { IntercomProvider, useIntercom } from "react-use-intercom";
import AddEmail from "./components/AddEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeTwo = () => {
  const INTERCOM_APP_ID = "lb7rbb7o";

  const [unreadMessagesCount, setUnreadMessagesCount] = React.useState(0);

  const onHide = () => console.log("Intercom did hide the Messenger");
  const onShow = () => console.log("Intercom did show the Messenger");
  const onUnreadCountChange = (amount) => {
    console.log("Intercom has a new unread message");
    setUnreadMessagesCount(amount);
  };

  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  /*For changing background image by changing the color*/
  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home2/home2-slider.png)`,
  });

  const color = localStorage.getItem("color");

  useEffect(() => {
    if (color === "color-1")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home2/home2-slider.png)`,
      });
    else if (color === "color-2")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/Homev2.png)`,
      });
    else
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/Homev2.png)`,
      });
  }, [color]);

  /* For Open video modal */

  document.body.classList.remove("landing-page");
  document.body.classList.remove("home-style");
  document.body.classList.remove("three");
  document.body.classList.add("home-style-two");
  return (
    <IntercomProvider
      appId={INTERCOM_APP_ID}
      onHide={onHide}
      onShow={onShow}
      onUnreadCountChange={onUnreadCountChange}
      autoBoot
    >
      <div>
        {/* Navbar Component*/}
        <Menu homePage="home-two" />

        {/* Home Two Section Start */}

        <section
          id="home"
          className="home home-two vertical-scrolling"
          style={bgImg}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <div className="home-contain">
                  <div className="text-white">
                    <div>
                      <br />
                      <br />
                      <br />
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/home2/logo-icon.png`}
                        alt="logo"
                      />
                      <h4>Welcome To</h4>
                      <h1 className="text-white">
                        s<span>m</span>
                        <span className="f-bold f-color text-white">app</span>
                      </h1>
                      <p className="slide-cap-desc">
                        The smart mapping application that maps everything you
                        need to see and know. Add Notes, Images, Reminders,
                        Voice Recordings, and Files all in one place.
                      </p>
                      <a
                        href="https://apps.apple.com/us/app/smapp-app/id1488904471"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/appstore.png`}
                          alt="appstore"
                          className="store"
                        />
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.smappworks"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="ml-10 store"
                          src={`${process.env.PUBLIC_URL}/assets/images/play-store.png`}
                          alt="play-store"
                        />
                      </a>

                      <div>
                        <br />
                        <Promo />
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>

              <div className="col-sm-7">
                <div className="home-right">
                  <Tilt
                    options={{
                      perspective: 110,
                      speed: 400,
                      max: 1.2,
                      scale: 1,
                    }}
                  >
                    <img
                      data-tilt
                      data-tilt-perspective="110"
                      data-tilt-speed="400"
                      data-tilt-max="1.2"
                      src={`${process.env.PUBLIC_URL}/assets/images/home2/slider-caption-new.png`}
                      className="img-fluid"
                      alt="slider-caption"
                    />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Home Two Section End */}

        {/* About Component*/}
        <About />

        {/*Feature Component*/}
        <Feature />

        {/*ScreenShot Component*/}
        <ScreenShot />

        {/*Team Component*/}
        {/* <Team /> */}

        {/*Price Component*/}
        <Price />

        {/* Testimonial Component
      <Testimonial /> */}

        {/*ChargeBee Checkout*/}
        {/* <CheckoutNew /> */}

        {/*Contact Component*/}
        {/*<Contact />*/}

        {/*Subscription Component*/}
        {/*<Subscribe />*/}

        {/*Footer Component*/}
        <Footer />
        <ToastContainer />
      </div>
    </IntercomProvider>
  );
};

export default HomeTwo;
