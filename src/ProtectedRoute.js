// ProtectedRoute.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ cmp: Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/register");
    }
  }, [navigate]);

  return <Component />;
}

export default ProtectedRoute;
