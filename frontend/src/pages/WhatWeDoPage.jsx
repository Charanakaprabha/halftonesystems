import React from 'react';
import {
    Intro, WhyChoose, TechSuite, SpecializedServices,
    Impact, WhatWeDoTimeline
} from '../components/WhatWeDo';

export const WhatWeDoPage = () => {
    return (
        <div className="what-we-do-page" style={{ paddingTop: '120px' }}>
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
