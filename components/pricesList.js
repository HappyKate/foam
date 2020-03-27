import React from "react";

const PricesList = () => (
  <>
    <div className="mt-2 md-5">
      <h2 className="text-center">ПРАЙС ЛИСТ:</h2>
    </div>
    <div className="mt-3">
      <h5> Напыление жесткого пенополиуретана (ППУ)</h5>
      <div className="row mt-2">
        <div className="col">
           ППУ (плотность 30-40 кг/м3) ОЛЩИНА СЛОЯ, СМ                        
        </div>
        <div className="col">3</div>
        <div className="col">5</div>
        <div className="col">10</div>
      </div>
      <div className="row">
        <div className="col">Стоимость нападения руб/м2</div>
        <div className="col">800</div>
        <div className="col">1100</div>
        <div className="col">1500</div>
      </div>
      <h5 className="mt-4">Напыление открытоячеистого пенополиуретана (ППУ)</h5>
      <div className="row mt-2">
        <div className="col">ППУ (плотность 12-16 кг/м3) ТОЛЩИНА СЛОЯ, СМ</div>
        <div className="col">3</div>
        <div className="col">5</div>
        <div className="col">10</div>
      </div>
      <div className="row mb-5">
        <div className="col">Стоимость напыления руб/м2</div>
        <div className="col">500</div>
        <div className="col">700</div>
        <div className="col">1000</div>
      </div>
      <div className="row mt-4">
        <div className="col mt-4">
          <h5>Стоимость включает в себя:</h5>
          <p>- стоимость сырь</p>
          <p>- напыление Пенополиуретана</p>
        </div>
        <div className="col mt-4">
          <h5>Окончательная цена зависит от:</h5>
          <p>- объема работ</p>
          <p>- удобства доступа</p>
          <p>- температуры окружающей среды</p>
          <p>- способа оплаты и других факторов</p>
        </div>
      </div>
    </div>
    <style global jsx>{`
      h2 {
        color: #ffd178;
        font-family: Arial Narrow, sans-serif;
      }
    `}</style>
  </>
);

export default PricesList;
