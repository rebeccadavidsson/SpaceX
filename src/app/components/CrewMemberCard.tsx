import { CrewMember } from '../../features/crew/types';

const CrewMemberCard = (props: { member: CrewMember }) => {
    return <div>
        <img className="object-cover object-top rounded-md h-64 w-full"
             src={props.member.image}
             alt=""/>
        <h1 className="mt-4 text-2xl font-semibold text-gray-100 capitalize">{props.member.name}</h1>
        <p className="mt-2 text-gray-300 capitalize">{props.member.agency}</p>
        <a className="mt-4 text-gray-500 capitalize" href={props.member.agency}>Wikipedia</a>
    </div>;
}
export default CrewMemberCard;