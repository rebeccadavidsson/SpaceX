import React, { ChangeEvent, FC, useState } from 'react';
import { CrewMember } from '../../features/crew/types';
import CrewMemberCard from './CrewMemberCard';

interface SearchProps {
    data: CrewMember[]
}

const Search: FC<SearchProps> = ({data}) => {

    const [searchField, setSearchField] = useState('');
    const [sortCategory, setSortCategory] = useState('');
    const [sortedData, setSortedData] = useState<CrewMember[]>(data);

    const filteredMembers = sortedData.filter((member: CrewMember) => {
        return searchField ?
            member.name?.toLowerCase().includes(searchField.toLowerCase()) : data;
    });

    const sortByName = (): void => {
        setSortCategory('name');
        setSortedData([...data].sort((a: CrewMember, b: CrewMember) => a.name.localeCompare(b.name)));
    };

    const sortByAgency = (): void => {
        setSortCategory('agency')
        setSortedData([...data].sort((a: CrewMember, b: CrewMember) => a.agency.localeCompare(b.agency)));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value);
    };

    return (
        <div>
            <div className="relative pb-16 md:pt-24 pt-4">
                <input
                    data-cy="search"
                    onChange={(e) => handleChange(e)}
                    type="search" id="default-search"
                    className="md:w-2/3 m-0 m-auto block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    placeholder="Search crew members" required/>

            </div>
            <div className="flex md:w-2/3 m-0 m-auto justify-end space-x-3.5">
                <span className="font-bold">Sort by</span>
                <span
                    className={"hover:cursor-pointer " + (sortCategory === 'name' ? 'text-slate-100 font-bold underline' : 'text-slate-500')}
                    onClick={() => sortByName()}>Name</span>
                <span
                    className={"hover:cursor-pointer " + (sortCategory === 'agency' ? 'text-slate-100 font-bold underline' : 'text-slate-500')}
                    onClick={() => sortByAgency()}>Agency</span>
            </div>

            {filteredMembers?.length ?
                <div
                    className="md:w-2/3 m-0 m-auto content-center grid grid-cols-1 gap-8 mt-8 mt-2 md:mt-12 md:grid-cols-3">
                    {filteredMembers?.map((member: CrewMember) => {
                        return (
                            <CrewMemberCard key={member.id} member={member}/>
                        )
                    })}
                </div>
                :
                <div className="md:w-2/3 m-0 m-auto h-60">
                    <p>No members found...</p>
                </div>
            }
        </div>
    )
};
export default Search;