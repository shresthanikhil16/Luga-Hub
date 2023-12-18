// import React from "react";
// import React from 'react';
// import { Link } from "react-router-dom";
import "../assets/css/Home.css";


function Home() {
    // // Add a function to handle the login button click and navigate to the login page
    // const handleLoginClick = () => {
    //     // You can replace "/login" with the actual path of your login page
    //     // It should match the route you define in your main App component
    //     // using <Route path="/login" component={LoginPage} />
    //     window.location.href = "/Login";
    // };

    return (
        <div className={"home-container"}>
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
                    <button>Sign In</button>
                    <button>Sign Up</button>


                </div>


            </div>
            <div className={"main1"}>
                <img

                    src={"images/home1.jpg"}
                    alt="image1"
                />
            </div>
            <div className={"main2"}>
                <div className="product-card">
                    <img src={"images/hoodie1.jpg"}
                         alt="Product 1"
                    />
                    <div className="product-info">
                        <div className="product-title">Hanes EcoSmart Hoodie, Midweight Fleece, Pullover Hooded Sweatshirt for Men</div>
                        <div className="product-price">$19.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>
                <div className={"product-card"}>
                    <img src={"images/hoodie2.jpg"} alt="Product 2"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>Gildan Fleece Hoodie Sweatshirt, Style G18500, Multipack</div>
                        <div className={"product-price"}>$24.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>

                <div className={"product-card"}>
                    <img src={"images/airforce1.jpg"} alt="Product 3"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>Nike mens Air Force 1 '07 LV8</div>
                        <div className={"product-price"}>$29.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>

                <div className={"product-card"}>
                    <img src={"images/khurtha1.jpg"} alt="Product 4"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>VredeVogel Women's Cotton Silk Jacquard Kurta Pant with Banarasi Silk Dupatta Set</div>
                        <div className={"product-price"}>$39.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>

                <div className={"product-card"}>
                    <img src={"images/jeans1.jpg"} alt="Product 5"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>Jean Jacket for Men Slim Fit Ripped Denim Jacket Coat</div>
                        <div className={"product-price"}>$49.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>
                <div className={"product-card"}>
                    <img src={"images/6.jpg"} alt="Product 5"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>JMIERR Men's Casual Stylish Short Sleeve Button-Up Striped Dress Shirts Cotton Shirt</div>
                        <div className={"product-price"}>$29.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>
                <div className={"product-card"}>
                    <img src={"images/7.jpg"} alt="Product 5"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>New Balance Men's Cotton Performance V-Neck Undershirt (3 Pack)</div>
                        <div className={"product-price"}>$19.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>
                <div className={"product-card"}>
                    <img src={"images/8.jpg"} alt="Product 5"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>Bbonlinedress Sparkly Sequins Glitter Wedding Guest Cocktail Prom Party Mini Formal Dress Elegant Flowy Bridesmaid Dress</div>
                        <div className={"product-price"}>$23.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>
                <div className={"product-card"}>
                    <img src={"images/9.jpg"} alt="Product 5"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>JMIERR Mens Quilted Shirt Jackets Casual Long Sleeve Snap Button Down Shirts with Pockets</div>
                        <div className={"product-price"}>$39.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
                </div>
                <div className={"product-card"}>
                    <img src={"images/jogger.jpg"} alt="Product 5"/>
                    <div className={"product-info"}>
                        <div className={"product-title"}>Under Armour Mens Hustle Fleece Jogger Pant</div>
                        <div className={"product-price"}>$26.99</div>
                    </div>
                    <ul>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star checked"}></i></li>
                        <li><i className={"fa fa-star"}></i></li>

                    </ul>
                    <button>Buy Now</button>
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
}

export default Home;
