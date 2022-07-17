import React from 'react';

import { CompanyData } from './types';

export function Company({companyData}: { companyData: CompanyData }) {

    return (
        <div className="pt-24 pb-24">
            <div
                className="block pb-8 max-w-sm">
                <h1 className="mb-2 text-3xl font-bold tracking-tight">{companyData.name}</h1>
                <p className="font-normal">{companyData.summary}</p>
            </div>

            <div className="text-slate-400 text-sm pt-6">
                <p className="text-slate-300 font-bold">Address</p>
                <p>{companyData?.headquarters?.address}</p>
                <p>{companyData?.headquarters?.city}</p>
                <p>{companyData?.headquarters?.state}</p>
            </div>
        </div>
    );
}
