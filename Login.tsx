import "../assets/css/Login.css";
import React from "react";

const Login: React.FC = () => {


    return (
        <div className={"container"}>
            <div className={"login-form"}>
                <div className={"header1"}>
                    <div className={"logo"}>
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
                        Don't have an account? <a href="#">Register</a>
                    </div>




                </div>


                {/<div className={"footer"}>/}
                {/*    <div className={"Loginbtn"}>/}
                {/        Login*/}
                {/*    </div>/}
                {/    <div className={"register-link"}>/}
                {/        Don't have an account? <a href="#">Register</a>/}
                {/    </div>/}
                {/</div>/}
                {/<div className={"footer"}>/}
                {/    <button>Login</button>/}
                {/    <label>Don't have an account? </label>/}
                {/    <a href={"#"}>Register</a>/}
                {/</div>*/}


            </div>

        </div>


    );
};

export default Login;