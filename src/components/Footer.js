import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <section className="p-0">
        <div className="container-fluid">
          <div className="bottom-section">
            <div className="row">
              <div className="col-md-6 p-0">
                <div className="address-bar">
                  <div>
                    <ul className="footer-style">
                      <li>
                        <div className="footer-icon">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/locate.png`}
                            alt="locate"
                          />
                        </div>
                        <div className="footer-address">
                          <a
                            href="javascript"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            Near Sacramento, USA
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-icon">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/telephone.png`}
                            alt="telephone"
                          />
                        </div>
                        <div className="footer-address">
                          <a href="tel:+18884476277">
                            (888) 44-SMAPP / (888) 447-6277
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-icon">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/fotter-email.png`}
                            alt="fotter-email"
                          />
                        </div>
                        <div className="footer-address">
                          <a href="mailto:support@smapp.works">
                            support@smapp.com
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-icon">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/fax.png`}
                            alt=""
                          />
                        </div>
                        <div className="footer-address">
                          <a href="tel:+18884476277">(888) 447-6277</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <iframe
                  title="google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.56398137123!2d-121.58299673012544!3d38.56165047910054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1591460676456!5m2!1sen!2sus"
                  allowFullScreen
                  className="md-height"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copyright-section index-footer">
        <p>2021 copyright by Smapp, Inc.</p>
      </div>

      <div className="tap-top">
        <div>
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
      <div id="fb-root"></div>
      {/*Your customer chat code*/}
      <div
        className="fb-customerchat"
        page_id=""
        theme_color="#18e7d3"
        logged_in_greeting=""
        logged_out_greeting=""
      ></div>
    </div>
  );
};

export default Footer;
