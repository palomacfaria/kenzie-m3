import { EmployeeCard } from "./EmployeeCard"

export const EmployeeList = ({employeeList}) => {
    return(
        <ul>
            {employeeList.map(employee => {
                return(
                    <EmployeeCard key={employee.id} employee={employee}/>
                )
            })}
        </ul>
    )
}