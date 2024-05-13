// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingTable from "../components/BookingTable";
import useAxiosSecure from "../hook/useAxiosSecure";


const BookedServices = () => {
    const [bookedData,setBookedData]=useState([])
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()

    useEffect(()=>{
        axiosSecure.get(`/bookings/${user?.email}`)
        .then((data)=>setBookedData(data.data))
    },[user,axiosSecure])


    return (
        <div>
            <h1 className="text-center font-extrabold text-4xl">Booked Services</h1>
            <div className={`${bookedData.length > 0 ? 'hidden' : 'block'}  flex justify-center items-center`}>
                <img src="https://i.ibb.co/tpQkDyD/9264885.jpg" alt="" className="w-[500px] h-[500px]" />
            </div>
            
            {
                bookedData.length > 0 && <div className="overflow-x-auto container mx-auto">
                    <table className="table border my-5">
                        {/* head */}
                        <thead>
                            <tr className="border ">
                               
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Service</th>
                                <th>status</th>

                            </tr>
                        </thead>
                        <tbody className="border">



                            {
                                bookedData?.map((item , index) => <BookingTable index={index} item={item} key={item._id}></BookingTable>)
                            }



                        </tbody>
                    </table>
                </div>
            }

       
        </div>
    );
};

export default BookedServices;