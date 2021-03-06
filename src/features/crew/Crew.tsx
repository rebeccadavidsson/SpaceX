import React, { useEffect, useState } from 'react';
import { CrewMember } from './types';
import CrewMemberCard from '../../app/components/CrewMemberCard';
import ScrollReveal from '../../utils/ScrollReveal';
import { getGridChunks } from '../../utils/helpers';

export function Crew({crewData}: { crewData: CrewMember[] }) {
    const chunkSize = 3;
    const [crew, setCrew] = useState<CrewMember[][]>([]);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const data = [...crewData];
        setCrew(getGridChunks(data.slice(0, chunkSize), chunkSize));
    }, [crewData]);

    return (
        <ScrollReveal>
            <div className="py-12 mx-auto xl:items-center xL:-mx-4" data-cy="crew-members">
                <h2 className="text-2xl font-semibold text-gray-100 pb-8 pt-8 text-right">The Crew</h2>

                {crew.map((grid: CrewMember[], row: number) => {
                    return (
                        <div key={"row" + row}>
                            <ScrollReveal>
                                <div
                                    className={"reveal-from-left md:w-full md:flex md:pb-24 " +
                                        (row % 2 === 0 ? "justify-end" : "justify-start")}>
                                    <div className="md:w-3/5 grid grid-cols-1 gap-8 mt-8 xl:mt-0 md:grid-cols-3">
                                        {grid.map((member: CrewMember) => {
                                            return (
                                                <CrewMemberCard key={member.id} member={member}/>
                                            )
                                        })}
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    )
                })}

                {showButton &&
                    <div className="flex justify-end" onClick={() => setShowButton(false)}>
                        <button
                            data-cy="load-more-crew"
                            onClick={() => setCrew(getGridChunks(crewData, chunkSize))}
                            className="text-slate-200 bg-gray-900 hover:bg-gray-800 font-bold py-2 px-8 rounded">
                            Show More
                        </button>
                    </div>
                }
            </div>
        </ScrollReveal>
    );
}

export default Crew;