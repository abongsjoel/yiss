import React from 'react';

import PageHeader from '../Organisms/pageHeader';
import SubMessage from '../Molecules/SubMessage';

import Aux from '../hoc/Auxilary';

import HeaderImage from '../assets/images/communities.jpg';

const Blog = () => (
    <Aux>
        <PageHeader pageName="Blog" headerImage={HeaderImage} />
        
        <div className="tj-container">
            <SubMessage 
                heading="Committee on Research Formation CReF"
                messageBody="CReF is responsible for the formation of young health scientists into knowledgeable 
                and skilled researchers. It shall organize training courses, workshops and seminars and other 
                activities as it sees fit to achieve its objective. "
            />
            <SubMessage 
                heading="Mentorship Program"
                messageBody="The MP aims to pair young investigators to guide them in conceiving and executing their own 
                research projects. The MP will actively seek out mentors who are willing to volunteer their time for the 
                benefit of young inexperienced investigators. "
            />
            <SubMessage 
                heading="Committee on Continued Education"
                messageBody="CCE aims to promote a culture of continual learning among members. It serves as a forum to 
                update members on changes and new findings in the various fields of the health sciences. 
                It also aims to promote the acquisition of new practical skills."
            />
            <SubMessage 
                heading="Committee on Health Promotion"
                messageBody="Health is wealth and pivotal to any meaningful development. CHP aims to educate the public on 
                health issues and in this way ensure healthy lives and promote well-being for all at all ages (SDG 3) "
            />
            <SubMessage 
                heading="Monitoring and Evaluation Commission (MEC)"
                messageBody="YISS projects and programs are conceived in ways that allow for objective evaluation. 
                The MEC monitors and evaluates all YISS projects to ensure that milestones are being met and in this 
                way serve as a feedback mechanism. The commission is also responsible for awarding prizes to 
                outstanding young researchers."
            />
            <SubMessage 
                heading="Communications commission "
                messageBody="When scientists communicate effectively, science thrives. 
                The CC ensures the dissemination of information between YISS members and arms. 
                The CC is also responsible for effectively communicating the society’s agenda with the wider public. "
            />
            
        </div>

    </Aux>   
);

export default Blog;