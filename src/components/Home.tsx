import { useState } from "react";
import "./Home.styles.css";
import { IEmployee, dummyEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";


const Home = () => {

    const [employeeList, setEmployeeList] = useState( dummyEmployeeList as IEmployee[])
    return ( 
        <>
         <article className="artice-header">
            <header>
                <h1>React: CRUP APP</h1>
            </header>
         </article>
         <section className="section-content">
            <EmployeeList list={employeeList}  />
         </section>
        </>
    )
};

export default Home;