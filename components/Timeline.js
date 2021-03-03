import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Web Development Intern">
        During my internship at JotForm, I have worked on a widget that will enable users to use
        their voices to fill out forms. Great place to work. 
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step tile="Part-Time Student Assistant">
        During my time in ÖGEM (Center for Advancing Learning and Teaching), I have mainly assisted
        regarding their website troubleshooting and content generation.
      </Step>
      
    </ul>
    <Divider />
    <Year>2014 - 2016</Year>
    <ul>
      <Step title="Enrolled in Middle East Technical University">
        I enrolled in the METU, Computer Education and Instructional Technologies department. 
        Soon, I realized that I would be happier if I studied Computer Engineering, 
        then inquired about the minor and double major programs. I was lucky enough to get accepted to the double
        major program in METU Computer Engineering Department.     
      </Step>
      
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="Started High School">
        Dorm life was hard, but friendships were good. I realize now that my English education was better compared to other schools. 
        In the 10th grade, I started to watch python tutorials from the youtube channel  thenewboston in my free time.
        I was beginning to get my feet wet with programming.
      </Step>
      <Step title="Graduated Primary School">
        I was the valedictorian of my school.
      </Step>
    </ul>
    <Divider />
    <Year>2007</Year>
    <ul>
      <Step title="Internet Connection">
        I was in love with the endless possibilities that Internet provided. Encyclopedias were indeed a thing of the past.
      </Step>
    </ul>
    <Divider />
    <Year>2005</Year>
    <ul>
      <Step title="Computer without Internet">
        I was one of those children that get an Internet connection far late. 
        I remember playing Counter-Strike on my own against bots. Wow, sad stuff, moving on.
      </Step>
    </ul>
    <Divider />
    <Year>
      <s style={{color: "#7a8485", textDecorationStyle: "double", textDecorationThickness: "2px"}}>
        <span style={{color: "white"}}>1995</span>
      </s>
      &nbsp;&nbsp;&nbsp;1996
    </Year>
    <ul>
      <Step title="Born 👶🏼🍼">
       So this is not straightforward as usual. I was born in late December '95. 
       However, my parents did not want me to be a late boomer and behind the class. 
       So, according to my birth certificate, I was born in '96. 
       Essentially I started behind my grade level because my parents thought I wouldn't be smart enough. 
       Thanks for counting on me, mom and dad! 
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Completed the Cloud Computing Basics (Cloud 101) from Coursera">
          I have completed the Cloud Computing Course given by LearnQuest. 
          It was a great introductory course for getting familiar with all the cloud offerings and their trade-offs. 	
        </Step>
         <Year>2020</Year>
      <ul>
        <Step title="Software Engineer">
          During my time at Nurd, I have worked with the dragon development team to introduce
          new features and fix the bugs issued. I had the opportunity to work with various technologies
          such as Go, Nodejs, GCloud, Dockers, and many more. 
        </Step>
        <Step title="Started to learn React ⚛️">
          I took a deep dive at ReactJS and got my experience with messing around with some projects in my free time. 
        </Step> 
      </ul>
      </ul>
      
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
