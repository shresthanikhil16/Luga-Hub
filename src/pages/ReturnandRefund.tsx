import React from 'react';
import "../assets/css/ReturnandRefund.css";

const ReturnandRefund: React.FC = () => {
    return (
        <div className={"ReturnandRefund-container"}>
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


                <h2>Return and Refund policy</h2>
                <p>Returns are the provision by the sellers under different category where the option of return & refund is provided to you by the respective sellers. The return policy may not be the same for all the products under a different product category. The product which is under the warranty period will be redirected to the service center, return & refund policies will not be eligible for such products. You can refer to the product page for the applicable return policy. Valid reasons to return an item 1. If the Delivered Product is damaged/defective (physically damaged or broken) 2. If the Delivered Product is incorrect/incomplete (missing product or wrong product/ different from the product presented on website) 3. If the size of the fashion product doesn’t fit. (wrong/different size) 4. If the delivered product is no longer needed. (you have changed your mind about the purchase/ you do not like the product after opening the package)-eligible for selected products only. Please refer to the product page to check if the vendor accepts "change of mind" or not.</p>
                <h2>Return cycle and pickup period</h2>
                <p>The return request must be initiated within 7 days of product return cycle and for damaged/defective products the return request must be initiated within 3 days of receiving the product. After the return request is accepted, product is picked within 3 days after the return request is accepted for inside valley. For outside valley the period may extend to 7 days. After the item has been picked up LugaHub will quality check the product and based on the outcome will be processed for refund or notifying the customer on any issue encountered.</p>

                <h2>Refund</h2>
                <p>The refund will be processed after the product is picked and quality checked by the QC Team. The refund time depends on the payment method.</p>



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

export default ReturnandRefund;
