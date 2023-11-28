import { StudentCard } from "../../components/StudentCard";
import { PageTemplate } from "../../components/PageTemplate";

export const ContactPage = () => {
    return(
        <PageTemplate>
            <StudentCard name={"Paloma"} age={23} country={"Brasil"}/>
        </PageTemplate>
    )
}