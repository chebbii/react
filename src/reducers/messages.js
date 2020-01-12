import { ADD_MESSAGE, REMOVE_MESSAGE_ACTION } from "./../actions/messages";

const INITIAL_STATE = {
  isPending: false,
  error: null,
  messages: [],
  pending: false
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        messages: [
          ...state.messages,
          { message: action.message, username: action.username }
        ]
      };

    case REMOVE_MESSAGE_ACTION:
      return {
        messages: state.messages.filter((message, i) => i !== action.index)
      };

    default:
      return state;
  }
};

export default messages;
