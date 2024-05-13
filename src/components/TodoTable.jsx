import axios from "axios";


const TodoTable = ({ item, setText }) => {
    const handleClick = (id, status) => {


        axios.patch(`https://assigment11-five.vercel.app/update/${id}`, { status })
            .then(data => {
                console.log(data)
                setText(status)

            })
    }

    return (
        <tr>

            <td>{item.customerName}</td>
            <td>{item.customerEmail}</td>
            <td>{item.dates}</td>
            <td>{item.cost} $</td>
            <td>{item.serviceName}</td>
            <td className={`${item.status === 'Pending' ? 'text-red-500' : 'text-green-500'} ${item.status === 'working' && 'text-blue-600'}`}>{item.status}</td>
            <td><div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="btn m-1">Action</div>
                <ul tabIndex={0} className="dropdown-content z-50 menu  p-2 shadow bg-base-100 rounded-box w-48">
                    <li onClick={() => handleClick(item._id, 'working')}><a>working</a></li>
                    <li onClick={() => handleClick(item._id, 'completed')}><a>completed</a></li>

                </ul>
            </div></td>
        </tr>
    );
};

export default TodoTable;