import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container>
      <NextSeo
        title="Uses – Alican Yıldırım"
        description={`Here are the tools I'm currently using for coding and entertainment.`}
        canonical="https://alicany.dev/uses"
        openGraph={{
          url: 'https://alicany.dev/uses',
          title: 'Uses – Alican Yıldırım',
          description: `Here are the tools I'm currently using for coding and entertainment.`
        }}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          I Enjoy Using These
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here are the tools I'm currently using for coding and entertainment. 
          Most of these are websites that I think have great value. From algorithms to drawing, 
          these sites are fantastic to have in your arsenal to ease your workload or for a break that does not involve social media. 
          I would also like to know what other people enjoy using to create the longest bookmark in the entire world! 
          So, if you can recommend me some tools below, I would appreciate it. 
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
    