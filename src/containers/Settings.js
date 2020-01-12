import React from "react";
import { HuePicker } from "react-color";
import { connect } from "react-redux";

import { updateChatColor, updateUsername } from "./../actions/settings";

const Settings = ({ updateChatColor, updateUsername, username, history, colorCode }) => {
  return (
    <div style={{ padding: 10 }}>
      <label>Username</label>
      <form
        onSubmit={e => {
          e.preventDefault();
          history.push("/chat");
        }}
      >
        <input
          name="username"
          value={username}
          onChange={({ target }) => updateUsername(target.value)}
          autoComplete="off"
        />
        <HuePicker onChangeComplete={color => updateChatColor(color.hex)} color={colorCode} />
        <button type="submit">Enter chat</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  updateChatColor,
  updateUsername,
};

const mapStateToProps = state => ({
  username: state.settings.username,
  colorCode: state.settings.colorCode,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
