import React from 'react';
import universe from '../../assets/universe.png';

import { CompanyData } from './types';

export function Company({companyData}: { companyData: CompanyData }) {

    return (
        <div className="md:pt-40 md:pb-52 md:flex">
            <div>
                <div
                    className="block pb-8 max-w-sm">
                    <h1 data-cy="company-name" className="mb-2 text-3xl font-bold tracking-tight">{companyData.name}</h1>
                    <p className="font-normal">{companyData.summary}</p>
                </div>

                <div className="text-slate-400 pt-6">
                    <p className="text-slate-300 font-bold">Address</p>
                    <p>{companyData?.headquarters?.address}</p>
                    <p>{companyData?.headquarters?.city}</p>
                    <p>{companyData?.headquarters?.state}</p>
                </div>

                <div className="text-slate-400 pt-6">
                    <p className="text-slate-300 font-bold">Founded</p>
                    <p>{companyData?.founded}</p>
                </div>

            </div>
            <div>
                <img src={universe} alt="universe"/>
            </div>
        </div>
    );
}
