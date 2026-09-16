import { Link } from "react-router-dom";
import {
    Container,
    Nav,
    Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo";

export default function NavbarComponent() {
    return (
        <Navbar expand="lg" className="app-navbar" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} to="/" className="brand">
                    <Logo />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto align-items-lg-center gap-lg-3">
                        <Nav.Link as={Link} to="/" className="nav-link-custom">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/#fraud-options" className="nav-link-custom">
                            Fraud Options
                        </Nav.Link>
                        <Nav.Link as={Link} to="https://cdlt.oesc.ok.gov/" className="nav-link-custom">
                            Agency Service Tools
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}