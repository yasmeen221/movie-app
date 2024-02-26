import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { languageContext } from "../context/language";

const Header = () => {
  const { language, setLanguage } = useContext(languageContext);

  return (
    <>
      <Navbar style={{ backgroundColor: "#d7b700" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "black" }}>
            Movie App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "black" }} as={Link} to="/">
              MovieLists
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} as={Link} to="/login">
              LogIn
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link>
              <select
                style={{
                  color: "black",
                  border: "none",
                  backgroundColor: "#d7b700",
                  outline: "none",
                  cursor: "pointer",
                }}
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              >
                <option
                  onClick={() => (language !== "en" ? setLanguage("en") : null)}
                  value="en"
                >
                  English
                </option>
                onClick={() => (language !== "ar" ? setLanguage("ar") : null)}
                <option value="ar">Arabic</option>
              </select>
            </Nav.Link>
            <Nav.Link
              style={{ color: "black", marginLeft: "600px", display: "flex" }}
              as={Link}
              to="/watchlists"
            >
              {/* <NavDropdown
              value={languages}
              onChange={(e)=>handleLanguageChange(e.target.value)}
                style={{ Color: "black" }}
                id="nav-dropdown"
                title="Language"
                // menuVariant="black"
              >
                <NavDropdown.Item value="en">english</NavDropdown.Item>
                <NavDropdown.Item value="ar">Arabic</NavDropdown.Item>
              </NavDropdown> */}
              <FontAwesomeIcon
                icon={faHeart}
                style={{ margin: "6px 10px 0px 0px" }}
              />
              WatchLists
              {/* <span>count</span> */}
            </Nav.Link>
          </Nav>

          {/* <p style={{ fontSize: "14px" }}>
            {" "}
            <FontAwesomeIcon
              icon={faHeart}
              style={{ margin: "6px 10px 0px 0px" }}
            />
            WatchHistory
          </p> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
