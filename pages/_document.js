import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

import { useEffect } from 'react';

export default function Document() {
    useEffect(() => {
        const background = document.getElementById('background');
        background.classList.remove('opacity-0');
        background.classList.add('opacity-100');
      }, []);
  return (
    <Html lang="en">
    <Head>
        <Analytics/>
    </Head>
      <body className="bg-[url('/bg1.jpg')] bg-cover transition-all opacity-0 duration-1000 delay-150 sm:delay-0" id="background">
        <div className="bg-gradient-to-t from-bgColor">
            <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}