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

export default function PurchasingContentResponsive() {
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
      style={{ 
        width: '100%',
        minHeight: '832px',
        padding: '20px 25px',
        background: '#FFFFFF',
        boxSizing: 'border-box'
      }}
    >
       <div 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent:"end"
          }}
        >
          {/* Notification Icon */}
          <button style={{ 
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '5px'
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 16.5c.41 0 .75-.34.75-.75h-1.5c0 .41.34.75.75.75zm3.75-3.75V8.625c0-2.03-1.1-3.73-3-4.185V4.125c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.315c-1.905.455-3 2.145-3 4.185v4.125L3.75 13.5v.75h10.5v-.75l-1.5-1.5z" fill="#333333"/>
            </svg>
          </button>

          {/* Go to marketplace */}
          <a 
            href="#"
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
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
      {/* Header Section */}
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '30px'
        }}
      >
        {/* Navigation Tabs */}
        <div 
          style={{ 
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
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
            <div style={{ width: '100%', minWidth: '86px', height: '0px', border: '1px solid #1F3A93' }} />
          </div>

          <a 
            href="#"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
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
              color: '#333333',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Following
          </a>
        </div>

        {/* Top Right Actions */}
       
      </div>

      {/* Filter and Search Section */}
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '30px'
        }}
      >
        {/* Filter Chips */}
        <div 
          style={{ 
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px 10px',
              background: 'rgba(52, 179, 138, 0.5)',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              border: 'none',
              cursor: 'pointer',
              minWidth: '37px',
              height: '27px'
            }}
          >
            All
          </button>

          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px 10px',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#222222',
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              minWidth: '93px',
              height: '27px'
            }}
          >
            Completed
          </button>

          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px 10px',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#222222',
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              minWidth: '74px',
              height: '27px'
            }}
          >
            Pending
          </button>

          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px 10px',
              borderRadius: '6px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#222222',
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              minWidth: '66px',
              height: '27px'
            }}
          >
            Cancel
          </button>
        </div>

        {/* Search and Date Section */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            minWidth: 0
          }}
        >
          {/* Search Bar */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '406px',
              minWidth: '400px',
              height: '39px',
              padding: '2px 2px 2px 10px',
              gap: '10px',
              border: '1px solid #D3D3D3',
              borderRadius: '25px',
              boxSizing: 'border-box'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/>
            </svg>

            <button 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 10px',
                background: '#FF7F50',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                marginLeft: 'auto',
                minWidth: '74px',
                height: '35px'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap'
                }}
              >
                Search
              </span>
            </button>
          </div>

          {/* Date Range Picker */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '218px',
              height: '34px',
              padding: '5px 10px',
              gap: '13px',
              background: '#FFFFFF',
              border: '1px solid #D3D3D3',
              borderRadius: '3px',
              boxSizing: 'border-box',
              marginLeft: 'auto'
            }}
          >
            <div 
              style={{ 
                display: 'flex',
                gap: '7px',
                flex: 1,
                minWidth: 0
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333',
                  whiteSpace: 'nowrap'
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
                  color: '#333333',
                  whiteSpace: 'nowrap'
                }}
              >
                30.11.2023
              </span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" fill="#333333"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div 
        style={{ 
          width: '100%',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div style={{ minWidth: '1000px' }}>
          {/* Table Header */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '37px',
              padding: '10px 20px',
              gap: '20px',
              background: 'rgba(211, 211, 211, 0.5)',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          >
            <span style={{ flex: '0 0 71px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Date</span>
            <span style={{ flex: '0 0 55px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Image</span>
            <span style={{ flex: '0 0 140px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Name</span>
            <span style={{ flex: '0 0 155px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Seller</span>
            <span style={{ flex: '0 0 92px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Contact</span>
            <span style={{ flex: '0 0 95px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Fulfilment</span>
            <span style={{ flex: '0 0 61px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Total</span>
            <span style={{ flex: '0 0 104px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Status</span>
            <span style={{ flex: '0 0 50px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Actions</span>
          </div>

          {/* Table Rows */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            {orders.map((order) => (
              <div 
                key={order.id}
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  height: '65px',
                  padding: '5px 20px',
                  gap: '20px',
                  borderBottom: '1px solid #D3D3D3',
                  boxSizing: 'border-box'
                }}
              >
                {/* Date */}
                <span 
                  style={{ 
                    flex: '0 0 71px',
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
                  style={{ 
                    flex: '0 0 55px',
                    height: '55px',
                    borderRadius: '5px',
                    backgroundImage: `url(${order.image})`,
                    backgroundSize: 'cover',
                    // background: '#D3D3D3'
                  }}
                />

                {/* Name */}
                <span 
                  style={{ 
                    flex: '0 0 140px',
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
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    flex: '0 0 155px',
                    gap: '8px'
                  }}
                >
                  <div 
                    style={{ 
                      width: '25px',
                      height: '25px',
                      borderRadius: '50%',
                      backgroundImage: `url(${order.seller.avatar})`,
                      backgroundSize: 'cover',
                      // background: '#D3D3D3',
                      flexShrink: 0
                    }}
                  />
                  <span 
                    style={{ 
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#000000',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {order.seller.name}
                  </span>
                </div>

                {/* Contact */}
                <a 
                  href="#"
                  style={{ 
                    flex: '0 0 92px',
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
                <div style={{ flex: '0 0 95px', display: 'flex', alignItems: 'center' }}>
                  <div 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '3px 10px',
                      background: order.fulfilment.color === 'green' ? 'rgba(52, 179, 138, 0.25)' : order.fulfilment.color === 'orange' ? 'rgba(242, 155, 76, 0.25)' : 'rgba(233, 77, 77, 0.25)',
                      borderRadius: '8px',
                      whiteSpace: 'nowrap'
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
                    flex: '0 0 61px',
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
                <div style={{ flex: '0 0 104px', display: 'flex', alignItems: 'center' }}>
                  <div 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '3px 10px',
                      background: order.orderStatus.color === 'green' ? 'rgba(52, 179, 138, 0.25)' : order.orderStatus.color === 'orange' ? 'rgba(242, 155, 76, 0.25)' : 'rgba(233, 77, 77, 0.25)',
                      borderRadius: '8px',
                      whiteSpace: 'nowrap'
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
                    flex: '0 0 50px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: 'center',
                    color: '#000000',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  ...
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '47px',
          marginTop: '30px',
          gap: '70px',
          flexWrap: 'wrap'
        }}
      >
        {/* Left Arrow */}
        <button 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '20px',
            padding: '5px 10px',
            background: '#FFFFFF',
            border: 'none',
            cursor: 'pointer'
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
          style={{ 
            display: 'flex',
            padding: '10px',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '27px',
              height: '27px',
              padding: '5px 10px',
              background: '#D3D3D3',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            1
          </button>
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '27px',
              height: '27px',
              padding: '5px 10px',
              background: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            2
          </button>
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '27px',
              height: '27px',
              padding: '5px 10px',
              background: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            3
          </button>
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '40px',
              height: '27px',
              padding: '5px 10px',
              background: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            ...
          </button>
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '27px',
              height: '27px',
              padding: '5px 10px',
              background: '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            9
          </button>
        </div>

        {/* Right Arrow */}
        <button 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '20px',
            padding: '5px 10px',
            background: '#FFFFFF',
            border: 'none',
            cursor: 'pointer'
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
  );
}