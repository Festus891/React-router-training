import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Dear cutomer your order has been confirmed</div>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export default OrderSummary;
