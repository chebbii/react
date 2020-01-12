import React from "react";
import { FormattedMessage } from "react-intl";

import MessageListContainer from "./../containers/MessageListContainer";
import MessageBar from "./MessageBar";

const chatStyle = {
  borderRadius: 10,
  fontFamily: "Montserrat",
  width: 400,
  padding: 10,
  display: "flex",
  flexDirection: "column"
};

const Chat = props => {
  return (
    <div style={{ ...chatStyle, backgroundColor: props.colorCode }}>
      <div style={{ paddingLeft: 10, paddingTop: 10, fontSize: 30 }}>
        <FormattedMessage id="chat.title" />
      </div>

      <MessageListContainer />
      <MessageBar />
    </div>
  );
};

export default Chat;
