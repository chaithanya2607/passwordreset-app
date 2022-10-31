import React from "react";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <a style={{ color: "white" }} className="navbar-brand" href="#">
            PASSWORD RESET APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          ></button>
        </nav>
      </div>
    </div>
  );
}
