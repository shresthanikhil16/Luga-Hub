// import React from 'react';
import "../assets/css/Register.css";

function Register() {
    return (
        <div className={"register-container"}>
            <div className={"r-Signup-form"}>
                <div className={"r-Head"}>
                    <img
                        src={"images/logo1.png"}
                        alt={"logo"}
                    />
                    <h1>Signup</h1>
                </div>
                <div className={"r-Body"}>
                    <input type={"text"} placeholder={"First Name"} />
                    <input type={"text"} placeholder={"Last Name"} />
                    <input type={"email"} placeholder={"Email"} />
                    <input type={"password"} placeholder={"Password"} />
                    <input type={"password"} placeholder={"Confirm Password"} />


                </div>
                <div className={"r-Footer"}>
                    <div className={"r-checkbox"}>
                        <label>
                            <input type="checkbox" name="remember_me" /> I have read and accept the terms and conditions and privacy policy.
                        </label>
                    </div>
                    <div className={"r-button"}>
                        <button>Back</button>
                        <button>Sign Up</button>
                    </div>



                </div>


            </div>

        </div>

    );
}

export default Register;