
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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
    ClipboardCheck,
    FileSearch,
    LayoutDashboard,
    ShieldCheck,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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

function Logo() {
    return (
        <div className="brand-logo">
            <img
                src="/oesc-logo.svg"
                alt="OESC logo"
                className="oesc-logo"
            />
        </div>
    );
}

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

function HomePage() {
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
                            <Col lg={7}>
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
                                        Explore fraud options <ArrowRight size={18} />
                                    </Button>
                                    <span className="hero-note">
                                        <ShieldCheck size={18} />
                                        Secure operations workspace
                                    </span>
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

                        <Row className="g-4">
                            {fraudOptions.map((option, index) => (
                                <Col key={option.path} md={6} xl={3}>
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

function FraudPage({ title }: { title: string }) {
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

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/disassociation"
                    element={<FraudPage title="Fraudulent SSN Disassociation" />}
                />
            </Routes>
        </BrowserRouter>
    );
}