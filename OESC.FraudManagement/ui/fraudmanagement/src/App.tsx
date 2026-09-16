
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import DisassociateSsnPage from "./features/disassociateSSN/components/DisassociateSsnPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/disassociation"
                    element={<DisassociateSsnPage title="Fraudulent SSN Disassociation" />}
                />
            </Routes>
        </BrowserRouter>
    );
}