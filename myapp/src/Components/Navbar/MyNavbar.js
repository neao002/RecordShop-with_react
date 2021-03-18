import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Menu } from "react-bootstrap";
import UserContext from "../../ContextFolder/Context";

function MyNavbar() {
  const context = useContext(UserContext);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="d-flex align-items-center ml-3">
          <i
            className="fas fa-record-vinyl mr-3"
            style={{ fontSize: "3rem", color: "#353839" }}
          ></i>
          <h1
            style={{
              color: "#353839",
              fontWeight: "bolder",
              fontSize: "2rem",
            }}
            className="mt-2"
          >
            VINILO
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="navbar mx-auto justify-content-between"
            style={{ width: "400px" }}
          >
            <Nav.Link
              href="/"
              className="font-weight-bolder"
              style={{ fontSize: "1.2rem" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/bestsellers"
              className="font-weight-bolder"
              style={{ fontSize: "1.2rem" }}
            >
              Best Sellers
            </Nav.Link>
            <NavDropdown
              title="More"
              id="collasible-nav-dropdown"
              className="font-weight-bolder"
              style={{ fontSize: "1.2rem" }}
            >
              <NavDropdown.Item
                href="#action/3.1"
                className="dropdownItems font-weight-bolder"
              >
                Artist
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                className="dropdownItems font-weight-bolder"
              >
                Albums
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="dropdownItems font-weight-bolder"
              >
                Genres
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                href="#action/3.4"
                className="dropdownItems font-weight-bolder"
              >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {context.myStateData.loggedIn ? (
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "auto" }}
              >
                <NavLink to="/payment">
                  {context.myStateData.chart.length !== 0 ? (
                    <h5
                      className="font-weight-bolder"
                      style={{
                        marginLeft: "13px",
                        marginBottom: "0",
                        fontSize: "1.5rem",
                      }}
                    >
                      {context.myStateData.chart.length}
                    </h5>
                  ) : null}
                  <i
                    className="fas fa-shopping-cart"
                    style={{ fontSize: "1.9rem", marginTop: "-5px" }}
                  ></i>
                </NavLink>

                <div className="mt-1 text-center mx-3">
                  <p className="mb-0">Logged:</p>
                  <b style={{ fontSize: "1.3rem" }}>
                    {context.myStateData.userName}
                  </b>
                </div>
                <button
                  className="btn-dark mr-1 mt-1"
                  style={{ padding: "1px 4px", fontSize: "1.2rem" }}
                  onClick={() =>
                    context.myDispatch({
                      type: "LOGOUT",
                    })
                  }
                >
                  SING OUT
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-between">
                <button
                  onClick={() =>
                    context.myDispatch({
                      type: "BRING_POPUP",
                    })
                  }
                  className="btn-dark font-weight-bolder my-2 px-3"
                >
                  LOGIN
                </button>

                <button className="btn-secondary font-weight-bolder my-2 px-3">
                  SIGN UP
                </button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
