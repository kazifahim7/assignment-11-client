import { Outlet } from "react-router-dom";
import Navbar from "../shareComponents/Navbar";
import Footer from "../shareComponents/Footer";


const Mainlayout = () => {
    return (
        <div>

            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-338px)]">
                <Outlet></Outlet>

            </div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Mainlayout;