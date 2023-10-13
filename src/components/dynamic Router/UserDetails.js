import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  return <div>Every users details {userId}</div>;
}

export default UserDetails;
