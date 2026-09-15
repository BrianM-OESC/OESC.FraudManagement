
import { Link } from "react-router-dom";
import {
    Container,
    Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../assets/logo";

export default function DisassociateSsnPage({ title }: { title: string }) {
    return (
        <div className="app-shell">
            <Navbar className="app-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="brand">
                        <Logo />
                        <div>
                            <div className="brand-name">OESC</div>
                            <div className="brand-subtitle">Fraud Management</div>
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <main className="inner-page">
                <Container>
                    <Link to="/" className="back-link">
                        ← Back to Fraud Management
                    </Link>
                    <h1>{title}</h1>
                    <p className="inner-page-description">
                        This is the starting point for the {title.toLowerCase()} process.
                        Replace this placeholder with your vertical slice UI.
                    </p>
                </Container>
            </main>

            <footer className="app-footer">
                <Container>
                    <div className="footer-content">
                        <span>OESC Fraud Management</span>
                        <span>© {new Date().getFullYear()} OESC</span>
                    </div>
                </Container>
            </footer>
        </div>
    );
}