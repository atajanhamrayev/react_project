import { connect } from "react-redux";
import Messages from "./Message";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../data/messages-reducer";

let mapStateToProps = (state) => {
  return {
    persons: state.messagesPage.persons,
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(sendMessageCreator());
    },
    onMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
