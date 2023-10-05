import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../css/LoginPage.css";

const LoginPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const { loginUser } = useAuth();

  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login_container">
      <img src="/images/Picture2.png" alt="" />
      <div className="login_box">
        <article>
          <h2 className="login_title">Login</h2>
        </article>
        <form className="login_form" onSubmit={handleSubmit(submit)}>
          <div className="login_info">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" id="email" />
          </div>
          <div className="login_info">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" />
          </div>
          <div className="login_submit">
            <button className="login_button">Submit</button>
            <p>
              Do you have an account?{" "}
              <Link to="/auth/register"> Go to register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
