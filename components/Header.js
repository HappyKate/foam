import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import App from "./App";

function Header() {
  let text = "";
  let className = "mine";
  const router = useRouter();
  if (router.pathname === "/prices") {
    text = "Услуги и цены";
    className = "prices";
  }
  if (router.pathname === "/work") {
    text = "Примеры работ";
    className = "work";
  }
  if (router.pathname === "/company") {
    text = "О нас";
    className = "company";
  }
  if (router.pathname === "/contact") {
    text = "Контакты";
    className = "contact";
  }
  return (
      <div className={`${className}`}>
        <App />
        <header>
          <div className="container">
            <Navbar expand="lg" variant="dark">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="col-9">
                  <Link href="/">
                    <a>ГЛАВНАЯ</a>
                  </Link>
                  <Link href="/prices">
                    <a>УСЛУГИ И ЦЕНЫ</a>
                  </Link>
                  <Link href="/work">
                    <a>ПРИМЕРЫ РАБОТ</a>
                  </Link>
                  <Link href="/company">
                    <a>О НАС</a>
                  </Link>
                  <Link href="/contact">
                    <a>КОНТАКТЫ</a>
                  </Link>
                </Nav>
                <div className="btn-group-vertical">
                  <Button
                      type="button"
                      className="btn btn-warning"
                      href={"tel:+79504951078"}
                  >
                    +7(950)495-10-78
                  </Button>
                </div>
              </Navbar.Collapse>
            </Navbar>
            <h3 id="text">{text}</h3>
          </div>
          <style global jsx>{`
          a {
            color: white;
            font-family: Arial Narrow, sans-serif;
            font-weight:400;
            font-size: 1rem;
            margin-right: 4rem;
          }
          .navbar-expand-lg {
            padding-left: 0;
          }
          a:hover {
            color: #ffd178;!important;
            text-decoration: none;
          }
          .btn-warning {
            color: black;
            background-color: #ffd178;
            border-color: #ffd178;
            font-family: Arial Narrow, sans-serif;
          }
          .btn-warning:hover {
            color: white;
            background-color: #ffd178;
            border-color: #ffd178;
          }
          .btn-warning:active {
          color: #ffd178;
          }
          header {
          padding-top: 10px;
            background-color: rgba(0, 0, 0, 0.5);
            height: 250px;
          }
          #text {
            color: white;
            font-size: 2.7rem;
            margin-top: 4.1rem;
            font-family: Arial Narrow, sans-serif;
            font-weight: 600;
          }
        `}</style>
        </header>
      </div>
  );
}

export default Header;


