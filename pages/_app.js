import '@/styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import SEO from '../next-seo.config';
import MDXComponents from '@/components/MDXComponents';
import { useAnalytics } from '@/lib/analytics';
import 'animate.css/animate.css';
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  useAnalytics();
  const [isLeaving,setIsLeaving] = useState(false);
  useEffect(function mount() {
    function onBeforeUnload() {
      setIsLeaving(true);
      console.log("unload!");
    }
    window.addEventListener("beforeunload", onBeforeUnload);
    return function unMount() {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  });
  if (isLeaving) {
      return (
            <div
            style={{
              minHeight: "100vh",
              padding: "0 0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
            >
              <div
              style={{
                padding: "5rem 0",
                flex: 1, 
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
              }}
              >
                <h1 className="font-bold text-5xl text-gray-600 dark:text-gray-400 mb-4 animate__animated animate__bounceOut animate__slow">
                  alicany.dev
                </h1>
              </div>
            </div>
            );
  } else {
      return (
        <ThemeProvider attribute="class">
          <MDXProvider components={MDXComponents}>
            <Head>
              <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      );
  }
}
