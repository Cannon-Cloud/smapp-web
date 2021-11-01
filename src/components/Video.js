import ReactPlayer from "react-player";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Video = () => {
  const history = useHistory();
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/screenshot-bg.png)`,
  });

  const color = localStorage.getItem("color");
  useEffect(() => {
    if (color === "color-1")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/screenshot-bg.png)`,
      });
    else if (color === "color-2")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/screenshot-bg.png)`,
      });
    else
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/screenshot-bg.png)`,
      });
  }, [color]);
  return (
    <section
      id="screenshot"
      className="screenshot padding-top-bottom"
      style={bgImg}
    >
      <div className="screenshot-decor">
        <div className="screenshot-circle1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/feature-circle-two.png`}
            alt="feature-circle-two"
          />
        </div>
        <div className="screenshot-circle2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/feature-circle.png`}
            alt="feature-circle"
          />
        </div>
        <div className="screenshot-circle3">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/main-banner1.png`}
            alt="feature-circle-three"
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="screenshot-contain">
              <ReactPlayer
                className="vid-mocup"
                url="https://vimeo.com/632439572
              "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
