import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "./../../data/auth-reducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth === true) return <Navigate to="/profile" />;
  return (
    <div className="min-h-[800px] text-white">
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className=" flex flex-col items-center justify-center gap-[30px] bg-[#7c74b1] rounded-xl p-5"
    >
      <div>
        <Field
          name={"email"}
          component={"input"}
          type="text"
          className="rounded-xl"
          placeholder="UserName"
        />
      </div>
      <div>
        <Field
          name={"password"}
          component={"input"}
          type="text"
          className="rounded-xl"
          placeholder="Password"
        />
      </div>
      <div>
        <Field name={"rememberMe"} component={"input"} type="checkbox" />
        Remember Me
      </div>
      <button className="w-20 rounded-xl border-[2px] border-solid border-[#362a89] bg-white text-[#362a89]">
        Submit
      </button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

class LoginContainer extends Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginContainer);
