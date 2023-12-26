import {Header} from "../Header";

export const DefaultTemplate = ({children, setVisible}) => {
  return (
    <>
      <Header setVisible={setVisible} />
      <main>
        {children}
      </main>
    </>
  );
};
