import Image from 'next/image';

const FAQPage = () => {
  const faqItems = [
    {
      question: 'What is CamelidCoin?',
      answer: 'CamelidCoin is a blockchain protocol designed for distributed large language model computation and training.'
    },
    {
      question: 'How do I get started with CamelidCoin?',
      answer: 'To get started with CamelidCoin, you can follow our comprehensive guide available in the documentation section.'
    },
  ];

  return (
    <div className="mx-auto w-full relative min-h-screen bg-bgColor">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 justify-center">
        <div className="max-w-7xl mx-auto p-4 text-center text-white bg-primary/25 h-full">
          <h1 className="text-4xl mt-4 font-sans pb-8">Frequently Asked Questions</h1>
          <div className="grid grid-cols-1 gap-6 max-w-lg mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="p-6">
                <h2 className="text-xl font-bold text-gray-200">{item.question}</h2>
                <p className="mt-2 text-gray-200">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;