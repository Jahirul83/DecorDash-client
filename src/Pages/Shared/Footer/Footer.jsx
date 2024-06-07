import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <div>
                        <h1 className="text-2xl font-bold">Decor <span className="text-blue-600">Dash</span></h1>
                    </div>
                    <div className='flex'>
                        <IoMail className="text-xl text-blue-600"/>
                        <a className="link link-hover font-bold ml-3">help@frybix.com</a>
                    </div>
                    <div className='flex'>
                        <FaPhoneAlt className="text-xl text-blue-600" />
                        <a className="link link-hover font-bold ml-3">+1 234 456 678 89</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Links</h6>
                    <a className="link link-hover font-bold">Home</a>
                    <a className="link link-hover font-bold">About us</a>
                    <a className="link link-hover font-bold">bookings</a>
                    <a className="link link-hover font-bold">blog</a>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Legal</h6>
                    <a className="link link-hover font-bold">Terms Of Use</a>
                    <a className="link link-hover font-bold">Privacy Policy</a>
                    <a className="link link-hover font-bold">Jobs</a>
                    <a className="link link-hover font-bold">Cookie Policy</a>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Product</h6>
                    <a className="link link-hover font-bold">Take Tour</a>
                    <a className="link link-hover font-bold">Live Chat</a>
                    <a className="link link-hover font-bold">Reveiws</a>
                </nav>
                <nav>
                    <h6 className="text-3xl font-bold">Newsletter</h6>
                    <div>
                        <input type="text" className="input input-bordered" placeholder="Your email" />
                        <button className="btn bg-blue-600 text-white">Subscribe</button>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content border-t-4 border-zinc-700">
                <aside>
                    <p>Copyright © 2024 - All right reserved by DecorDash Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;