import {store} from "../";
import {ton action} from "../la-où-est-ton-actions";
export const webSocket = new WebSocket('ws://srrj6.sse.codesandbox.io');
webSocket.onopen = () => {
    console.log('connected')
};
webSocket.onmessage = evt => {
    
    const message = JSON.parse(evt.data);
};