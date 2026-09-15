import { Link } from "react-router-dom";
import {
    Button,
    Card,
    Col,
    Container,
    Nav,
    Navbar,
    Row,
} from "react-bootstrap";
import {
    ArrowRight,
    ArrowDown,
    ClipboardCheck,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo";

const fraudOptions = [
    {
        title: "Fraudulent SSN Disassociation",
        description:
            "Manage fraudulent SSN disassociation and update associated records.",
        icon: <ClipboardCheck size={30} strokeWidth={1.7} />,
        path: "/disassociation",
        label: "Manage fraudulent SSN disassociation",
    },
];

function Icon() {
    return (
        <div className="oesc-icon">
            <img
                src="/oesc-icon.svg"
                alt="OESC icon"
            />
        </div>
    )
}

export default function HomePage() {
    return (
        <div className="app-shell">
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
                            <Nav.Link href="#fraud-options" className="nav-link-custom">
                                Fraud Options
                            </Nav.Link>
                            <Nav.Link href="https://cdlt.oesc.ok.gov/" className="nav-link-custom">
                                Agency Service Tools
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <section className="hero-section">
                    <Container>
                        <Row className="align-items-center g-5">
                            <Col lg={7} className="d-flex flex-column align-items-center text-center">
                                <h1 className="hero-title">
                                    OESC Fraud
                                    <br />
                                    <span>Management</span>
                                </h1>

                                <p className="hero-description">
                                    A centralized workspace for managing fraud processes.
                                </p>

                                <div className="hero-actions">
                                    <Button
                                        as="a"
                                        href="#fraud-options"
                                        className="primary-button"
                                    >
                                        Explore fraud options <ArrowDown size={18} />
                                    </Button>

                                </div>
                            </Col>

                            <Col lg={5}>
                                <div className="hero-visual">
                                    <div className="visual-orbit orbit-one" />
                                    <div className="visual-orbit orbit-two" />
                                    <div className="visual-center">
                                        <Icon />
                                    </div>
                                    <div className="visual-label label-top">
                                        <span className="status-dot" />
                                        Fraud Operations
                                    </div>
                                    <div className="visual-label label-bottom">
                                        <span>OESC</span>
                                        <small>Centralized Management</small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="options-section" id="fraud-options">
                    <Container>
                        <div className="section-heading">
                            <div>
                                <span className="section-eyebrow">WORKSPACE</span>
                                <h2>Choose an option</h2>
                                <p>Select a fraud-management process to get started.</p>
                            </div>
                        </div>

                        <Row className="g-4 justify-content-center">
                            {fraudOptions.map((option, index) => (
                                <Col key={option.path} xs={10} sm={7} md={6} xl={4}>
                                    <Card
                                        as={Link}
                                        to={option.path}
                                        className="option-card h-100"
                                    >
                                        <Card.Body>
                                            <div className="card-topline">
                                                <span className="card-number">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <div className="card-icon">{option.icon}</div>
                                            </div>

                                            <Card.Title>{option.title}</Card.Title>
                                            <Card.Text>{option.description}</Card.Text>

                                            <div className="card-link">
                                                {option.label}
                                                <ArrowRight size={18} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </main>

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
        </div>
    );
}