export const Exemple = ({isActive}) => {
    return(
        isActive ? <p>Estou ativo</p> : <p>Estou inativo</p>
    );
}