import { connect } from "react-redux";
import Messages from "./Message";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { sendMessageCreator } from "../../data/messages-reducer";

let mapStateToProps = (state) => {
  return {
    persons: state.messagesPage.persons,
    messages: state.messagesPage.messages,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
