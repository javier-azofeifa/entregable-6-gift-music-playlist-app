import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../css/RegisterPage.css";

const RegisterPage = () => {
  const { reset, handleSubmit, register } = useForm();
  const { registerUser } = useAuth();

  const submit = (data) => {
    registerUser(data);
  };

  return (
    <div className="register_container">
      <img src="/images/Picture3.png" alt="" />
      <div className="register_box">
        <article>
          <h2 className="register_title">New Account</h2>
        </article>
        <form className="register_form" onSubmit={handleSubmit(submit)}>
          <div className="register_info">
            <label htmlFor="name">Name</label>
            <input {...register("name")} type="name" id="name" />
          </div>
          <div className="register_info">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
          </div>
          <div className="register_info">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" />
          </div>
          <div className="register_submit">
            <button className="login_button">Submit</button>
            <p>
              Are you register?
              <Link to="/auth/login"> Go to login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
