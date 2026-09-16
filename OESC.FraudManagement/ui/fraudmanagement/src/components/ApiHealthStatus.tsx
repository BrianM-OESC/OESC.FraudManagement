import { useEffect, useState } from "react";

interface HealthResponse {
    status: string;
    message: string;
    timestamp: string;
}

export default function ApiHealthStatus() {

    const [health, setHealth] = useState<HealthResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/health")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("API health check failed");
                }

                return response.json();
            })
            .then((data: HealthResponse) => setHealth(data))
            .catch((error) => {
                setError("Error checking API health");
                console.error("Error checking API health:", error);
            });
    }, []);

    const isHealthy = health?.status.toLowerCase() === "healthy";

    return (
        <div className="api-health-status">
            <span
                className={`health-dot ${isHealthy ? "healthy" : "unhealthy"
                    }`}
            />
            <span>
                {error || !isHealthy
                    ? "API Unavailable"
                    : "API Connected"}
            </span>
        </div>
    );
}