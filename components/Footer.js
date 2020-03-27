import React from "react";

const Footer = () => (
  <>
    <div className="footer  mt-5 md-5">
      <div id="columns" className="container">
        <div id="sit" className="col mt-3">
          <p>
            Разработка сайта -
            <a id={"git"} href={"https://github.com/HappyKate"}>
              HappyKate
            </a>
          </p>
        </div>
        <div id="social" className="col">
          <a href="https://vk.com/sudar78">
            <img id="imgFooter" src="/icons8-вконтакте-48.png" alt="my image" />
          </a>
          <a href="https://vk.com/sudar78">
            <img id="imgFooter" src="/icons8-whatsapp-50.png" alt="my image" />
          </a>
          <a href="https://vk.com/sudar78">
            <img
              id="imgFooter"
              src="/icons8-secured-letter-50.png"
              alt="my image"
            />
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer {
        background-color: #ffd178;
        height: 100px;
        margin-top: 150px;
      }
      p {
        font-family: Arial Narrow, sans-serif;
        font-size: 17px;
      }
      a:hover,
      a:focus {
        color: #ffd178;
      }
      #sit {
        font-size: 2vw;
        color: black;
        padding-top: 15px;
      }
      #social {
        padding-top: 34px;
      }
      #git {
        color: black;
        font-size: 17px;
      }
      #columns {
        columns: 2;
        text-align: center;
      }
      #imgFooter {
        width: 26px;
        height: 26px;
        margin-right: -1.5rem;
      }
      
      }
    `}</style>
  </>
);

export default Footer;
