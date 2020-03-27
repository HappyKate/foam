import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Header />
    <div className="container">
      <h1>Главная</h1>
    </div>
    <Footer />
    <style global jsx>{`
      .mine {
        background-image: url("/besshovnyj-uteplitel-dlja-sten-fundamenta.jpg");
        box-shadow: rgba(0, 0, 0, 0.5);
        height: 250px;
        background-repeat: no-repeat, repeat;
        background-position: center;
        background-size: cover;
      }
    `}</style>
  </>
);

export default Home;
