import React from "react";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Button onClick={handleClick}>
        <BiPowerOff />
      </Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s; /* Animation */

  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #ededed;

  &:hover {
    transform: scale(
      1.25
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    border: 1px solid #ededed;
  }

  svg {
    color: black;
    font-size: 1.3rem;
  }
`;
