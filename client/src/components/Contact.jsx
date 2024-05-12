import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo-chat.svg";

export default function Contact({ contacts, currentUser, chatChange }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUseImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
      setCurrentUseImage(currentUser.avatarImage);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);

    chatChange(contact);
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            {/* <img src={Logo} alt="" /> */}
            <h3>
              SNA<strong style={{ color: "white" }}>PPY</strong>
            </h3>
          </div>

          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #52ab98;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      height: 2rem;
    }
    h3 {
      color: black;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 900;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;

    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      align-items: center;
      display: flex;
      gap: 1rem;
      transition: 0.5s ease-in-out;

      .avatar {
        img {
          height: 3rem;
        }
      }

      .username {
        h3 {
          color: #8d8c8a;
        }
      }
    }

    .selected {
      background-color: #ededed;
    }
  }

  .current-user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1rem;

    background-color: #ffffff39;

    padding: 1rem;
    flex-direction: column;

    .avatar {
      img {
        height: 4rem;
        padding: 0.2rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
        text-align: center;
        font-size: 1.2rem;
      }
    }
  }
`;
