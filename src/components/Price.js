import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Price = () => {
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

  const options = {
    dots: false,
    arrows: false,
    accessibility: false,
    infinite: true,
    margin: 30,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Dynamic Price Data Easy to Update
  let data = [
    {
      title: "Starter",
      lable: "Get your business started",
      price: "30",
      features:
        "<li>1 GB of space</li><li>real time sync</li><li>unlimited attachments</li><li>email support</li>",
      link: "#",
      planQty: "1",
    },
    {
      title: "Business",
      lable: "Take it to the next level",
      price: "25",
      features:
        "<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>priority email support</li><li>Minimum 6 Users</li>",
      link: "#",
      planQty: "6",
    },
    {
      title: "Enterprise",
      lable: "Our biggest plan",
      price: "20",
      features:
        "<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>Priority Email Support</li><li>Dedicated Account Manager</li><li>Minimum 26 Users</li>",
      link: "#",
      planQty: "25",
    },
  ];

  // Dynamic Price Data Loop
  let DataList = data.map((val, i) => {
    return (
      <div className="price-item d-flex" key={i}>
        <div className="price-block">
          <div className="price-type" style={bgImg}>
            <h2>{val.title}</h2>
          </div>
          <div className="mrp">
            <h6 className="user-type">{val.lable}</h6>
            <div className="price-devide"></div>
            <h2>${val.price}</h2>
            <h6 className="price-year">per month</h6>
            <div className="price-devide"></div>
          </div>
          <ul
            className="price-feature"
            dangerouslySetInnerHTML={{ __html: val.features }}
          ></ul>
          <a
            href="javascript:void(0)"
            data-cb-type="checkout"
            data-cb-plan-id="smapp_monthly"
            data-cb-plan-quantity={val.planQty}
            onClick="Chargebee.registerAgain()"
            className="btn btn-custom theme-color"
            role="button"
          >
            Select Plan
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="price" className="price" style={priceBg}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Slider
              className="price-carousel owl-carousel owl-theme slick-margin"
              {...options}
            >
              {" "}
              {DataList}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;

//<a href="javascript:void(0)" data-cb-type="checkout" data-cb-plan-id="smapp_monthly" data-cb-plan-quantity="1" >subscribe</a>
