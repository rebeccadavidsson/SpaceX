import ScrollReveal from '../../utils/ScrollReveal';
import { Company } from '../../features/company/Company';
import Crew from '../../features/crew/Crew';
import { CompanyData } from '../../features/company/types';
import { CrewMember } from '../../features/crew/types';

const Home = (props: { companyData: CompanyData | undefined, crewData: CrewMember[] | undefined }) => {
    return <main className="container mb-auto">
        {props.companyData && <ScrollReveal>
            <Company companyData={props.companyData}/>
        </ScrollReveal>}

        {props.crewData?.length && <Crew crewData={props.crewData}/>}
    </main>;
}
export default Home;