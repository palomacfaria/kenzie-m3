import { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { useOutclick } from "../../hooks/useOutclick";
import { useKeydown } from "../../hooks/useKeydown";

export const Modal = ({ children, setIsOpen }) => {
  const modalRef = useOutclick(() => {
    setIsOpen(false);
  });

  const buttonRef = useKeydown("Escape", (element) => {
    element.click();
  });

  return (
    <div className={styles.modalOverlay} role="dialog">
      <div ref={modalRef} className={styles.modalBox}>
        <button
          ref={buttonRef}
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
        >
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};
