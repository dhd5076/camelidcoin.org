import Image from 'next/image';
import { useEffect } from 'react';

import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const background = document.getElementById('background');
    background.classList.remove('opacity-0');
    background.classList.add('opacity-100');
  }, []);
  
  return (
    <>
      <script type="text/javascript" async src="//l.getsitecontrol.com/94gdpgj4.js"></script>
      <div className="mx-auto w-full relative h-screen">
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity transition ease-in-out duration-1000" id="background">
          <div className="absolute inset-0 bg-[url('/bg1.jpg')] opacity-25 bg-cover bg-fixed"/>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/25">
          <div className="max-w-7xl mx-auto p-4 text-center text-white">
            <h1 className="text-6xl mt-4 font-sans pb-4">CamelidCoin</h1>
            <h4 className="text-2xl font-bold font-sans">Open-Source. Distributed. Censorship-Free.</h4>
            <p className="pt-4 sm:w-1/2 mx-auto">Our groundbreaking blockchain protocol is tailored for distributed GPT model computation. Be a part of this paradigm shift, earning rewards for your contributions. Enjoy a network that champions freedom of expression, untouched by censorship. Discover the true potential of decentralized AI!</p>
            <Link href="/learn" className="mt-4 bg-primary/75 hover:bg-primary/100 py-2 px-4 inline-block text-black font-bold rounded"> Learn More </Link>
          </div>
        </div>
      </div>
    </>
  );
}