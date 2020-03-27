import Header from "../components/Header";
import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
const Contact = () => (
  <>
    <Header />
    <h4 className="text-center mt-5">СВЯЖИТЕСЬ С НАМИ</h4>
    <div className="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
      <div className="col text-center mt-3 md-3">
        <Card.Body>
          <a className="telContact" href={"tel:+79199560378"}>
            <img id="imgContact" src="/icons8-телефон-50.png" alt=".." />
            +7(919)956-03-78
          </a>
          <p>Валентин</p>
          <a className="telContact" href={"tel:+79199432403"}>
            <img id="imgContact" src="/icons8-телефон-50.png" alt=".." />
            +7(919)943-24-03
          </a>
          <p>Андрей</p>
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
            <img id="imgContact" src="/icons8-почта-50.png" alt="my image" /> -
            https://vk.com/sudar78
          </a>
          <p className="mt-2">г. Тобольск</p>
        </Card.Body>
      </div>
    </div>
    <style global jsx>{`
      .telContact {
        color: black;
        margin-right: 0;
      }
      p{
      font-family: Arial Narrow, sans-serif;
      }
      #socialimg {
        color: black;
        margin-right: 0;
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
