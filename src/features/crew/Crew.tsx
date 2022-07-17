import React, { useEffect, useState } from 'react';
import { CrewMember } from './types';
import CrewMemberCard from '../../app/components/CrewMemberCard';
import ScrollReveal from '../../utils/ScrollReveal';

export function Crew({crewData}: { crewData: CrewMember[] }) {
    const chunkSize = 3;
    const getGridChunks = (crewData: CrewMember[]) => {
        return [...Array(Math.ceil(crewData.length / chunkSize))].map(_ => crewData.splice(0, chunkSize));
    }

    const [crew, setCrew] = useState<CrewMember[][]>([]);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        setCrew(getGridChunks(crewData.slice(0, chunkSize)));
    }, [crewData]);


    return (
        <ScrollReveal>
            <div className="py-12 mx-auto xl:items-center xL:-mx-4">
                <h2 className="text-2xl font-semibold text-gray-100 pb-8 pt-8 text-right">The Crew</h2>

                {crew.map((grid: CrewMember[], row: number) => {
                    return (
                        <ScrollReveal>
                            <div
                                className={"reveal-from-left md:w-full md:flex md:pb-24 " +
                                    (row % 2 === 0 ? "justify-end" : "justify-start")}>
                                <div className="md:w-3/5 grid grid-cols-1 gap-8 mt-8 xl:mt-0 md:grid-cols-3"
                                     key={"row" + row}>
                                    {grid.map((member: CrewMember) => {
                                        return (
                                            <CrewMemberCard key={member.id} member={member}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </ScrollReveal>
                    )
                })}

                {showButton &&
                    <div className="flex justify-end" onClick={() => setShowButton(false)}>
                        <button
                            onClick={() => setCrew(getGridChunks(crewData))}
                            className="text-slate-200 bg-gray-900 hover:bg-gray-800 font-bold py-2 px-8 rounded">
                            More
                        </button>
                    </div>
                }
            </div>
        </ScrollReveal>
    );
}

export default Crew;