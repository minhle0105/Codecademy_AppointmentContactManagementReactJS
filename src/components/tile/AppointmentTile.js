import React, {useState} from "react";
import Table from "react-bootstrap/Table"
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert2 from "react-sweetalert2";

export const AppointmentTile = ({ data, handleDelete }) => {

    const [swalProps, setSwalProps] = useState({});

    const passDataToDelete = (i) => {
        handleDelete(i);
        showDeleteAlert()
    }

    const showDeleteAlert = () => {
        setSwalProps({
            show: true,
            title: `Successfully deleted`,
            icon: 'success',
            showConfirmButton: false,
        });
        setTimeout(() => setSwalProps({
            show: false,
            title: `Successfully deleted`,
            icon: 'success',
            showConfirmButton: false,
        }), 1500);
    }



    return (
        <div className="tile-container">
            <Table responsive>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Contact Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th> </th>
                </tr>
                </thead>
                {data.map((appointment, key) => {
                    return (
                        <tbody key={key}>
                        <tr>
                            <td>{appointment.title}</td>
                            <td>{appointment.contact}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td style={{marginTop: 5, marginBottom: 5}} className="btn btn-outline-danger" onClick={() => passDataToDelete(key)}>Delete</td>
                        </tr>
                        </tbody>
                    )
                })}
            </Table>
            <SweetAlert2 title={swalProps.title} show={swalProps.show} icon={swalProps.icon} showConfirmButton={swalProps.showConfirmButton} />
        </div>
    );
};
