import React from 'react';

import PageHeader from '../Organisms/pageHeader';
import SubMessage from '../Molecules/SubMessage';
import SubMessage2 from '../Molecules/SubMessage2';
import BulletPoints from '../Atoms/bulletPoint'

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/about-1.jpg';

const AboutUsPage = () => (
    <Aux>
        <PageHeader pageName="About Yiss" headerImage={HeaderImage} className=' object-bottom ' />
        
        <div className="tj-container">
            <SubMessage 
                heading="The Problem"
                messageBody="Notwithstanding that the foundation of all future innovation is research, 
                young researchers find it difficult to get into the research field. This problem is more so 
                in the health sciences fields in Africa. The reason for this is multifold; scarcity of mentorship, 
                lack of training in research methods and design, lack of writing skills, lack of motivation, 
                lack of funding. "
            />
            <SubMessage 
                heading="Our Mission"
                messageBody="The Young Investigators Science Society brings together early career health science 
                researchers with the goal of building their research capacities and promoting communication 
                and collaboration among them."
            />
            <SubMessage 
                heading="Our Vision"
                messageBody="YISS aspires to form a community of world-class competent and motivated young investigators
                capable of engaging in independent research to solve varying health problems which plague
                the health of nations."
            />
            <SubMessage 
                heading="Our Objectives"
                messageBody="YISS has as objective to:"
            />
            <div className=" sm:pl-8">
                <BulletPoints styles=" text-sm pt-2 " text="Capacity building of young health science researchsers" />
                <BulletPoints styles=" text-sm pt-2 " text="Attract young scientists to the field of research" />
                <BulletPoints styles=" text-sm pt-2 " text="Provide mentorship to young inexperienced researchers" />
                <BulletPoints styles=" text-sm pt-2 " text="Promote collaboration and mutual assistance between early career researchers" />
                <BulletPoints styles=" text-sm pt-2 " text="Contribute to the larger public through proactive acts of health education" />
                <BulletPoints styles=" text-sm pt-2 " text="Attract funding for research projects" />
            </div>
                      
            <SubMessage 
                heading="Our Values"
                messageBody="All of our activities are driven by the following core values:"
            />
            <SubMessage2 
                heading="Integrity and the pursuit of excellence:"
                messageBody="YISS members adhere to the highest professional values and practices when conducting and 
                applying the results of science and scholarship and strive to go above and beyond in every endeavor."
            />
            <SubMessage2 
                heading="Curiosity:"
                messageBody="We believe that our curiosity is one of our greatest strengths and always persist in asking ‘why?’"
            />
            <SubMessage2 
                heading="Innovation and disruption:"
                messageBody="Our belief is that there is no one way of doing things, no one size fits all 
                approach to solving problems and that every method can always be improved. We encourage
                challenging the status quo."
            />
            <SubMessage2 
                heading="Gender balance and equal opportunity:"
                messageBody="We prioritize women’s equality and empowerment as both the objective, 
                and as part of the solution to getting more young scientists into research."
            />
        </div>
    </Aux>   
);

export default AboutUsPage;