import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

function Header() {
  let text = "Главная";
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
      <header>
        <div className="container">
          <Navbar expand="lg">
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
                <Button type="button" className="btn btn-warning" href={"tel:+79199560378"}>
                  +7(919)956-03-78
                </Button>
                <Button type="button" className="btn btn-warning" href={"tel:+79199432403"}>
                  +7(919)943-24-03
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
            font-size: 1rem;
            margin-right: 3rem;
            padding-left: 0;
          }
          .navbar-nav {
            padding-left: 0;
          }
          .navbar-expand-lg {
            padding-left: 0;
            padding-right: 0;
          }
          a:hover,
          a:active{
            color: #ffd178;
            text-decoration: none;
          }
          .navbar-light .navbar-toggler {
            color: black;
            border-color: rgba(0, 0, 0, 0.1);
          }

          .btn-warning {
            color: black;
            background-color: #ffd178;
            border-color: #ffd178;
            font-family: Arial Narrow, sans-serif;
          }

          .btn-warning:hover,
          .btn-warning:active,
          .btn-warning:focus {
            color: white;
            background-color: #ffd178;
            border-color: #ffd178;
          }
          header {
            background-color: rgba(0, 0, 0, 0.5);
            height: 250px;
          }
          #text {
            color: white;
            text-align: left;
            vertical-align: bottom;
            font-size: 2rem;
            margin-top: 4rem;
            font-family: Arial Narrow, sans-serif;
            font-weight: 600;
          }
        `}</style>
      </header>
    </div>
  );
}

export default Header;
