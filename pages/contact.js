import Header from "../components/Header";
import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import ButtonShare from "../components/ButtonShare";
const Contact = () => (
    <>
      <Header />
      <div className="container">
        <h4 className="text-center mt-5">СВЯЖИТЕСЬ С НАМИ</h4>
        <div className="col-sm-12 offset-sm-0 col-md-6 offset-md-3 mb-5">
          <div className="col text-center mt-3 md-3">
            <Card.Body>
              <a className="telContact" href={"tel:+79504951078"}>
                <img id="imgContact" src="/icons8-телефон-50.png" alt=".." />
                +7(950)495-10-78
              </a>
              <p className="contact_name">Андрей</p>
              <a id="socialimg" href="https://vk.com/sudar78">
                <img
                    id="imgContact"
                    src="/icons8-вконтакте-50.png"
                    alt="my image"
                />
                - https://vk.com/sudar78
              </a>
              <p> </p>
              <a id="socialimg" href="https://vk.com/sudar78">
                <img id="imgContact" src="/icons8-почта-50.png" alt="my image" />{" "}
                - https://vk.com/sudar78
              </a>
              <p className="contact_name mt-2">г. Тобольск</p>
            </Card.Body>
          </div>
        </div>
        <ButtonShare />
      </div>
      <style global jsx>{`
      .telContact {
        color: black;
        margin-right: 0;
        font-size: 2.5vh;
        font-family: Helvetica Neue, Arial, sans-serif;
        font-weight: 200;
      }
      .contact_name {
        font-size: 2.5vh;
        font-family: Helvetica Neue, Arial, sans-serif;
        font-weight: 200;
      }
      #socialimg {
        color: black;
        margin-right: 0;
        font-size: 2.5vh;
        font-family: Helvetica Neue, Arial, sans-serif;
        font-weight: 200;
      }
      #socialimg:hover {
        color: #ffd178;
      }

      .telContact:hover {
        color: #ffd178;
      }
      #imgContact {
        width: 25px;
        height: 25px;
      }
      h4 {
        color: #ffd178;
        font-family: Arial Narrow, sans-serif;
      }
      .contact {
        background-image: url("/Commerical-Spray-foam-image-2.jpg");
        height: 250px;
        background-repeat: no-repeat, repeat;
        background-position: center;
        background-size: cover;
      }
    `}</style>
      <Footer />
    </>
);

export default Contact;
