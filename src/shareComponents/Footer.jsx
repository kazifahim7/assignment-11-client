import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";


const Footer = () => {
    const theme=localStorage.getItem('theme')
    return (
        <footer className={`footer p-10 bg-${theme==='light'? 'white': 'bg-gray-300' }  text-${theme==='dark '? 'white':'black'} border-t-2`}>
            <aside>
                <img src="https://htmldemo.net/elecron/elecron/assets/images/logo/logo-2.png" alt="" />
                <p>Elecron Industries Ltd.<br />Providing reliable tech since 1992</p>
                <aside>
                    <div className="flex justify-start space-x-7 py-5 text-3xl ">
                        <FaGoogle></FaGoogle>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                    </div>


                    <p>Copyright © 2024 - All right reserved by Elecron Industries Ltd</p>
                </aside>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>

        </footer>
    );
};

export default Footer;