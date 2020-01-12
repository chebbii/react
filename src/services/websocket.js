import { store } from "../index";

const socketClient = new WebSocket("wss://srrj6.sse.codesandbox.io/");

// We dispatch the action received from the server
socketClient.onmessage = function(event) {
  store.dispatch(JSON.parse(event.data));
};

export default socketClient;
