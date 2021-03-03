import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Alican Yıldırım.
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a developer, writer, and creator. I work at Nurd as a Software Developer.
          You’ve found my personal blog, enjoy.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Latest
        </h3>
        <BlogPost
          title="How does Netflix do it?"
          summary="Did you encounter the exit animation Netflix shows when you are leaving the page? Let's see how it is done."
          slug="netflix-exit-animation"
        />
        <BlogPost
          title="Second Blog Post"
          summary="Summary of the second blog post"
          slug="second-blog-post"
        />
        <BlogPost
          title="Third Blog Post"
          summary="Summary of the third blog post"
          slug="third-blog-post"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="First Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna 
                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                       ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse 
                       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                       cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                       anim id est laborum."
          href=""
          icon=""
        />
        <ProjectCard
          title="Second Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna 
                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                       ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse 
                       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                       cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                       anim id est laborum."
          href=""
          icon=""
        />
        <ProjectCard
          title="Third Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna 
                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                       ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse 
                       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                       cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                       anim id est laborum."
          href=""
          icon=""
        />
        <Timeline />
      </div>
    </Container>
  );
}
