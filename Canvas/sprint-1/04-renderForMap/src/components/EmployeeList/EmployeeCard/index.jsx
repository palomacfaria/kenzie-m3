export const EmployeeCard = ({employee}) => {
    return(
        <li>
            <h3>{employee.name}</h3>
            <p>{employee.job}</p>
        </li>
    )
}