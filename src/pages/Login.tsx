
import "../assets/css/Login.css";
// import React from "react";
import React from "react";

import { Link } from "react-router-dom";

const Login: React.FC = () => {


    return (
        <div className={"login-container"}>
            <div className={"login-form"}>
                <div className={"header1"}>
                    <div className={"login-logo"}>
                        <img
                            src={"images/logo1.png"}
                            alt={"logo"}
                        />
                    </div>
                    <div className={"log-in"}>
                        <h1>Login</h1>
                    </div>
                </div>

                <div className={"inputs"}>
                    <div className={"input"}>
                        <input type={"text"} placeholder={"Username"} />
                        <i className="fa-solid fa-user"></i>
                    </div>

                    <div className={"input"}>
                        <input type={"password"} placeholder={"Password"} />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" name="remember_me" /> Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <div className={"submitbtn"}>
                    <div className={"btn"}>
                        <button>Login</button>
                    </div>
                    <div className={"register-link"}>
                        Don't have an account? <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
