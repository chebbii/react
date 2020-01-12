import websocket from "./../services/websocket";

export const REMOVE_MESSAGE_ACTION = "REMOVE_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";

export const sendMessage = message => {
  return (dispatch, getState) => {
 gigt     const action = { type: ADD_MESSAGE, message, username };
    websocket.send(JSON.stringify(action));

    return dispatch(action);
  };
};

export const removeMessage = index => {
  return {
    type: REMOVE_MESSAGE_ACTION,
    index
  };
};
