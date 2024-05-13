import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'


const TableInfo = ({ service, index, setServices, services }) => {
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            axios.delete(`https://assigment11-five.vercel.app/single/${id}`)
                .then(data => {
                    const existing = services.filter((item) => item._id !== id)
                    setServices(existing)

                    if (data.data.deletedCount > 0) {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    }


                })
        });
    }



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{service.providerName}</td>
            <td>{service.providerEmail}</td>
            <td>{service.serviceName}</td>
            <td className="space-x-1"><Link to={`/update/${service._id}`}><button className="btn ">Update</button></Link>

                <Link><button onClick={() => handleDelete(service._id)} className="btn ">Delete</button></Link>

            </td>
        </tr>
    );
};

export default TableInfo;
