import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

function Connected() {
  const { connected } = useContext(AuthContext);
  console.info(connected);
  if (connected !== "connected") {
    return <Navigate to="/" replace/>
  }
  return (
    <div className="Connected">
      <Outlet />
    </div>
  );
}

export default Connected;
