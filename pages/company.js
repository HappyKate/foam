import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";

const Company = () => (
  <>
    <Header />
    <div className="container mt-5 md-5">
      <div className={"col"}>
        <p id={"content"}>
          Наша компания выполняет качественную и эффективную теплоизоляцию малых
          и средних объектов очень востребованную на сегодняшний день. Многие
          владельцы недвижимости испытавшие на себе устаревшие утеплители, до
          сих пор уворачиваются от последствий, отсутствие должного результата
          только подогревает интерес в утеплении ППУ.</p><p> В фирмах часто
          используются громоздкие установки высокого давления в результате малые
          и средние объекты остаются без внимания, на которых и сделан наш
          основной акцент. И это лишь основная грань нашей деятельности. Также,
          нами выполняются сварочные работы: капремонт систем отопления,
          водоснабжения, ограждения, решетки,перила,входные группы. Совокупность
          вариативных услуг, имеет определенные скидки.
        </p>
      </div>
    </div>
    <Footer/>
      <style global jsx>{`
      .company{
      background-image: url("/Karkasa majas siltinasana ar poliuretana putam.jpg");
      height: 250px;
      background-repeat: no-repeat, repeat;
      background-position: center;
      background-size: cover;
  }
  `}</style>
  </>
);

export default Company;
