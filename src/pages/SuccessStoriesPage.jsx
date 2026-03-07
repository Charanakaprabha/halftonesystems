import React from 'react';
import { SuccessStories } from '../components/SuccessStories';
import { Partnerships } from '../components/Partnerships';

export const SuccessStoriesPage = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            <SuccessStories />
            <Partnerships />
        </div>
    );
};
