import React from "react";
import { Emojione } from "react-emoji-render";
import { removeMessage } from "./../actions/messages";
import { connect } from "react-redux";

const MessageItem = ({ message, removeMessage, index }) => {
  return (
    <li
      style={{
        position: "relative",
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
      }}
    >
      <small>@{message.username}</small>
      <div>
        {message.message && <Emojione text={message.message.toString()} />}
      </div>
      <small
        onClick={() => removeMessage(index)}
        style={{ position: "absolute", right: 10, top: 15, cursor: "pointer" }}
      >
        ❌
      </small>
    </li>
  );
};

const mapDispatchToProps = {
  removeMessage
};

export default connect(
  null,
  mapDispatchToProps
)(MessageItem);
