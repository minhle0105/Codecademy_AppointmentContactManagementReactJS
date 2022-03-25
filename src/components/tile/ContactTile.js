import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert2 from "react-sweetalert2";

export const ContactTile = ({ data, handleDelete }) => {
    const transformContactPhone = (phoneNumber) => {
        let output = "(";
        output += phoneNumber.substring(0,3);
        output += ") ";
        output += phoneNumber.substring(3,6);
        output += " - ";
        output += phoneNumber.substring(7);
        return output;
    }

    const [swalProps, setSwalProps] = useState({});

    const passDataToDelete = (i) => {
        handleDelete(i, "contact");
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
                <tr style={{borderBottom: "5px"}}>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th> </th>
                </tr>
                </thead>


                {data.map((contact, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td>{contact.name}</td>
                            <td>{transformContactPhone(contact.phone)}</td>
                            <td>{contact.email}</td>
                            <td style={{marginTop: 5, marginBottom: 5}} className="btn btn-outline-danger" onClick={() => passDataToDelete(index)}>Delete</td>
                        </tr>
                        </tbody>
                    )
                })}
            </Table>
            <SweetAlert2 title={swalProps.title} show={swalProps.show} icon={swalProps.icon} showConfirmButton={swalProps.showConfirmButton} />
        </div>
    );
};
