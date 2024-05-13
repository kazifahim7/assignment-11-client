import { Link } from "react-router-dom";

const Banner = ({image1}) => {
    return (
        <div className="hero bg-cover bg-no-repeat   bg-top" style={{ backgroundImage: `url(${image1})` , height:520,}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-2xl md:text-5xl lg:text-7xl font-bold">We <span className="text-[#e26d2f]">Fix</span> , As <br />
                        Soon As  <span className="text-[#e26d2f]">Possible</span></h1>
                    <p className="mb-5">There are many variations of passages of Electronics Services,  but the electronics <br /> have suffered alteration electronics repair, by injected <br /> humour yrawtap lewoj itaque quam praesentium.</p>
                    <div className="space-x-3">
                        <Link to={'/allServices'}><button className="btn  bg-[#e26d2f] text-white border-none">All Services</button></Link>
                        <button className="btn btn-outline text-white border-white border">Booked Service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;