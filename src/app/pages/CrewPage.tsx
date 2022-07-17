import Search from '../components/Search';
import { CrewMember } from '../../features/crew/types';

const CrewPage = (props: { crewData: CrewMember[] }) => {

    return (
        <div className="container">
            {props.crewData.length ? <Search data={props.crewData}/> : null}
        </div>
    )

}
export default CrewPage;