import React from "react";

const Footer = () => (
    <>
      <footer>
        <div className="container">
          <div className="row footer_year text-center">
            <p className="col-sm">
              Разработка сайта -
              <a className="footer_name" href="mailto:zlaaayya@gmail.com">
                zlaaayya@gmail.com
              </a>
            </p>
            <p className="col-sm">&copy; {new Date().getFullYear()} г. Тобольск</p>
          </div>
        </div>
      </footer>
      <style jsx>{`
      footer {
        background-color: #ffd178;
        padding-top: 3vh;
        padding-bottom: 3vh;
      }
      p {
        margin-bottom: 0;
      }
      .footer_year,
      .footer_name {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-weight: 200;
        color: black;
      }
      .footer_name:hover {
        color: white;
      }
    `}</style>
    </>
);

export default Footer;
