import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p className="text-muted">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary fw-bold mt-3">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
