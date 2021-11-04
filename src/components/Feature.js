import React, { useEffect, useState } from "react";

const Feature = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/feature-bg.png)`,
  });

  const color = localStorage.getItem("color");
  useEffect(() => {
    if (color === "color-1")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/feature-bg.png)`,
      });
    else if (color === "color-2")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/feature-bg1.png)`,
      });
    else
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/feature-bg1.png)`,
      });
  }, [color]);

  return (
    <section id="feature" className="feature" style={bgImg}>
      <div className="feature-decor">
        <div className="feature-circle1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/feature2.png`}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="feature-phone">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/222-new.png`}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="offset-lg-4 col-lg-8">
            <div className="row">
              <div className="col-sm-12 mrgn-md-top">
                <h2 className="title">
                  features of<span> smapp</span>
                </h2>
              </div>
              <div className="col-12 col-md-6">
                <ul className="feature-style">
                  <li>
                    <div className="feature-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon/1.png`}
                        alt="icon"
                      />
                    </div>
                    <div className="feature-subtitle">
                      <h3>View Your Locations</h3>
                    </div>
                    <div>
                      <p>
                        View all your locations on a single pane that you can
                        drive, zoom and view on any device.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon/3.png`}
                        alt="icon"
                      />
                    </div>
                    <div className="feature-subtitle">
                      <h3>Add Notes</h3>
                    </div>
                    <div>
                      <p>
                        Add your personalized notes to any location. Who did you
                        talk to? What happened? What was special and memorable?{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon/5.png`}
                        alt="icon"
                      />
                    </div>
                    <div className="feature-subtitle">
                      <h3>Voice Recording</h3>
                    </div>
                    <div>
                      <p>
                        Don't want to type? Easily record what you want to say
                        and save for later.{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 sm-m-top">
                <ul className="feature-style">
                  <li>
                    <div className="feature-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon/2.png`}
                        alt="icon"
                      />
                    </div>
                    <div className="feature-subtitle">
                      <h3>View Images</h3>
                    </div>
                    <div>
                      <p>
                        Add an image to the location. A business card, details
                        about a specific site setup. You can view these later and
                        plan your next move.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon/4.png`}
                        alt="icon"
                      />
                    </div>
                    <div className="feature-subtitle">
                      <h3>Custom Products</h3>
                    </div>
                    <div>
                      <p>
                        Fully customizable product set that allows you to tie
                        the product or services you sell to a specific location.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icon/6.png`}
                        alt="icon"
                      />
                    </div>
                    <div className="feature-subtitle">
                      <h3>Color Coding</h3>
                    </div>
                    <div>
                      <p>
                        Having different colored pins based on the status of
                        that location.{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
