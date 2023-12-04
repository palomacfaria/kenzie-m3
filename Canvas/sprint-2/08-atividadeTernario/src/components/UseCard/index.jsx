import style from "./style.module.css";

export const UseCard = ({name, email, status}) => {
    return(
        <div className={`${style.useCard} ${status ? style.active : ""}`}>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}