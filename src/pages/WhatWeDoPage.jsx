import React from 'react';
import {
    Intro, WhyChoose, TechSuite, SpecializedServices,
    Impact, WhatWeDoTimeline
} from '../components/WhatWeDo';

export const WhatWeDoPage = () => {
    return (
        <div className="what-we-do-page pt-24">
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
