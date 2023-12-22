import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home.tsx';
// import Dashboard from './pages/Dashboard.tsx';
import Register from './pages/Register.tsx';
// import Login from './pages/Login.tsx';
// import MyAccount from './pages/MyAccount.tsx';
// import EditProfile from './pages/EditProfile.tsx';
// import Changepassword from './pages/Changepassword.tsx';
// import Myorders from './pages/Myorders.tsx';
// import Myreturns from './pages/Myreturns.tsx';
// import Mycancellation from './pages/Mycancellation.tsx';
// import Aboutus from './pages/Aboutus.tsx';
// import Contactus from './pages/Contactus.tsx';
// import Careers from "./pages/Careers.tsx";
// import Customercare from "./pages/Customercare.tsx";
// import Payment from "./pages/Payment.tsx";
// import Termsandcondition from "./pages/Termsandcondition.tsx";
// import ReturnandRefund from "./pages/ReturnandRefund.tsx";
// import Checkout from "./pages/Checkout.tsx";

function App() {
    return (
        <Router>
            <Routes>
                {/*<Route path="/" element={<Home />} />*/}
                {/*<Route path="/dashboard" element={<Dashboard />} />*/}
                {/*<Route path="/register" element={<Register />} />*/}
                {/*<Route path="/login" element={<Login />} />*/}
                {/*<Route path="/MyAccount" element={<MyAccount />} />*/}
                {/*<Route path="/EditProfile" element={<EditProfile />} />*/}
                {/*<Route path="/Changepassword" element={<Changepassword />} />*/}
                {/*<Route path="/Myorders" element={<Myorders/>} />*/}
                {/*<Route path="/Myreturns" element={<Myreturns/>} />*/}
                {/*<Route path="/Mycancellation" element={<Mycancellation/>} />*/}
                {/*<Route path="/Aboutus" element={<Aboutus/>} />*/}
                {/*<Route path="/Contactus" element={<Contactus/>} />*/}
                {/*<Route path="/Careers" element={<Careers/>} />*/}
                {/*<Route path="/Customercare" element={<Customercare/>} />*/}
                {/*<Route path="/ReturnandRefund" element={<ReturnandRefund/>} />*/}
                {/*<Route path="/Termsandcondition" element={<Termsandcondition/>} />*/}
                {/*<Route path="/Payment" element={<Payment/>} />*/}
                {/*<Route path="/Checkout" element={<Checkout/>} />*/}



            </Routes>
        </Router>
    );
}

export default App;
