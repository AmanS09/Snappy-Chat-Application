import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Logo from "../assets/logo-chat.svg";
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";
import { toastOptions } from "../utils/ToastOptions";
function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, []);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("in validation", loginRoute);
      const { password, username } = values;

      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });

      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        localStorage.getItem("chat-app-user");
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (username === "" || password === "") {
      toast.error("inputs  are required", toastOptions);
      return false;
    }

    return true;
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)} noValidate>
          <div className="brand">
            <img src={Logo} alt="" />
            <h1>Snappy</h1>
          </div>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Create user</button>
          <span>
            Don't have an account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #051622;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
      width: 2rem;
    }
    h1 {
      color: white;
      margin-top: 5px;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.2rem solid #4e0eff;
      color: white;
      border-radius: 0.4rem;
      width: 100%;
      font-size: 1rem;

      &:focus {
        border: 0.2rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 0.4rem;
      transition: 0.2s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;

      a {
        text-decoration: none;
        font-weight: bold;
        color: #4e0eff;
      }
    }
  }
`;
export default Login;
