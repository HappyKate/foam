import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => (
    <>
        <div className="home">
            <Header />
            <div className="home_shadow text-center">
                <div className="container">
                    <h1 className="home_title pt-4">Добро пожаловать!</h1>
                    <div className="col-sm-12 offset-sm-0 col-md-6 offset-md-3 mt-1 mb-5">
                        <p className="home_content ">
                            Утепление пенополиуретаном домов, бань, квартир, балконов,
                            ангаров, стен, перекрытий, кровли, подвалов, фундаментов, крыш,
                            трубопроводов.
                            <br />В г. Тобольске
                        </p>
                    </div>
                </div>
            </div>
            <style global jsx>{`
        .home {
          background-image: url("/besshovnyj-uteplitel-dlja-sten-fundamenta.jpg");
          height: 1000px;
          background-position: center;
          background-repeat: no-repeat, repeat;
          background-size: cover;
        }
        .home_shadow {
          background-color: rgba(0, 0, 0, 0.5);
          height: 80%;
        }
        .home_title {
          color: #ffd178;
          font-family: Arial Narrow, sans-serif;
        }
        .home_content {
          color: white;
          font-size: 3vh;
          font-family: Helvetica Neue, Arial, sans-serif;
          font-weight: 200;
        }
      `}</style>
        </div>
        <Footer />
    </>
);

export default Index;
