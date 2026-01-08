'use client';

import React, { useState } from 'react';

interface Order {
  id: number;
  date: string;
  image: string;
  name: string;
  customer: {
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

export default function SalesContentResponsive() {
  const [activeTab, setActiveTab] = useState('Orders');
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const orders: Order[] = [
    {
      id: 1,
      date: '18 March',
      image: '/sale-product.svg',
      name: 'Litter troller sprayer',
      customer: { name: 'Jackson Smith', avatar: '/jackson.svg' },
      fulfilment: { status: 'Delivered', color: 'green' },
      total: '$300',
      orderStatus: { status: 'Completed', color: 'green' }
    },
    {
      id: 2,
      date: '18 March',
      image: '/sale-product.svg',
      name: 'Litter troller sprayer',
      customer: { name: 'Jackson Smith', avatar: '/jackson.svg' },
      fulfilment: { status: 'Delivered', color: 'green' },
      total: '$300',
      orderStatus: { status: 'Completed', color: 'green' }
    },
    {
      id: 3,
      date: '18 March',
      image: '/sale-product.svg',
      name: 'Litter troller sprayer',
      customer: { name: 'Jackson Smith', avatar: '/jackson.svg' },
      fulfilment: { status: 'Packing', color: 'orange' },
      total: '$300',
      orderStatus: { status: 'Pending', color: 'orange' }
    },
    {
      id: 4,
      date: '18 March',
      image: '/sale-product.svg',
      name: 'Litter troller sprayer',
      customer: { name: 'Jackson Smith', avatar: '/jackson.svg' },
      fulfilment: { status: 'Refund', color: 'red' },
      total: '$300',
      orderStatus: { status: 'Cancel', color: 'red' }
    },
    {
      id: 5,
      date: '18 March',
      image: '/sale-product.svg',
      name: 'Litter troller sprayer',
      customer: { name: 'Jackson Smith', avatar: '/jackson.svg' },
      fulfilment: { status: 'Delivered', color: 'green' },
      total: '$300',
      orderStatus: { status: 'Pending', color: 'orange' }
    },
    {
      id: 6,
      date: '18 March',
      image: '/sale-product.svg',
      name: 'Litter troller sprayer',
      customer: { name: 'Jackson Smith', avatar: '/jackson.svg' },
      fulfilment: { status: 'Delivered', color: 'green' },
      total: '$300',
      orderStatus: { status: 'Completed', color: 'green' }
    },
    {
      id: 7,
      date: '18 March',
      image: '/sale-product.svg',
      name: 'Litter troller sprayer',
      customer: { name: 'Jackson Smith', avatar: '/jackson.svg' },
      fulfilment: { status: 'Delivered', color: 'green' },
      total: '$300',
      orderStatus: { status: 'Cancel', color: 'red' }
    }
  ];

  const getStatusBadgeWidth = (status: string) => {
    if (status === 'Delivered') return '75px';
    if (status === 'Packing') return '66px';
    if (status === 'Refund') return '61px';
    if (status === 'Completed') return '84px';
    if (status === 'Pending') return '67px';
    if (status === 'Cancel') return '60px';
    return 'auto';
  };

  const getStatusColor = (color: string) => {
    if (color === 'green') return {
      bg: 'rgba(52, 179, 138, 0.25)',
      text: '#34B38A'
    };
    if (color === 'orange') return {
      bg: 'rgba(242, 155, 76, 0.25)',
      text: '#F29B4C'
    };
    if (color === 'red') return {
      bg: 'rgba(233, 77, 77, 0.25)',
      text: '#E94D4D'
    };
    return { bg: '#FFFFFF', text: '#333333' };
  };

  return (
    <div 
      style={{ 
        width: '100%',
        minHeight: '832px',
        padding: '20px',
        background: '#FFFFFF',
        boxSizing: 'border-box'
      }}
    >
      <div 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent:"flex-end",
            gap: '20px'
          }}
        >
          {/* Notification Icon */}
          <button 
            style={{ 
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: '5px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent:"end"
            }}
          >
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
              style={{ transform: 'rotate(45deg)', flexShrink: 0 }}
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
          marginBottom: '30px',
          maxWidth: '1280px',
          margin: '0 auto 30px'
        }}
      >
        {/* Left: Navigation Tabs */}
        <div 
          style={{ 
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
          }}
        >
          {/* Orders Tab - Active */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              cursor: 'pointer'
            }}
            onClick={() => setActiveTab('Orders')}
          >
            <span 
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19px',
                color: activeTab === 'Orders' ? '#1F3A93' : '#333333'
              }}
            >
              Orders
            </span>
            {activeTab === 'Orders' && (
              <div style={{ width: '53px', height: '1px', background: '#1F3A93' }} />
            )}
          </div>

          {/* Listing Tab */}
          <a 
            href="#"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none'
            }}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('Listing');
            }}
          >
            Listing
          </a>

          {/* Offers Tab */}
          <a 
            href="#"
            style={{ 
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#333333',
              textDecoration: 'none'
            }}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('Offers');
            }}
          >
            Offers
          </a>
        </div>

        {/* Right: Actions */}
        
      </div>

      {/* Filters and Search Section */}
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '30px',
          maxWidth: '1280px',
          margin: '0 auto 30px'
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
              minWidth: '37px',
              height: '27px',
              padding: '5px 10px',
              background: activeFilter === 'All' ? 'rgba(52, 179, 138, 0.5)' : 'transparent',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Inter',
              fontWeight: activeFilter === 'All' ? 500 : 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>

          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '93px',
              height: '27px',
              padding: '5px 10px',
              background: activeFilter === 'Completed' ? 'rgba(52, 179, 138, 0.5)' : 'transparent',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Inter',
              fontWeight: activeFilter === 'Completed' ? 500 : 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onClick={() => setActiveFilter('Completed')}
          >
            Completed
          </button>

          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '74px',
              height: '27px',
              padding: '5px 10px',
              background: activeFilter === 'Pending' ? 'rgba(52, 179, 138, 0.5)' : 'transparent',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Inter',
              fontWeight: activeFilter === 'Pending' ? 500 : 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onClick={() => setActiveFilter('Pending')}
          >
            Pending
          </button>

          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '66px',
              height: '27px',
              padding: '5px 10px',
              background: activeFilter === 'Cancel' ? 'rgba(52, 179, 138, 0.5)' : 'transparent',
              borderRadius: '6px',
              border: 'none',
              fontFamily: 'Inter',
              fontWeight: activeFilter === 'Cancel' ? 500 : 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onClick={() => setActiveFilter('Cancel')}
          >
            Cancel
          </button>
        </div>

        {/* Search and Date Picker */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'flex-end'
          }}
        >
          {/* Search Bar */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '406px',
              minWidth: '200px',
              height: '39px',
              padding: '2px 2px 2px 10px',
              gap: '10px',
              border: '1px solid #D3D3D3',
              borderRadius: '25px',
              boxSizing: 'border-box',
              background: '#FFFFFF'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/>
            </svg>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                minWidth: 0,
                fontFamily: 'Inter',
                fontSize: '14px',
                color: '#333333'
              }}
            />

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
                height: '35px',
                flexShrink: 0
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
              minWidth: '180px',
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
          maxWidth: '1280px',
          margin: '0 auto',
          overflowX: 'auto'
        }}
      >
        <div style={{ minWidth: '1000px' }}>
          {/* Table Header */}
          <div 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              gap: '20px',
              background: 'rgba(211, 211, 211, 0.5)',
              borderRadius: '5px',
              height: '37px',
              boxSizing: 'border-box'
            }}
          >
            <span style={{ flex: '0 0 71px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Date</span>
            <span style={{ flex: '0 0 55px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Image</span>
            <span style={{ flex: '0 0 140px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Name</span>
            <span style={{ flex: '0 0 155px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Customer</span>
            <span style={{ flex: '0 0 92px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Contact</span>
            <span style={{ flex: '0 0 95px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Fulfilment</span>
            <span style={{ flex: '0 0 61px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Total</span>
            <span style={{ flex: '0 0 104px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Status</span>
            <span style={{ flex: '0 0 50px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000' }}>Actions</span>
          </div>

          {/* Table Rows */}
          {orders.map((order) => (
            <div 
              key={order.id}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: '5px 20px',
                gap: '20px',
                borderBottom: '1px solid #D3D3D3',
                height: '65px',
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
                  width: '55px',
                  height: '55px',
                  borderRadius: '5px',
                  backgroundImage: `url(${order.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  // background: '#F0F0F0'
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
                  color: '#000000',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {order.name}
              </span>

              {/* Customer */}
              <div 
                style={{ 
                  flex: '0 0 155px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div 
                  style={{ 
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundImage: `url(${order.customer.avatar})`,
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
                  {order.customer.name}
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
                  color: '#1F3A93',
                  whiteSpace: 'nowrap'
                }}
              >
                Go to chat
              </a>

              {/* Fulfilment Status */}
              <div style={{ flex: '0 0 95px', position: 'relative', height: '21px' }}>
                <div 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: getStatusBadgeWidth(order.fulfilment.status),
                    height: '21px',
                    padding: '3px 10px',
                    background: getStatusColor(order.fulfilment.color).bg,
                    borderRadius: '8px',
                    boxSizing: 'border-box'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '15px',
                      color: getStatusColor(order.fulfilment.color).text,
                      whiteSpace: 'nowrap'
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
              <div style={{ flex: '0 0 104px', position: 'relative', height: '21px' }}>
                <div 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: getStatusBadgeWidth(order.orderStatus.status),
                    height: '21px',
                    padding: '3px 10px',
                    background: getStatusColor(order.orderStatus.color).bg,
                    borderRadius: '8px',
                    boxSizing: 'border-box'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '15px',
                      color: getStatusColor(order.orderStatus.color).text,
                      whiteSpace: 'nowrap'
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
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ...
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: '30px',
          gap: '15px',
          flexWrap: 'wrap',
          maxWidth: '1280px',
          margin: '30px auto 0'
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
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
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
          {[1, 2, 3].map((page) => (
            <button 
              key={page}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '27px',
                height: '27px',
                padding: '5px 10px',
                background: currentPage === page ? '#D3D3D3' : '#FFFFFF',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#333333',
                border: 'none',
                cursor: 'pointer'
              }}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          
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
              cursor: 'default'
            }}
          >
            ...
          </button>
          
          <button 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '29px',
              height: '27px',
              padding: '5px 10px',
              background: currentPage === 9 ? '#D3D3D3' : '#FFFFFF',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentPage(9)}
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
          onClick={() => setCurrentPage(prev => Math.min(9, prev + 1))}
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