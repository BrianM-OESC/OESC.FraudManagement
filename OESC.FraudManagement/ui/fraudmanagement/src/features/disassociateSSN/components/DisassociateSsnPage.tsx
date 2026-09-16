
import { Link } from "react-router-dom";
import {
    Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function DisassociateSsnPage({ title }: { title: string }) {
    return (
        <div className="app-shell">
            <NavbarComponent />
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
            <Footer />
        </div>
    );
}