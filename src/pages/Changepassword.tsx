import React from 'react';
import "../assets/css/Changepassword.css";

const Changepassword: React.FC = () => {
    return (
        <div className={"EditProfile-container"}>
            <div className={"header"}>

                <div className={"logo"}>
                    <img
                        width={100}
                        src={"images/logo1.png"}
                        alt="Logo"
                    />
                </div>
                <div className={"btn_before"}>
                    <button>Brands</button>
                    <button>Clothes</button>
                    <button>Contact Us</button>
                    <button>About Us</button>
                </div>

                <div className={"searchbar"}>
                    <input type={"text"} placeholder={"Search Product"} />
                </div>
                <div className={"search_button"}>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className={"btn-wrapper"}>
                    <button><i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</button>
                    <button><i className="fa-regular fa-heart"></i>Wishlist</button>
                    <button>My Account</button>
                    <button>Sign Out</button>


                </div>


            </div>
            <div className={"body"}>
                <div className={"profile-first"}>
                    <div className={"manage-my-account"}>
                        <h1>Manage My Account</h1>
                        <button>My profile</button>
                    </div>
                    <div className={"my-orders"}>
                        <h2>My Orders</h2>
                        <button>My Orders</button>
                        <button>My Returns</button>
                        <button>My Cancellations</button>

                    </div>


                </div>
                <div className={"profile-second"}>
                    <div className={"section1"}>
                        <h3>Change password</h3>

                    </div>
                    <div className={"section2"}>
                        <div className={"entryfield"}>
                            <div className={"field1"}>
                                <label>Current password</label>
                                <input type={"password"} placeholder={"Current password"} />

                            </div>
                            <div className={"field2"}>
                                <label>New password</label>
                                <input type={"password"} placeholder={"New password"} />

                            </div>
                            <div className={"field3"}>
                                <label>Confirm password</label>
                                <input type={"password"} placeholder={"Confirm password"} />

                            </div>
                        </div>

                        <div className={"buttons"}>
                            <button>SAVE CHANGES</button>

                        </div>


                    </div>

                </div>
            </div>




            <div className={"footer"}>
                <div className={"get-help"}>
                    <h1>GET HELP</h1>
                    <button>Customer Care</button>
                    <button>Payment Options</button>
                    <button>Return and Refund Policy</button>
                    <button>Privacy Policy</button>
                    <button>Terms and Conditions</button>
                    <span>@2023 Lugahub Pvt. Ltd. All Rights Reserved</span>

                </div>
                <div className={"about-us"}>
                    <h1>LUGAHUB</h1>
                    <button>About Us</button>
                    <button>Contact Us</button>
                    <button>Careers</button>
                    <button>Guide</button>



                </div>
                <div className={"logos"}>
                    <span>Connect with us:</span>
                    <img
                        width={30}
                        src={"images/fb.png"}
                        alt="fb"
                    />
                    <img
                        width={31}
                        src={"images/insta.png"}
                        alt="fb"
                    />
                    <img
                        width={35}
                        src={"images/twitter.png"}
                        alt="fb"
                    />


                </div>

            </div>
        </div>

    );
};

export default Changepassword;
