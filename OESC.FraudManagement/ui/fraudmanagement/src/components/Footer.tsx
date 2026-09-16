import {
    Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo";

export default function Footer() {
    return (
        <footer className="app-footer">
            <Container>
                <div className="footer-content">
                    <div className="footer-brand">
                        <Logo />
                    </div>
                    <div className="footer-right">
                        <span>Oklahoma Employment Security Commission</span>
                        <span>© {new Date().getFullYear()} OESC</span>
                    </div>
                </div>
            </Container>
        </footer>
    )
}