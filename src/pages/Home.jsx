import React from 'react';
import { Hero } from '../components/Hero';
import {
    Intro, WhyChoose, TechSuite, SpecializedServices,
    Impact, WhatWeDoTimeline
} from '../components/WhatWeDo';

export const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Intro />
            <WhatWeDoTimeline>
                <WhyChoose />
                <TechSuite />
                <SpecializedServices />
            </WhatWeDoTimeline>
            <Impact />
        </div>
    );
};
