'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  interface FAQ {
    id: number;
    question: string;
    answer: string;
  }

  const faqs :FAQ[] = [
    {
      id: 1,
      question: "What is ShopRise",
      answer: "ShopRise is an online marketplace that allows users to buy and sell a wide range of items, including electronics, furniture, clothing, and more. It's a convenient platform for connecting with local buyers and sellers."
    },
    {
      id: 2,
      question: "How do I create an account on ShopRise?",
      answer: "To create an account, click on the 'Sign Up' button and fill in your details including email, password, and personal information."
    },
    {
      id: 3,
      question: "Is ShopRise available in my location?",
      answer: "ShopRise is available in most locations. Check our website for the complete list of supported areas."
    },
    {
      id: 4,
      question: "How can I list an item for sale on ShopRise?",
      answer: "Simply click on 'Sell' button, upload photos of your item, add description, set a price and publish your listing."
    },
    {
      id: 5,
      question: "Are there any fees for using ShopRise?",
      answer: "Basic listings are free. We charge a small commission only when your item sells successfully."
    },
    {
      id: 6,
      question: "How do I contact a seller or buyer on ShopRise?",
      answer: "Use our built-in messaging system to communicate safely with buyers and sellers directly through the app."
    },
    {
      id: 7,
      question: "Is it safe to meet with people I connect with on ShopRise?",
      answer: "We recommend meeting in public places and following our safety guidelines. Always trust your instincts."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="w-[432px] mx-auto mb-12 flex justify-center flex-col gap-[10px]">
          <h1 
            className="w-[432px] text-[32px]  font-medium leading-[100%] text-center m-1"
            style={{ color: '#1F3A93' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="w-[425px] text-base font-normal leading-[100%] text-center text-gray-900 m-0">
            Click on the question to view the corresponding answer.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-[1198px] mx-auto space-y-4 mb-12">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
  onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
  className={`w-full max-w-[1230px] h-[42px] text-left
    px-[20px] py-[10px]
    transition-colors
    ${
      openQuestion === faq.id
        ? 'bg-[#FF7F50] text-white'
        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
    }`}
>
  <span className="font-medium text-[14px] leading-[100%]">
    {faq.id}. {faq.question}
  </span>
</button>

              
              {openQuestion === faq.id && (
                <div className="bg-gray-50 px-6 py-4 border-l-4 border-orange-400">
                  <p className="text-gray-900 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ask Your Question Section */}
        <div className="w-[1230px] mx-auto flex flex-col gap-[10px]">
  <h2 className="font-medium text-[20px] leading-[100%] tracking-[0%] text-gray-900 ">
    Ask your question
  </h2>

  <div className="flex gap-4">
    <input
      type="email"
      placeholder="Email"
      className="w-[483px] h-[43px]
      px-[10px] py-[2px]
      border border-[#D3D3D3]
      rounded-[25px]
      focus:outline-none"
    />

    <input
      type="text"
      placeholder="Hello, is this article still available?"
      className="w-[737px] h-[43px]
      px-[10px] py-[2px]
      border border-[#D3D3D3]
      rounded-[25px]
      focus:outline-none"
    />

    <button
      className="w-[87px] h-[39px]
      px-[10px]
      rounded-[20px]
      text-white font-medium
      hover:bg-[#1A327F]
      transition-colors"
      style={{ backgroundColor: '#1F3A93' }}
    >
      Send
    </button>
  </div>
</div>

      </div>
    </div>
  );
}