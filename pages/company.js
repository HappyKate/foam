import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";
import ButtonShare from "../components/ButtonShare";

const Company = () => (
    <div className="shadow">
      <Header />
      <div className="container mt-5 md-5">
        <div className={"col"}>
          <p className="company_content">
            Наша компания выполняет качественную и эффективную теплоизоляцию малых
            и средних объектов очень востребованную на сегодняшний день. Многие
            владельцы недвижимости испытавшие на себе устаревшие утеплители, до
            сих пор уворачиваются от последствий, отсутствие должного результата
            только подогревает интерес в утеплении ППУ.
          </p>
          <p className="company_content">
            В фирмах часто используются громоздкие установки высокого давления в
            результате малые и средние объекты остаются без внимания, на которых и
            сделан наш основной акцент. И это лишь основная грань нашей
            деятельности. Также, нами выполняются сварочные работы: капремонт
            систем отопления, водоснабжения, ограждения, решетки,перила,входные
            группы. Совокупность вариативных услуг, имеет определенные скидки.
          </p>
          <p className="company_content">Достоинства ППУ:</p>
          <ul>
            <li>Средний срок службы 40 лет</li>
            <li>Не требует крепежных элементов</li>
            <li>Экологически чистый материал</li>
            <li>Скорость нанесения до 200 кв.м за 1 рабочий день</li>
            <li>Низкая теплопроводность</li>
            <li>Не гниет</li>
            <li>Не является пищей для грызунов и насекомых (муравьев и тд)</li>
            <li>Включает в себя свойства: паро-, ветро-, гидроизоляции</li>
            <li>Не утяжеляет конструкции здания</li>
            <li>Не подвержен возникновению грибка.</li>
          </ul>
          <p className="company_content mb-5">
            Кроме всех перечисленных достоинств данного материала, он является
            отличным звукоизолятором, обладает высокой прочностью и индивидуальной
            манерой нанесения.
          </p>
        </div>
        <ButtonShare />
      </div>

      <Footer />
      <style global jsx>{`
      .company {
        background-image: url("/Karkasa majas siltinasana ar poliuretana putam.jpg");
        height: 250px;
        background-repeat: no-repeat, repeat;
        background-position: center;
        background-size: cover;
      }
      .company_content,
      li {
        font-size: 2.5vh;
        font-family: Helvetica Neue, Arial, sans-serif;
        font-weight: 200;
        text-indent: 1.5em;
      }
    `}</style>
    </div>
);

export default Company;

