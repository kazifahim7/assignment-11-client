// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import TableInfo from "../components/Tableinfo";
import useAxiosSecure from "../hook/useAxiosSecure";


const ManageService = () => {
    const [services,setServices]=useState([])
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()


    useEffect(()=>{
        axiosSecure.get(`/services/${user?.email}`)
        .then(data=>setServices(data.data))
    },[user?.email,axiosSecure])


    return (
        <div>
            <div className="overflow-x-auto container mx-auto">
                <table className="table border my-10">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                       


                        {
                            services.map((service, index) => <TableInfo setServices={setServices} services={services} index={index} service={service} key={service._id}></TableInfo>)
                        }
                        
                        
                      
                      
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ManageService;
