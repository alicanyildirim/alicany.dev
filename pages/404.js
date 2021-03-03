import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <NextSeo
        title="404 – Alican Yıldırım"
        canonical="https://alicany.dev/404"
        openGraph={{
          url: 'https://alicany.dev/404',
          title: '404 – Alican Yıldırım'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Page Not Found
        </h1>
        <p className="prose text-gray-600 dark:text-gray-400 mb-8" style={{marginTop:"20px"}}>
          <video autoPlay loop muted playsInline>
              <source src="/static/gifs/hackerman.mp4" type="video/mp4" />
          </video>
          <p style={{marginTop:"15px"}}>
            I will use this opportunity to exercise my right to recommend you the&nbsp;
            <Link href="https://www.youtube.com/watch?v=bS5P_LAqiVg" >
              <a target="_blank">Kung Fury</a>
            </Link>.
          </p>
        
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
