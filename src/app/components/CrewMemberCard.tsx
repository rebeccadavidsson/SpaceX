import { CrewMember } from '../../features/crew/types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectLikedMembers } from '../../features/crew/selectors';
import { handleLikeMember } from '../../features/crew/actions';
import { useEffect, useState } from 'react';

const CrewMemberCard = (props: { member: CrewMember }) => {
    const dispatch = useAppDispatch();
    const likedMembers = useAppSelector(selectLikedMembers);

    useEffect(() => {
    }, [likedMembers]);

    const [shake, setShake] = useState(false);

    const animate = () => {
        setShake(true);
        setTimeout(() => setShake(false), 300);
    }

    const handleClickMember = () => {
        animate();
        dispatch(handleLikeMember(props.member.id));
    }

    return (
        <div key={props.member.id} className="crew-member h-auto relative hover:cursor-pointer"
             onClick={() => handleClickMember()}>
            <img className="object-cover object-top rounded-md h-64 w-full member-image"
                 src={props.member.image}
                 alt=""/>
            <div className={"heart-overlay " +
                (likedMembers.includes(props.member.id) ? 'liked-member ' : null) +
                (shake ? 'shake' : null)}></div>
            <h1 className="mt-4 text-2xl font-semibold text-gray-100 capitalize">{props.member.name}</h1>
            <p className="mt-2 text-gray-300 capitalize">{props.member.agency}</p>
            <a className="mt-4 text-gray-500 capitalize" href={props.member.agency}>Wikipedia</a>
        </div>);
}
export default CrewMemberCard;