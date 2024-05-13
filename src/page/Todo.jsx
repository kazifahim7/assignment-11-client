import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import TodoTable from "../components/TodoTable";


const Todo = () => {
    const [bookedData, setBookedData] = useState([])
    const { user } = useContext(AuthContext)

    const [text,setText]=useState(null)

    useEffect(() => {
        axios.get(`http://localhost:7000/bookingRequest/${user?.email}`)
            .then((data) => setBookedData(data.data))
    }, [user,text])

    


    return (
        <div>
            <h1 className="text-center font-extrabold text-4xl">Services Request</h1>
            <div className={`${bookedData.length > 0 ? 'hidden' : 'block'}  flex justify-center items-center`}>
                <img src="https://i.ibb.co/tpQkDyD/9264885.jpg" alt="" className="w-[500px] h-[500px]" />
            </div>

            {
                bookedData.length > 0 && <div className="overflow-x-auto container mx-auto">
                    <table className="table border my-5">
                        {/* head */}
                        <thead>
                            <tr className="border ">
                                
                                <th>Customer Name</th>
                                <th>Customer Email</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Service</th>
                                <th>working</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className="border">



                            {
                                bookedData?.map((item, index) => <TodoTable setText={setText} index={index} item={item} key={item._id}></TodoTable>)
                            }



                        </tbody>
                    </table>
                </div>
            }


        </div>
    );
};

export default Todo;