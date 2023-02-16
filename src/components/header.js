import React from "react";

export const Header = () => {
  return (
    <div className="bg-primary p-3">
      <header className="d-flex justify-content-between  text-white ">
        <h3>DK design studio</h3>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link active  text-light"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-light">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  text-light">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
