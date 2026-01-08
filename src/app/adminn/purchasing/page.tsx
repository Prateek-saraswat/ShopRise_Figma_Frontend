'use client';

import React, { useState } from 'react';

interface Order {
  id: number;
  date: string;
  image: string;
  name: string;
  seller: {
    name: string;
    avatar: string;
  };
  fulfilment: {
    status: string;
    color: string;
  };
  total: string;
  orderStatus: {
    status: string;
    color: string;
  };
}

export default function PurchasingContent() {
  const [activeTab, setActiveTab] = useState('Purchasing');
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const orders: Order[] = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    date: '18 March',
    image: '/purchasing.png',
    name: 'Litter troller sprayer',
    seller: {
      name: 'Jackson Smith',
      avatar: '/jackson.svg'
    },
    fulfilment: i === 0 || i === 3 || i === 4 || i === 5 ? 
      { status: 'Delivered', color: 'green' } :
      i === 1 ? { status: 'Packing', color: 'orange' } :
      { status: 'Refund', color: 'red' },
    total: '$300',
    orderStatus: i === 0 || i === 5 ?
      { status: 'Completed', color: 'green' } :
      i === 1 || i === 4 ? { status: 'Pending', color: 'orange' } :
      { status: 'Cancel', color: 'red' }
  }));

  return (
    <div 
      className="relative bg-white"
      style={{ 
        width: '100%',
        minHeight: '832px',
        padding: '20px 25px'
      }}
    >
      {/* Top Right Actions */}
      <div 
        className="flex items-center absolute"
        style={{ 
          right: '25px',
          top: '20px',
          gap: '20px'
        }}
      >
        {/* Notification Icon */}
        <button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 16.5c.41 0 .75-.34.75-.75h-1.5c0 .41.34.75.75.75zm3.75-3.75V8.625c0-2.03-1.1-3.73-3-4.185V4.125c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.315c-1.905.455-3 2.145-3 4.185v4.125L3.75 13.5v.75h10.5v-.75l-1.5-1.5z" fill="#333333"/>
          </svg>
        </button>

        {/* Go to marketplace */}
        <a 
          href="#"
          className="flex items-center"
          style={{ 
            gap: '8px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333'
          }}
        >
          Go to marketplace
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
            style={{ transform: 'rotate(45deg)' }}
          >
            <path d="M8 2l-1.41 1.41L11.17 8H2v2h9.17l-4.58 4.59L8 16l7-7z" fill="#000000"/>
          </svg>
        </a>
      </div>

      {/* Navigation Tabs */}
      <div 
        className="flex absolute"
        style={{ 
          left: '25px',
          top: '20px',
          gap: '20px'
        }}
      >
        <div 
          className="flex flex-col"
          style={{ 
            width: '86px',
            height: '24px',
            gap: '5px'
          }}
        >
          <span 
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#1F3A93'
            }}
          >
            Purchasing
          </span>
          <div style={{ width: '86px', height: '0px', border: '1px solid #1F3A93' }} />
        </div>

        <a 
          href="#"
          style={{ 
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333'
          }}
        >
          Offers
        </a>

        <a 
          href="#"
          style={{ 
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#333333'
          }}
        >
          Following
        </a>
      </div>

      {/* Main Content Container */}
      <div 
        className="relative"
        style={{ 
          marginTop: '80px'
        }}
      >
        {/* Filter Chips */}
        <div 
          className="flex"
        >
          <button 
            className="flex items-center justify-center"
            style={{ 
              width: '37px',
              height: '27px',
              padding: '5px 10px',
              background: 'rgba(52, 179, 138, 0.5)',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333'
            }}
          >
            All
          </button>

          <button 
            className="flex items-center justify-center"
            style={{ 
              width: '93px',
              height: '27px',
              padding: '5px 10px',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#222222'
            }}
          >
            Completed
          </button>

          <button 
            className="flex items-center justify-center"
            style={{ 
              width: '74px',
              height: '27px',
              padding: '5px 10px',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#222222'
            }}
          >
            Pending
          </button>

          <button 
            className="flex items-center justify-center"
            style={{ 
              width: '66px',
              height: '27px',
              padding: '5px 10px',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#222222'
            }}
          >
            Cancel
          </button>
        </div>

        {/* Date Range Picker & Search */}
        <div 
          className="flex items-center absolute"
          style={{ 
            right: '0px',
            top: '40px',
            gap: '20px'
          }}
        >
          {/* Search Bar */}
          <div 
            className="flex items-center"
            style={{ 
              width: '406px',
              height: '39px',
              padding: '2px 2px 2px 10px',
              gap: '296px',
              border: '1px solid #D3D3D3',
              borderRadius: '25px',
              boxSizing: 'border-box'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/>
            </svg>

            <button 
              className="flex items-center justify-center"
              style={{ 
                width: '74px',
                height: '35px',
                padding: '8px 10px',
                background: '#FF7F50',
                borderRadius: '20px',
                flexGrow: 1
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#FFFFFF'
                }}
              >
                Search
              </span>
            </button>
          </div>
        </div>

        {/* Date Range Picker */}
        <div 
          className="flex items-center absolute"
          style={{ 
            right: '0px',
            top: '90px',
            width: '218px',
            height: '34px',
            padding: '5px 10px',
            gap: '13px',
            background: '#FFFFFF',
            border: '1px solid #D3D3D3',
            borderRadius: '3px',
            boxSizing: 'border-box'
          }}
        >
          <div 
            className="flex"
            style={{ 
              width: '161px',
              height: '17px',
              gap: '7px'
            }}
          >
            <span 
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#333333'
              }}
            >
              01.11.2023
            </span>
            <span 
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#333333'
              }}
            >
              -
            </span>
            <span 
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#333333'
              }}
            >
              30.11.2023
            </span>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" fill="#333333"/>
          </svg>
        </div>

        {/* Orders Table */}
        <div 
          className="flex flex-col"
          style={{ 
            marginTop: '160px'
          }}
        >
          {/* Table Header */}
          <div 
            className="flex items-center"
            style={{ 
              width: '100%',
              height: '37px',
              padding: '10px 20px',
              gap: '20px',
              background: 'rgba(211, 211, 211, 0.5)',
              borderRadius: '5px'
            }}
          >
            <span style={{ width: '71px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Date</span>
            <span style={{ width: '55px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Image</span>
            <span style={{ width: '140px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Name</span>
            <span style={{ width: '155px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Seller</span>
            <span style={{ width: '92px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Contact</span>
            <span style={{ width: '95px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Fulfilment</span>
            <span style={{ width: '61px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Total</span>
            <span style={{ width: '104px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Status</span>
            <span style={{ width: '50px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Actions</span>
          </div>

          {/* Table Rows */}
          <div 
            className="flex flex-col"
            style={{ 
              width: '100%'
            }}
          >
            {orders.map((order) => (
              <div 
                key={order.id}
                className="flex items-center"
                style={{ 
                  width: '100%',
                  height: '65px',
                  padding: '5px 20px',
                  gap: '20px',
                  borderBottom: '1px solid #D3D3D3'
                }}
              >
                {/* Date */}
                <span 
                  style={{ 
                    width: '71px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#000000'
                  }}
                >
                  {order.date}
                </span>

                {/* Image */}
                <div 
                  className="bg-gray-300 rounded"
                  style={{ 
                    width: '55px',
                    height: '55px',
                    borderRadius: '5px',
                    backgroundImage: `url(${order.image})`,
                    backgroundSize: 'cover'
                  }}
                />

                {/* Name */}
                <span 
                  style={{ 
                    width: '140px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#000000'
                  }}
                >
                  {order.name}
                </span>

                {/* Seller */}
                <div 
                  className="flex items-center"
                  style={{ 
                    width: '155px',
                    height: '25px',
                    gap: '8px'
                  }}
                >
                  <div 
                    className="rounded-full bg-gray-300"
                    style={{ 
                      width: '25px',
                      height: '25px',
                      backgroundImage: `url(${order.seller.avatar})`,
                    backgroundSize: 'cover'
                    }}
                  />
                  <span 
                    style={{ 
                      width: '122px',
                      height: '17px',
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#000000'
                    }}
                  >
                    {order.seller.name}
                  </span>
                </div>

                {/* Contact */}
                <a 
                  href="#"
                  style={{ 
                    width: '92px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    textDecoration: 'underline',
                    color: '#1F3A93'
                  }}
                >
                  Go to chat
                </a>

                {/* Fulfilment Status */}
                <div style={{ width: '95px', height: '18px', position: 'relative' }}>
                  <div 
                    className="flex items-center justify-center absolute"
                    style={{ 
                      width: order.fulfilment.status === 'Delivered' ? '75px' : order.fulfilment.status === 'Packing' ? '66px' : '61px',
                      height: '21px',
                      left: '0px',
                      top: 'calc(50% - 10.5px)',
                      padding: '3px 10px',
                      background: order.fulfilment.color === 'green' ? 'rgba(52, 179, 138, 0.25)' : order.fulfilment.color === 'orange' ? 'rgba(242, 155, 76, 0.25)' : 'rgba(233, 77, 77, 0.25)',
                      borderRadius: '8px'
                    }}
                  >
                    <span 
                      style={{ 
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: order.fulfilment.color === 'green' ? '#34B38A' : order.fulfilment.color === 'orange' ? '#F29B4C' : '#E94D4D'
                      }}
                    >
                      {order.fulfilment.status}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <span 
                  style={{ 
                    width: '61px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#000000'
                  }}
                >
                  {order.total}
                </span>

                {/* Order Status */}
                <div style={{ width: '104px', height: '18px', position: 'relative' }}>
                  <div 
                    className="flex items-center justify-center absolute"
                    style={{ 
                      width: order.orderStatus.status === 'Completed' ? '84px' : order.orderStatus.status === 'Pending' ? '67px' : '60px',
                      height: '21px',
                      left: '0px',
                      top: 'calc(50% - 10.5px)',
                      padding: '3px 10px',
                      background: order.orderStatus.color === 'green' ? 'rgba(52, 179, 138, 0.25)' : order.orderStatus.color === 'orange' ? 'rgba(242, 155, 76, 0.25)' : 'rgba(233, 77, 77, 0.25)',
                      borderRadius: '8px'
                    }}
                  >
                    <span 
                      style={{ 
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: order.orderStatus.color === 'green' ? '#34B38A' : order.orderStatus.color === 'orange' ? '#F29B4C' : '#E94D4D'
                      }}
                    >
                      {order.orderStatus.status}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <button 
                  style={{ 
                    width: '50px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: 'center',
                    color: '#000000'
                  }}
                >
                  ...
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div 
            className="flex items-center justify-center"
            style={{ 
              width: '100%',
              height: '47px',
              marginTop: '30px',
              gap: '70px'
            }}
          >
            {/* Left Arrow */}
            <button 
              className="flex items-center justify-center"
              style={{ 
                width: '30px',
                height: '20px',
                padding: '5px 10px',
                background: '#FFFFFF'
              }}
            >
              <svg 
                width="10" 
                height="10"
                style={{ transform: 'rotate(90deg)' }}
                viewBox="0 0 10 10"
              >
                <path d="M2.5 1.25L6.25 5L2.5 8.75" stroke="#333333" strokeWidth="2" fill="none"/>
              </svg>
            </button>

            {/* Page Numbers */}
            <div 
              className="flex"
              style={{ 
                padding: '10px',
                gap: '10px'
              }}
            >
              <button 
                className="flex items-center justify-center"
                style={{ 
                  width: '27px',
                  height: '27px',
                  padding: '5px 10px',
                  background: '#D3D3D3',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333'
                }}
              >
                1
              </button>
              <button 
                className="flex items-center justify-center"
                style={{ 
                  width: '29px',
                  height: '27px',
                  padding: '5px 10px',
                  background: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333'
                }}
              >
                2
              </button>
              <button 
                className="flex items-center justify-center"
                style={{ 
                  width: '29px',
                  height: '27px',
                  padding: '5px 10px',
                  background: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333'
                }}
              >
                3
              </button>
              <button 
                className="flex items-center justify-center"
                style={{ 
                  width: '40px',
                  height: '27px',
                  padding: '5px 10px',
                  background: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333'
                }}
              >
                ...
              </button>
              <button 
                className="flex items-center justify-center"
                style={{ 
                  width: '29px',
                  height: '27px',
                  padding: '5px 10px',
                  background: '#FFFFFF',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333'
                }}
              >
                9
              </button>
            </div>

            {/* Right Arrow */}
            <button 
              className="flex items-center justify-center"
              style={{ 
                width: '30px',
                height: '20px',
                padding: '5px 10px',
                background: '#FFFFFF'
              }}
            >
              <svg 
                width="10" 
                height="10"
                style={{ transform: 'rotate(-90deg)' }}
                viewBox="0 0 10 10"
              >
                <path d="M2.5 1.25L6.25 5L2.5 8.75" stroke="#333333" strokeWidth="2" fill="none"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}