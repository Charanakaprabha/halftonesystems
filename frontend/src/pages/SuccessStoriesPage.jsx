import React from 'react';
import { SuccessStories } from '../components/SuccessStories';
import { Partnerships } from '../components/Partnerships';

export const SuccessStoriesPage = () => {
    return (
        <div className="page-wrapper">
            <SuccessStories />
            <Partnerships />
        </div>
    );
};
