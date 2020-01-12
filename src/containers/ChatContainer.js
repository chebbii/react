import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chat from "./../components/Chat";
import { addMessage} from "./../actions/messages";

class ChatContainer extends Component {
  render() {
    return this.props.isReady && <Chat {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    colorCode: state.settings.colorCode,
    isReady: state.app.isRehydrated,
  }
};

const mapDispatchToProps =  {
  addMessage
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(ChatContainer);
