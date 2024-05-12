import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import Messages from "./Messages";
import {sendMessageRoute} from "../utils/APIRoutes";
import axios from 'axios';
export default function ChatContainer({ currentUser,currentChat }) {
  const handleSendMessage = async (message) => {

    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: message
    })


  };

  return (
    <>
      <Container>
        <div className="chat-header">
          <div className="user-details">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                alt=""
              />
            </div>
            <div className="username">
              <h3>{currentUser.username}</h3>
            </div>
          </div>
          <Logout />
        </div>
        <div className="chat-messages"></div>
        <ChatInput handleSendMessage={handleSendMessage}></ChatInput>

        <div className="chat-input"></div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 1rem;

  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;

      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          font-size: 1rem;
        }
      }
    }
  }
`;
