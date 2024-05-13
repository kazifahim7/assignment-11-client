


const BookingTable = ({ item}) => {
    


    return (
        <tr>
            
            <td>{item.customerName}</td>
            <td>{item.customerEmail}</td>
            <td>{item.dates}</td>
            <td>{item.cost} $</td>
            <td>{item.serviceName}</td>
            <td className={`${item.status === 'Pending' && 'text-red-500' } ${item.status === 'working' && 'text-blue-600'}`}>{item.status}</td>
            
        </tr>
    );
};

export default BookingTable;