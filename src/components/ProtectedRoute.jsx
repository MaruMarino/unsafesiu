import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ authorized }) => {

    return authorized === true ? <Outlet /> : <Navigate to="/unauthorized" />;

};

export default ProtectedRoute;
