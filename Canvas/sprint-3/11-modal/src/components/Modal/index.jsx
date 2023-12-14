import style from "./style.module.css";

export const Modal = ({children, setIsOpen}) => {
    return(
        <div className={style.modalOverlay} role="dialog">
            <div  className={style.modalBox}>
                <button  className={style.closeButton} onClick={() => setIsOpen(false)}>Fechar</button>
                {children}
            </div>
        </div>
    )
}