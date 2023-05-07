import { useState } from "react";
import { IEmployee } from "./Employee.type"
import "./EmployeeList.styles.css"
import EmployeeModal from "./EmployeeModal";

type Props = {
    list: IEmployee[];
    onDeleteClickedHandle: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {

    const { list, onDeleteClickedHandle, onEdit } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data);
        setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false);
    }
    return <div>
        <article>
            <h3 className="list-header">EMPLOYEE LIST</h3>
        </article>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {list.map((employee) => {
                return (
                    <tr key={employee.id}>
                        <td>{`${employee.firstName} ${employee.lastName}`}</td>
                        <td>{employee.email}</td>
                        <td>
                            <div>
                                <input type="button" value="view" onClick={() => viewEmployee(employee)} />
                                <input type="button" value="Edit" onClick={() => onEdit(employee)} />
                                <input type="button" value="Delete" onClick={() => onDeleteClickedHandle(employee)} />
                            </div>
                        </td>
                    </tr>);
            })}
        </table>
        {showModal && dataToShow !== null && (<EmployeeModal onClose={onCloseModal} data={dataToShow} />)}
    </div>
}

export default EmployeeList;