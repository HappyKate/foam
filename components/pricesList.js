import React from "react";

const PricesList = () => (
    <>
      <hr />
      <div className="mt-2 md-5">
        <h2 className="text-center mt-4">ПРАЙС ЛИСТ:</h2>
      </div>
      <div className="mt-3">
        <h5 className="prices_title">Напыление жесткого пенополиуретана (ППУ)</h5>
        <div className="row mt-2">
          <p className="prices_content col">
            ППУ (плотность 30-40 кг/м3) ОЛЩИНА СЛОЯ, СМ
          </p>
          <p className="prices_content col">3</p>
          <p className="prices_content col">5</p>
          <p className="prices_content col">10</p>
        </div>
        <div className="row">
          <p className="prices_content col">Стоимость напыления руб/м2</p>
          <p className="prices_content col">800</p>
          <p className="prices_content col">1100</p>
          <p className="prices_content col">1500</p>
        </div>
        <h5 className="prices_title mt-4">
          Напыление открытоячеистого пенополиуретана (ППУ)
        </h5>
        <div className="row mt-2">
          <p className="prices_content col">
            ППУ (плотность 12-16 кг/м3) ТОЛЩИНА СЛОЯ, СМ
          </p>
          <p className="prices_content col">3</p>
          <p className="prices_content col">5</p>
          <p className="prices_content col">10</p>
        </div>
        <div className="row mb-5">
          <p className="prices_content col">Стоимость напыления руб/м2</p>
          <p className="prices_content col">500</p>
          <p className="prices_content col">700</p>
          <p className="prices_content col">1000</p>
        </div>
        <div className="row">
          <div className="col">
            <h5 className="prices_title">Стоимость включает в себя:</h5>
            <p className="prices_content">- стоимость сырь</p>
            <p className="prices_content">- напыление Пенополиуретана</p>
          </div>
          <div className="col mb-5">
            <h5 className="prices_title">Окончательная цена зависит от:</h5>
            <p className="prices_content">- объема работ</p>
            <p className="prices_content">- удобства доступа</p>
            <p className="prices_content">- температуры окружающей среды</p>
            <p className="prices_content">- способа оплаты и других факторов</p>
          </div>
        </div>
      </div>
      <style global jsx>{`
      h2 {
        color: #ffd178;
        font-family: Arial Narrow, sans-serif;
      }
      .prices_content {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-weight: 200;
      }
    `}</style>
    </>
);

export default PricesList;
