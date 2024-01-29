import React from 'react';
import "../assets/css/PrivacyPolicy.css";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className={"PrivacyPolicy-container"}>
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


                <h2>Data security and privacy policy</h2>
                <p>LugaHub Pvt. Ltd. (“LugaHub / We”) is committed to protecting data and privacy of individuals (“you”) visiting and using LugaHub's website and platform. LugaHub does not require visitors to give us personal information while browsing our platform, and, we shall not collect your personal information beyond the automatically collected data specified below, unless you specifically and knowingly choose to provide such information to us. However, LugaHub shall require you to provide certain personal information in order to use the services of LugaHub’s platform. LugaHub shall treat the privacy of such information with utmost importance.</p>
                <h2>Personally identifiable information</h2>
                <p>LugaHub shall not collect personal information without your consent. Submitting your personal information is voluntary and by doing so, LugaHub acquires the right to use the information for the specific stated purpose. Incomplete information may result in LuaHub’s inability to provide you with the service you desire. If you should choose to provide us with the personal information on the platform, LugaHub shall use that information to provide the service you request with the best recommendation available.</p>

                <h2>Monitoring of data/communications</h2>
                <p>LugaHub reserves the right to monitor all internet communications including web and email traffic into and out of its domains for the purpose of maintaining security of its systems, record transactions or to prevent and detect crime or unauthorized activities. By using this site, you agree to security monitoring and auditing.</p>
                <h2>Security(protection of data/information)</h2>
                <p>By using our platform, you agree to security monitoring and auditing. LugaHub shall employ programs to monitor network traffic to identify unauthorized attempts to change information or cause damage. Such unauthorized attempts are subject to prosecution under Electronic Transaction Act, 2008. LugaHub monitors the frequency of requests for lugahub.com content to ensure that automated searches do not impact the ability of others to access lugahub.com content. LugaHub reserves the right to block IP addresses that submit excessive requests. LugaHub is committed to maintain security of our platform and protecting sensitive information from unauthorized disclosure. However, there may be certain links to other websites owned and operated by third parties. Your activity in those sites shall be governed by their security and privacy policy. LugaHub shall not be able to control, moderate or endorse or be responsible for such privacy and security practices of third parties or affiliates. We recommend that you review their privacy policies before using them.</p>


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

export default PrivacyPolicy;
