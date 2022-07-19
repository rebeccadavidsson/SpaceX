import { Company } from '../../features/company/Company';
import Crew from '../../features/crew/Crew';
import { CompanyData } from '../../features/company/types';
import { CrewMember } from '../../features/crew/types';
import { useAppSelector } from '../hooks';
import { selectCrewStatus } from '../../features/crew/selectors';

const Home = (props: { companyData: CompanyData | undefined, crewData: CrewMember[] }) => {
    const crewStatus = useAppSelector(selectCrewStatus);

    return (
        <main className="container mb-auto md:max-w-5xl">

            {props.companyData?.name ? <Company companyData={props.companyData}/> : null}

            {props.crewData?.length && crewStatus === 1 ? <Crew crewData={props.crewData}/> : null}

        </main>);
}
export default Home;