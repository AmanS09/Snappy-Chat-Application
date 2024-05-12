import React, { useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
export default function ChatInput({ handleSendMessage }) {
  const [showEmojiPicker, setEmojiPicker] = useState(false);

  const [message, setMessage] = useState("");

  const handleEmojiPickerHideShow = () => {
    setEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emoji) => {
    let msg = message;
    msg += emoji.emoji;
    setMessage(msg);
  };

  const sendChat = (e) => {
    e.preventDefault();
    if (message.length > 0) {
      handleSendMessage(message);
      setMessage("");  
    }
  };
  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />{" "}
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background-color: transparent;
  height: 20%;
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  padding: 0 2rem;
  padding-bottom: 0.5rem;

  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;

      svg {
        font-size: 1.5rem;
        color: #00a1da;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: white;
          width: 5px;
          &-thumb {
            background-color: grey;
            border-radius: 1rem;
          }
        }
      }
    }
  }

  .input-container {
    width: 100%;

    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;

    input {
      width: 90%;
      height: 60%;
      background: transparent;
      color: black;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9186f3;
      border: none;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
