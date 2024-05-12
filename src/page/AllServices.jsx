import axios from "axios";
import { useEffect, useState } from "react";

import ServicesCard from "../components/ServicesCard";
import { Helmet } from "react-helmet-async";


const AllServices = () => {
    const [Services,setServices]=useState([])
    const [search,setSearch]=useState('')

    useEffect(()=>{
        axios.get(`http://localhost:5000/service?search=${search}`)
        .then(data=>setServices(data.data))



    },[search])

    const handleClick=e=>{
        e.preventDefault()
        const text = e.target.inputText.value;
        
        setSearch(text)
        
        
    }
   



    return (
        <div className="my-3">
            <Helmet>
                <title>AllServices</title>
            </Helmet>
            <form onSubmit={handleClick} className="w-full md:w-1/2 mx-auto relative">
                <input type="text" name="inputText" placeholder="Search By title" className="input input-bordered input-success w-full py-7 border border-[#e26d2f] " />
                <button className="btn bg-[#e26d2f] absolute right-2 flex top-1">Search</button>
               
            </form>

            <div className={`${Services.length>0 ? 'hidden': 'block'}  flex justify-center items-center`}>
                <img src="https://i.ibb.co/tpQkDyD/9264885.jpg" alt="" className="w-[500px] h-[500px]" />
            </div>

            <div className="container my-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    Services.map((service)=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }

            </div>
            
        </div>
    );
};

export default AllServices;