import { Header } from "../../components/Header";
import { PhotoList } from "../../components/PhotoList";


export const HomePage = ({setVisible}) => {
  return (
    <>
      <Header setVisible={setVisible}/>
      <mian>
        <PhotoList />
      </mian>
    </>
  );
};
