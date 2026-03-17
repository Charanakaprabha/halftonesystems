import { Industries, IndustriesHero } from '../components/WhatWeDo';

export const IndustriesPage = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <IndustriesHero />
            <Industries />
        </div>
    );
};
