import React from 'react';
import "../assets/css/Careers.css";

const Careers: React.FC = () => {
    return (
        <div className={"careers-container"}>
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
                <h1>Careers</h1>

                <h2>100% ORIGINAL PRODUCTS:</h2>
                <p>When you purchase from LugaHub.com you can be assured that you are purchasing 100% genuine and authentic products. We acquire products from manufacturers through proper channels and proper quality checks. Questions are raised every day about fake products, counterfeit merchandise, and imitations of original branded products. It’s An unfortunate fact that there are other stores and websites who are not selling authentic product – and sometimes they don’t even realize it themselves because they are not purchasing their products directly from the manufacturers or authorized distributer. Be safe on the Internet and only shop with reputable retailers like LugaHub.com – trust your instincts and ask questions.</p>
                <h2>TIMELY AND FREE DELIVERY:</h2>
                <p>Timely delivery has always been a priority at LUGAHUB. Order today by 9am and it is delivered the same evening in Kathmandu. Also get free delivery for order above Rs.500 in Kathmandu.</p>
                <h2>FREE AND EASY RETURNS:</h2>
                <p>Easy returns for items shopped online on LugaHub.com. Most items can be returned for a refund or replacement within a 7-day return window. Please check our return policies.</p>
                <h2>PRICE MATCH GUARANTEE:</h2>
                <p>Get the best deal with Price Match and Price Guarantee. Shop with confidence, shopping online on LugaHub.com guarantees that you get any product at best price offered in Nepal.</p>
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

export default Careers;
