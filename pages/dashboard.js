import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Analytics from '@/components/metrics/Analytics';
import Container from '@/components/Container';
import GitHub from '@/components/metrics/Github';
import TopTracks from '@/components/TopTracks';

const url = 'https://alicany.dev/dashboard';
const title = 'Home Page – Alican Yıldırım';
const description =
  'My personal website, built with Next.js API routes deployed as serverless functions using React.';

export default function Dashboard() {
  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="prose text-gray-600 dark:text-gray-400 mb-4">
            This is my personal website, built with Next.js API routes
            deployed as serverless functions using React. I use this 
            website to share my work, experiences, and opinions. 
            Heavily based on             
            &nbsp;
            <Link href="https://leerob.io">
              <a target="_blank" rel="noopener noreferrer">leerob.io</a>
            </Link>.
          </p>
        </div>
        <div className="flex flex-col w-full">
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
