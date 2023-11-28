export const StudentCard = ({ name, age, country }) => {
    return(
        <li>
            <h3>Aluno: {name} </h3>
            <p>Idade: {age} </p>
            <p>País: {country} </p>
        </li>
    )
}