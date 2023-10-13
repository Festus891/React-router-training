import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function User() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get("filter") === "Active";
  return (
    <div>
      <h3>User 1</h3>
      <h3>User 2</h3>
      <h3>User 3</h3>
      {/* <Link to="users">User 1</Link>
      <Link to="users">User 2</Link>
      <Link to="users">User 3</Link> */}
      <Outlet />

      <button onClick={() => setSearchParams({ filter: "Active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset User</button>

      {showActiveUser ? (
        <h2>List of active users</h2>
      ) : (
        <h2>List of all users</h2>
      )}
    </div>
  );
}

export default User;
