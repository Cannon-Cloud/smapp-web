import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Promo = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price-bg.png)`,
  });
  const color = localStorage.getItem("color");

  const [priceBg, setPriceBg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price.png)`,
  });

  useEffect(() => {
    if (color === "color-1") {
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price-bg.png)`,
      });
      setPriceBg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price.png)`,
      });
    } else if (color === "color-2") {
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/price-bg.png)`,
      });
      setPriceBg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/price.png)`,
      });
    } else {
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/price-bg.png)`,
      });
      setPriceBg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/price.png)`,
      });
    }
  }, [color]);

  // Dynamic Price Data Easy to Update
  let data = [
    {
      title: "Use Coupon Code SmappWorks",
      lable: "",
      price: "0",
      features: "",
      link: "#",
      planQty: "1",
    },
  ];

  // Dynamic Price Data Loop
  let DataList = data.map((val, i) => {
    return (
      <div>
        <div className="price-block">
          <div>
            <h2>{val.title}</h2>
          </div>
          <div className="mrp">
            <h6 className="user-type">{val.lable}</h6>
          </div>

          <a
            href="javascript:void(0)"
            data-cb-type="checkout"
            data-cb-plan-id="smapp_monthly"
            data-cb-plan-quantity={val.planQty}
            onClick="Chargebee.registerAgain(product.addCoupon(SMAPPWORKS)) "
            className="btn btn-custom theme-color"
            role="button"
          >
            Click Here
          </a>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">{DataList}</div>
        </div>
      </div>
    </section>
  );
};

export default Promo;

//<a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="smapp_monthly" data-cb-plan-quantity="1" >subscribe</a>
