import Search from '../components/Search';
import { useAppSelector } from '../hooks';
import { selectCrew } from '../../features/crew/selectors';

const CrewPage = () => {
    const crewData = useAppSelector(selectCrew);

    return (
        <div className="container">
            {crewData.length && <Search data={crewData}/>}
        </div>
    )

}
export default CrewPage;