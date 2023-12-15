// Dashboard.tsx

import React from 'react';
import "../assets/css/Dashboard.css";

const Dashboard: React.FC = () => {
    return (
        <div className={"container"}>
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
            <div className={"main1"}>
                <img

                    src={"images/home1.jpg"}
                    alt="image1"
                />
            </div>
            <div className={"main2"}>
                <div className={"content"}>
                    <img src={"images/hoodie2.jpg"}
                         alt={"hoodie1"}/>
                    <h3>Hoodies</h3>

                    <p>Aawghy Fleece Lined Hoodies for Men Pullover Heavyweight Sherpa Lined Hoodie Winter Warm Mens Clothes Hooded Sweatshirt</p>
                    <h6>Rs. 3,000</h6>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button className={"buy-1"}>Buy Now</button>
                </div>
                <div className={"content"}>
                    <img src={"images/jeans1.jpg"}
                         alt={"jeans1"}/>
                    <h3>Jeans</h3>

                    <p>Beskie Men's Sherpa Lined Denim Jacket Button Down Classic Trucker Jackets Warm Casual Quilted Jeans Coats Outerwear</p>
                    <h6>Rs. 3,999</h6>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button className={"buy-2"}>Buy Now</button>
                </div>
                <div className={"content"}>
                    <img src={"images/airforce1.jpg"}
                         alt={"airforce"}/>
                    <h3>Shoes</h3>

                    <p>Nike mens Air Force 1 '07</p>
                    <h6>Rs. 6,000</h6>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button className={"buy-3"}>Buy Now</button>
                </div>
                <div className={"content"}>
                    <img src={"images/jogger.jpg"}
                         alt={"jogger"}/>
                    <h3>Joggers</h3>

                    <p>Hanes EcoSmart Jogger Sweatpants, Men's Midweight Fleece Lounge Pants, 30.5"</p>
                    <h6>Rs. 2,000</h6>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button className={"buy-4"}>Buy Now</button>
                </div>

                {/*<h1>Featured Items</h1>*/}
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

export default Dashboard;
