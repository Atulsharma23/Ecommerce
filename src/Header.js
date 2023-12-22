import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();

  console.log(user);

  function Logout() {
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link href="./productlist">Product List</Nav.Link>
                <Nav.Link href="./addproduct">Add Product</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="./register"> Registration</Nav.Link>
                <Nav.Link href="./login">Log in</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
        <Nav>
          {user && (
            <NavDropdown title={user.name}>
              <NavDropdown.Item> Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
