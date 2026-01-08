'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQContent() {
  const [expandedId, setExpandedId] = useState<number>(1); // First item expanded by default
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What is ShopRise',
      answer: 'ShopRise is an online marketplace that allows users to buy and sell a wide range of items, including electronics, furniture, clothing, and more. It\'s a convenient platform for connecting with local buyers and sellers.'
    },
    {
      id: 2,
      question: 'How do I create an account on ShopRise?',
      answer: 'To create an account, click on the Sign Up button and fill in your details including email, password, and basic information.'
    },
    {
      id: 3,
      question: 'Is ShopRise available in my location?',
      answer: 'ShopRise is available in multiple locations. Check our coverage area to see if we operate in your region.'
    },
    {
      id: 4,
      question: 'How can I list an item for sale on ShopRise?',
      answer: 'Click on "Sell on ShopRise", add photos, description, price, and category to list your item for sale.'
    },
    {
      id: 5,
      question: 'Are there any fees for using ShopRise?',
      answer: 'ShopRise charges a small commission on completed sales. Listing items is free.'
    },
    {
      id: 6,
      question: 'How do I contact a seller or buyer on ShopRise?',
      answer: 'Use our built-in messaging system to communicate securely with buyers and sellers.'
    },
    {
      id: 7,
      question: 'Is it safe to meet with people I connect with on ShopRise?',
      answer: 'Always meet in public places, bring a friend, and verify the item before making payment for your safety.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? 0 : id);
  };

  return (
    <div 
      className="flex flex-col items-center mt-10 mb-10"
      style={{ 
        width: '1280px',
        background: '#FFFFFF',
        padding: '0px',
        gap: '45px',
        margin: '0 auto'
      }}
    >
      {/* Header Section */}
      <div 
        className="flex flex-col items-center justify-center mt-10 mb-10"
        style={{ 
          width: '432px',
          height: '68px',
          gap: '10px',
          background: '#FFFFFF'
        }}
      >
        <h1 
          style={{ 
            width: '432px',
            height: '39px',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '32px',
            lineHeight: '39px',
            color: '#1F3A93',
            textAlign: 'center'
          }}
        >
          Frequently Asked Questions
        </h1>
        <p 
          style={{ 
            width: '425px',
            height: '19px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#000000',
            textAlign: 'center'
          }}
        >
          Click on the question to view the corresponding answer.
        </p>
      </div>

      {/* FAQ Section */}
      <div 
        className="flex flex-col items-center mb-20"
        style={{ 
          width: '1280px',
          gap: '50px',
          background: '#FFFFFF'
        }}
      >
        {/* FAQ List */}
        <div 
          className="flex flex-col"
          style={{ 
            width: '1230px',
            gap: '40px'
          }}
        >
          {/* FAQ Items Container */}
          <div 
            className="flex flex-col"
            style={{ 
              width: '1230px',
              gap: '15px'
            }}
          >
            {faqItems.map((item) => (
              <div 
                key={item.id}
                className="flex flex-col"
                style={{ 
                  width: '1230px',
                  background: '#FFFFFF'
                }}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="flex items-center"
                  style={{ 
                    width: '1230px',
                    height: '42px',
                    padding: '10px 20px',
                    gap: '10px',
                    background: expandedId === item.id ? '#FF7F50' : 'rgba(211, 211, 211, 0.5)',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span 
                    style={{ 
                      width: '1190px',
                      height: '22px',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '22px',
                      color: expandedId === item.id ? '#FFFFFF' : '#333333',
                      flexGrow: 1
                    }}
                  >
                    {item.id}. {item.question}
                  </span>
                </button>

                {/* Answer (shown when expanded) */}
                {expandedId === item.id && (
                  <div 
                    className="flex items-center"
                    style={{ 
                      width: '1230px',
                      minHeight: '64px',
                      padding: '10px 20px',
                      gap: '10px'
                    }}
                  >
                    <p 
                      style={{ 
                        width: '1190px',
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#000000',
                        flexGrow: 1
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ask Your Question Section */}
          <div 
            className="flex flex-col"
            style={{ 
              width: '1230px',
              gap: '10px'
            }}
          >
            <h2 
              style={{ 
                width: '173px',
                height: '24px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#333333'
              }}
            >
              Ask your question
            </h2>

            {/* Input Row */}
            <div 
              className="flex"
              style={{ 
                width: '1230px',
                height: '43px',
                gap: '10px'
              }}
            >
              {/* Email Input */}
              <div 
                className="flex items-center"
                style={{ 
                  width: '483px',
                  height: '43px',
                  padding: '2px 2px 2px 10px',
                  border: '1px solid #D3D3D3',
                  borderRadius: '25px',
                  boxSizing: 'border-box'
                }}
              >
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{ 
                    width: '100%',
                    height: '19px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#333333',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent'
                  }}
                />
              </div>

              {/* Message Input */}
              <div 
                className="flex items-center"
                style={{ 
                  width: '737px',
                  height: '43px',
                  padding: '2px 2px 2px 10px',
                  gap: '10px',
                  border: '1px solid #D3D3D3',
                  borderRadius: '25px',
                  boxSizing: 'border-box'
                }}
              >
                <input 
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello, is this article still available?"
                  style={{ 
                    width: '100%',
                    height: '19px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#333333',
                    border: 'none',
                    outline: 'none',
                    background: 'transparent'
                  }}
                />

                {/* Send Button */}
                <button 
                  className="flex items-center justify-center"
                  style={{ 
                    width: '87px',
                    height: '39px',
                    padding: '10px',
                    gap: '10px',
                    background: '#1F3A93',
                    borderRadius: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  <span 
                    style={{ 
                      width: '40px',
                      height: '19px',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '19px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    Send
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}