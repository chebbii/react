export const UPDATE_CHAT_COLOR = "UPDATE_CHAT_COLOR";
export const UPDATE_USERNAME = "UPDATE_USERNAME";

export const updateChatColor = colorCode => {
  return {
    type: UPDATE_CHAT_COLOR,
    colorCode
  };
};

export const updateUsername = username => {
  return {
    type: UPDATE_USERNAME,
    username
  };
};
