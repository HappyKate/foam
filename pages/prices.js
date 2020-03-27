import Header from "../components/Header";
import React from "react";
import PricesList from "../components/pricesList";
import ServicesList from "../components/servicesList";
import services from "../components/data/services";
import Footer from "../components/Footer";
function Prices() {
  const [list] = [services];
  return (
    <>
      <Header />
      <div className="container">
        <h3 className="mt-5 text-center">
          НАША КОМПАНИЯ ПРЕДЛАГАЕТ СЛЕДУЮЩИЕ ВИДЫ УСЛУГ:
        </h3>
        <div className="row mt-3">
          {list.map(el => (
            <ServicesList key={el.id} element={el} />
          ))}
        </div>
        <PricesList />
      </div>
      <Footer />
      <style global jsx>{`
        h3 {
          color: #ffd178;
          font-family: Arial Narrow, sans-serif;
        }
        .prices {
          background-image: url("/VAN_4743_(1).jpg");
          height: 250px;
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </>
  );
}

export default Prices;
