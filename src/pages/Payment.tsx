import React from 'react';
import "../assets/css/Payment.css";

const Payment: React.FC = () => {
    return (
        <div className={"payment-container"}>
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
            <div className={"about-us-body"}>
                <h1>PAYMENT METHOD</h1>

                <h2>Payment Method:</h2>
                <h2>1. How do I pay for a DealAyo purchase?</h2>
                <p>LugaHub offers you two payment methods. One is through online by the use of Khalti wallet and another is cash on delivery. </p>
                <h2>2. What is Cash on Delivery?</h2>
                <p>If you are not comfortable making an online payment on LugaHub.com, you can do Cash on Delivery (C-o-D) payment method instead. With C-o-D you can pay in cash at the time of actual delivery of the product at your doorstep, without requiring you to make any advance payment online. Foreign currency cannot be used to make a C-o-D payment. Only Nepali Rupees accepted. *We do not accept Cheque in Cash on Delivery</p>

                <h2>3.How do I pay through Khalti?</h2>
                <p>The service -khalti.com — will provide easy access to Nepalis for paying utilities’ bills, shopping for mobile recharge cards and household items. Simply create an Khalti account and Register your bank account.
                    When you purchase product from LugaHub and during checkout click on Khalti button.
                    Log into Khalti and speed through checkout securely with just an email and password.
                    To know more about Khalti you can go to this link : https://khalti.com</p>



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

export default Payment;
