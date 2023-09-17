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
      <div className="h-screen">
        <div className="justify-center items-center bg-gradient-to-b from-black/50" id="background">
          <div className="max-w-7xl mx-auto p-4 text-center text-white h-screen">
            <img src="/logoLarge.png" className="w-1/6 mx-auto mt-10 hidden sm:block"/>
            <h1 className="text-6xl mt-4 font-sans pb-4">CamelidCoin</h1>
            <h4 className="text-2xl font-bold font-sans">Open-Source. Distributed. Censorship-Free.</h4>
            <p className="pt-4 sm:w-1/2 mx-auto">Our groundbreaking blockchain protocol is tailored for distributed GPT model computation. Be a part of this paradigm shift, earning rewards for your contributions. Enjoy a network that champions freedom of expression, untouched by censorship. Discover the true potential of decentralized AI!</p>
            <Link href="#features" className="mt-4 bg-primary/75 hover:bg-primary/100 py-2 px-4 inline-block text-black font-bold rounded mb-10"> Learn More </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6 relative" id="features">
        <h1 className="text-2xl text-white font-bold mb-6">Why CamelidCoin?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/75 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Open Source</h2>
            <p className="text-gray-700 mb-4">
            CamelidCoin is built on the principles of open-source software. Our entire blockchain protocol and ecosystem are open for scrutiny and contributions from the global community. We believe in transparency, collaboration, and innovation. By being open-source, we encourage developers and enthusiasts to participate in shaping the future of decentralized AI. Join us in making AI accessible to all, free from centralized control.
            </p>
            <Link href="https://github.com/dhd5076/CamelidCoin" className="text-blue-600 hover:underline">
              View The Source On Github
            </Link>
          </div>
          <div className="bg-white/75 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Distributed</h2>
            <p className="text-gray-700 mb-4">
            CamelidCoin operates on a decentralized network, distributing the computational workload across a multitude of nodes. This distribution ensures greater security, efficiency, and resilience against failures. No single entity has control over the entire network, enhancing transparency and reducing the risk of centralized authority. By being part of a distributed system, you contribute to a more inclusive and robust AI ecosystem, where every participant plays a crucial role in the network's success. Join us in the power of decentralization!
            </p>
            <Link href="/whitepaper.pdf" className="text-blue-600 hover:underline">
              Read The Whitepaper
            </Link>
          </div>
          <div className="bg-white/75 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Censorship-Free</h2>
            <p className="text-gray-700 mb-4">
            CamelidCoin champions freedom of expression and resists any form of censorship. Our decentralized platform ensures that users can express their ideas, opinions, and creativity without fear of suppression or restriction. By leveraging blockchain technology, we create a space where ideas flow freely, fostering a culture of open discourse. Embrace a platform where your voice matters and is protected, allowing for true innovation and progress in the field of AI. Join us in a censorship-free future!
            </p>
            <Link href="/feature3" className="text-blue-600 hover:underline">
              Learn more
            </Link>
          </div>
        </div>
        <div className="mt-10 rounded-lg text-gray-100 bg-gray-900/25 p-6 backdrop-blur shadow-lg" id="faq">
          <h1 className="text-2xl font-bold p-6 text-center">Frequently Asked Questions</h1>
          <div className="max-w-2xl mx-auto">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">What is CamelidCoin?</h2>
              <p className="mb-4">
                CamelidCoin is a decentralized blockchain platform designed for distributed GPT model computation. It allows users to participate in the AI ecosystem and be rewarded for their contributions. The platform operates on the principles of openness, decentralization, and freedom of expression.
              </p>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">How can I get involved?</h2>
              <p className="mb-4">
                To get involved with CamelidCoin, you can start by exploring our website and learning more about our features and principles. If you're a developer or enthusiast, you can contribute to our open-source project on GitHub. Join our community discussions to stay updated and engage with like-minded individuals.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg" id="contact">
              <h2 className="text-xl font-semibold mb-4 text-black">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any inquiries or need assistance, feel free to email us at <b>contact@dylandunn.me</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}