// Dashboard.tsx

import React from 'react';
import "../assets/css/Dashboard.css";

const Dashboard: React.FC = () => {
    return (
        <div className={"dashboard-container"}>
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
            <div className={"dashboard-body"}>
                <div className={"dash1"}>
                    <div className={"img-dash1"}>
                        <img src={"images/first-home.png"}
                             alt={"Home1"}
                        />

                    </div>
                    <div className={"product-dash1"}>
                        <div className={"row1"}>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                        </div>
                        <div className={"row2"}>
                            <div className={"Product-Card"}>
                                    <img src={"images/hoodie1.jpg"}
                                         alt={"hoodie1"}
                                    />
                                    <h2>hoodie</h2>
                                    <p>Rs.5000</p>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>


                                </div>
                                <div className={"Product-Card"}>
                                    <img src={"images/hoodie1.jpg"}
                                         alt={"hoodie1"}
                                    />
                                    <h2>hoodie</h2>
                                    <p>Rs.5000</p>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>


                                </div>
                                <div className={"Product-Card"}>
                                    <img src={"images/hoodie1.jpg"}
                                         alt={"hoodie1"}
                                    />
                                    <h2>hoodie</h2>
                                    <p>Rs.5000</p>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>


                                </div>
                                <div className={"Product-Card"}>
                                    <img src={"images/hoodie1.jpg"}
                                         alt={"hoodie1"}
                                    />
                                    <h2>hoodie</h2>
                                    <p>Rs.5000</p>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>


                                </div>
                                <div className={"Product-Card"}>
                                    <img src={"images/hoodie1.jpg"}
                                         alt={"hoodie1"}
                                    />
                                    <h2>hoodie</h2>
                                    <p>Rs.5000</p>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>


                                </div>
                                <div className={"Product-Card"}>
                                    <img src={"images/hoodie1.jpg"}
                                         alt={"hoodie1"}
                                    />
                                    <h2>hoodie</h2>
                                    <p>Rs.5000</p>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>
                                    <i className={"fa fa-star checked"}></i>


                                </div>

                        </div>

                    </div>
                </div>
                <div className={"dash2"}>
                    <div className={"img-dash2"}>
                        <img src={"images/modifiedhome.png"}
                             alt={"home 6"}
                        />

                    </div>
                    <div className={"product-dash2"}>
                        <div className={"row3"}>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                        </div>
                        <div className={"row4"}>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>
                            <div className={"Product-Card"}>
                                <img src={"images/hoodie1.jpg"}
                                     alt={"hoodie1"}
                                />
                                <h2>hoodie</h2>
                                <p>Rs.5000</p>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>
                                <i className={"fa fa-star checked"}></i>


                            </div>

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

export default Dashboard;
