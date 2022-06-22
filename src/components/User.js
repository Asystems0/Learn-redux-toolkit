import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoaded, loginSuccess, logout } from "../redux/user";

function User() {
  const state = useSelector((state) => state.user);
  const { user } = state;
  // const { user } = useSelector((state) => state.user);
  // const { firstName, lastName } = user.user;
  // const { loading } = user;

  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        {user
          ? // !== null && user.user.firstName
            `Hello ${user.firstName} ${user.lastName}!`
          : "Hello!"}
      </h1>
      <h2>{state.loading ? "Loading..." : ""}</h2>
      <button onClick={() => dispatch(userLoaded())}>Loading </button>
      <button
        onClick={() =>
          dispatch(
            loginSuccess({
              firstName: "Asaf",
              lastName: "Asy",
              email: "asaf@gmail.com",
            })
          )
        }
      >
        Log in
      </button>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
}

export default User;
