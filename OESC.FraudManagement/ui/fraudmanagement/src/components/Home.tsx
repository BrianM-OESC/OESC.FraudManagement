import { Link, useLocation } from "react-router-dom";
import {
    Button,
    Card,
    Col,
    Container,
    Row,
} from "react-bootstrap";
import {
    ArrowRight,
    ArrowDown,
    ClipboardCheck,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Navbar";
import Footer from "../components/Footer";
import Icon from "../assets/icon";
import { useEffect } from "react";

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

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#fraud-options") {
            const element = document.getElementById("fraud-options");

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, [location]);

    return (
        <div className="app-shell">
            <NavbarComponent />
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

            <Footer />
        </div>
    );
}