import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Welcome to our home page </div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place order
      </button>
    </>
  );
}

export default Home;
