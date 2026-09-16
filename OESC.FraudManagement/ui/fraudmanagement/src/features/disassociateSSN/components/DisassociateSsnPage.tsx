
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
    Stack,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../../../components/Navbar";
import Footer from "../../../components/Footer";

type DisassociateSsnRecord = {
    claimantSsn: string;
    effectiveDate: string;
    claimantFirstName: string;
    claimantMiddleInitial: string;
    claimantLastName: string;
    batch: string;
    claimId: string;
    notes: string;
    addedBy: string;
};

const emptyRecord: DisassociateSsnRecord = {
    claimantSsn: "",
    effectiveDate: "",
    claimantFirstName: "",
    claimantMiddleInitial: "",
    claimantLastName: "",
    batch: "",
    claimId: "",
    notes: "",
    addedBy: "",
};

export default function DisassociateSsnPage({
    title,
}: {
    title: string;
}) {
    const [record, setRecord] =
        useState<DisassociateSsnRecord>(emptyRecord);

    const [records, setRecords] = useState<DisassociateSsnRecord[]>([]);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = event.target;

        setRecord((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
        setSuccess("");
    };

    const addRecord = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValidated(true);
        setError("");
        setSuccess("");

        if (
            !record.claimantSsn.trim() ||
            !record.effectiveDate ||
            !record.claimantFirstName.trim() ||
            !record.claimantLastName.trim()
        ) {
            setError("Please complete all required fields.");
            return;
        }

        setRecords((previous) => [...previous, record]);
        setRecord(emptyRecord);
        setValidated(false);
    };

    const removeRecord = (index: number) => {
        setRecords((previous) =>
            previous.filter((_, recordIndex) => recordIndex !== index)
        );
    };

    const submitBatch = async () => {
        if (records.length === 0) {
            setError("Add at least one record before submitting.");
            return;
        }

        setError("");
        setSuccess("");

        // TODO: API endpoint to save to DB and run updates.
        // await fetch("/api/disassociate-ssn", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(records),
        // });

        console.log("Submitting batch:", records);
        setSuccess(
            `${records.length} record(s) ready for submission.`
        );
    };

    return (
        <div className="app-shell">
            <NavbarComponent />

            <main className="inner-page">
                <Container>
                    <Link to="/" className="back-link">
                        ← Back to Fraud Management
                    </Link>

                    <div className="inner-page-header d-flex flex-column align-items-center">
                        <h1>{title}</h1>
                        <p className="inner-page-description">
                            Add one or more claimant SSN disassociation
                            records, then submit them as a batch.
                        </p>
                    </div>

                    <Card className="fraud-form-card">
                        <Card.Body>
                            <div className="form-section-heading">
                                <h2>New Record Information</h2>
                                <p>
                                    Fields marked with{" "}
                                    <span className="required-mark">*</span>{" "}
                                    are required.
                                </p>
                            </div>

                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={addRecord}
                            >
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group controlId="claimantSsn">
                                            <Form.Label>
                                                Claimant SSN{" "}
                                                <span className="required-mark">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="claimantSsn"
                                                value={record.claimantSsn}
                                                onChange={handleChange}
                                                placeholder="Enter claimant SSN"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Claimant SSN is required.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="effectiveDate">
                                            <Form.Label>
                                                Effective Date{" "}
                                                <span className="required-mark">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="effectiveDate"
                                                value={record.effectiveDate}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Effective Date is required.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={5}>
                                        <Form.Group controlId="claimantFirstName">
                                            <Form.Label>
                                                Claimant First Name{" "}
                                                <span className="required-mark">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="claimantFirstName"
                                                value={record.claimantFirstName}
                                                onChange={handleChange}
                                                placeholder="First name"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                First name is required.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={2}>
                                        <Form.Group controlId="claimantMiddleInitial">
                                            <Form.Label>
                                                Middle Initial
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="claimantMiddleInitial"
                                                value={record.claimantMiddleInitial}
                                                onChange={handleChange}
                                                maxLength={1}
                                                placeholder="M"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={5}>
                                        <Form.Group controlId="claimantLastName">
                                            <Form.Label>
                                                Claimant Last Name{" "}
                                                <span className="required-mark">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="claimantLastName"
                                                value={record.claimantLastName}
                                                onChange={handleChange}
                                                placeholder="Last name"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Last name is required.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-3 mt-1">
                                    <Col md={6}>
                                        <Form.Group controlId="batch">
                                            <Form.Label>Batch</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="batch"
                                                value={record.batch}
                                                onChange={handleChange}
                                                placeholder="Batch number"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="claimId">
                                            <Form.Label>
                                                Claim ID
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="claimId"
                                                value={record.claimId}
                                                onChange={handleChange}
                                                placeholder="Original claim ID"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="addedBy">
                                            <Form.Label>Added By</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="addedBy"
                                                value={record.addedBy}
                                                onChange={handleChange}
                                                placeholder="User name"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="notes">
                                            <Form.Label>Notes</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                name="notes"
                                                value={record.notes}
                                                onChange={handleChange}
                                                placeholder="Additional notes"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {error && (
                                    <Alert
                                        variant="danger"
                                        className="mt-4 mb-0"
                                    >
                                        {error}
                                    </Alert>
                                )}

                                <Stack
                                    direction="horizontal"
                                    gap={2}
                                    className="mt-4"
                                >
                                    <Button
                                        type="submit"
                                        className="btn-primary-custom"
                                    >
                                        + Add Record
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="outline-secondary"
                                        onClick={() => {
                                            setRecord(emptyRecord);
                                            setValidated(false);
                                            setError("");
                                        }}
                                    >
                                        Clear Form
                                    </Button>
                                </Stack>
                            </Form>
                        </Card.Body>
                    </Card>

                    {records.length > 0 && (
                        <Card className="fraud-form-card mt-4">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                                    <div>
                                        <h2 className="batch-heading">
                                            Records to Submit
                                        </h2>
                                        <p className="mb-0 text-muted">
                                            {records.length} record(s) in
                                            this batch
                                        </p>
                                    </div>

                                    <Button
                                        className="btn-primary-custom"
                                        onClick={submitBatch}
                                    >
                                        Submit Batch
                                    </Button>
                                </div>

                                {success && (
                                    <Alert variant="success">
                                        {success}
                                    </Alert>
                                )}

                                <div className="table-responsive">
                                    <table className="table align-middle fraud-records-table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>SSN</th>
                                                <th>Effective Date</th>
                                                <th>Claimant Name</th>
                                                <th>Batch</th>
                                                <th>Claim ID</th>
                                                <th>Added by</th>
                                                <th>Notes</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {records.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.claimantSsn}</td>
                                                    <td>
                                                        {item.effectiveDate}
                                                    </td>
                                                    <td>
                                                        {item.claimantFirstName}{" "}
                                                        {item.claimantMiddleInitial &&
                                                            `${item.claimantMiddleInitial}. `}
                                                        {item.claimantLastName}
                                                    </td>
                                                    <td>{item.batch || "—"}</td>
                                                    <td>{item.claimId || "-"}</td>
                                                    <td>{item.addedBy || "-"}</td>
                                                    <td>{item.notes || "-"}</td>
                                                    <td>
                                                        <Button
                                                            size="sm"
                                                            variant="outline-danger"
                                                            onClick={() =>
                                                                removeRecord(
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
}