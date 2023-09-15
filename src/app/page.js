import Image from 'next/image'

export default function Home() {
  return (
    <>
    <script type="text/javascript" async src="//l.getsitecontrol.com/94gdpgj4.js"></script>
    <div className="mx-auto p-4 w-screen flex flex-col items-center max-w-6xl">
      <Image src="/logoLarge.png" width={128} height={128} className="mx-auto"></Image>
      <h1 className="text-6xl mt-4 font-sans text-primary pb-4 mx-2"> CamelidCoin</h1>
      <div className="sm:w-full md:w-1/2">
        <p className="pt-4 text-primary"> CamelidCoin is a blockchain protocol designed for distributed large language model computation and training. Clients submit input for completion by a pool of compute nodes who are compensated in return. To ensure output validity, we propose a new algorithm called RASTiC which quickly verifies output authenticity with near certainty. Our protocol is built on the original Bitcoin model and has been modified to fit our use case. </p>
        <a href="/whitepaper.pdf" className='mr-auto text-white bg-black py-2 px-6 rounded mt-4 inline-block text-center font-semibold'> Read The Whitepaper &#10132;</a>
        <br/>
        <a href="https://github.com/dhd5076/CamelidCoin" className='mr-auto text-white bg-black py-2 px-6 rounded mt-2 inline-block text-center font-semibold'> View The Source On Github &#10132;</a>

        <br/>
        <a href="https://discord.gg/Uv3v5pJZQr" className='mr-auto text-white bg-black py-2 px-6 rounded mt-2 inline-block text-center font-semibold'> Join The Discord &#10132;</a>
      </div>
    </div>
    <div className="sticky top-[100vh] bg-primary w-full text-center p-4 text-xs">
      &#169; 2023 CamelCoin | Released under the GPLv3 License
    </div>
    </>
  )
}
