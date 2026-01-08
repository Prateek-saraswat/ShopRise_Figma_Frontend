'use client';

import React, { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const orders = [
    { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', status: 'Delivered', total: 'Total' },
    { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Packing', status: 'Pending', total: 'Total' },
    { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Refund', status: 'Cancel', total: 'Total' },
    { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', status: 'Pending', total: 'Total' },
    { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', status: 'Delivered', total: 'Total' },
    { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', address: 'Adress', fulfilment: 'Delivered', status: 'Delivered', total: 'Total' },
  ];

  const getStatusColor = (status : string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-600';
      case 'Pending':
        return 'bg-orange-100 text-orange-500';
      case 'Cancel':
        return 'bg-red-100 text-red-500';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex min-h-screen bg-white overflow-x-hidden">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-x-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[22px] font-medium text-gray-800">Welcome back John!</h1>
          
          <div className="flex items-center gap-4">
            <button className="w-[18px] h-[18px]">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </button>
            <a href="#" className="flex items-center gap-2 text-gray-800">
              <span className="text-base">Go to marketplace</span>
              <svg className="w-4 h-4 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Marketplace Insights - First Section */}
        <div className="mb-8">
          <div className="px-[10px] py-[5px] mb-4">
            <h2 className="text-lg font-medium" style={{ color: '#1F3A93' }}>Marketplace insights</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
            <div className="flex items-center gap-[10px] w-full">
              <div className="relative w-[70px] h-[70px]">
                <div className="w-[70px] h-[70px] bg-gray-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px]" style={{ backgroundColor: '#1F3A93' }}></div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[17px] text-gray-800">Clicks on listings</span>
                <span className="text-[30px] font-medium text-gray-800">0</span>
              </div>
            </div>

            <div className="flex items-center gap-[10px] w-full">
              <div className="relative w-[70px] h-[70px]">
                <div className="w-[70px] h-[70px] bg-gray-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px]" style={{ backgroundColor: '#1F3A93' }}></div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[17px] text-gray-800">Listing saves</span>
                <span className="text-[30px] font-medium text-gray-800">0</span>
              </div>
            </div>

            <div className="flex items-center gap-[10px] w-full">
              <div className="relative w-[70px] h-[70px]">
                <div className="w-[70px] h-[70px] bg-gray-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px]" style={{ backgroundColor: '#1F3A93' }}></div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[17px] text-gray-800">Listing shares</span>
                <span className="text-[30px] font-medium text-gray-800">0</span>
              </div>
            </div>

            <div className="flex items-center gap-[10px] w-full">
              <div className="relative w-[70px] h-[70px]">
                <div className="w-[70px] h-[70px] bg-gray-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px]" style={{ backgroundColor: '#1F3A93' }}></div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[17px] text-gray-800 leading-[21px]">Marketplace<br/>followers</span>
                <span className="text-[30px] font-medium text-gray-800">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marketplace Insights - Second Section */}
        <div className="mb-8">
          <div className="px-[10px] py-[5px] mb-4">
            <h2 className="text-lg font-medium" style={{ color: '#1F3A93' }}>Marketplace insights</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
            <div className="flex flex-col px-[10px] gap-[3px] w-full">
              <div className="flex flex-col gap-[5px]">
                <span className="text-[30px] font-medium text-gray-800">0%</span>
                <span className="text-base text-gray-800">Cancellation rate</span>
              </div>
              <span className="text-[11px] text-gray-800 leading-[13px]">You have canceled 0% of your orders</span>
            </div>

            <div className="flex flex-col px-[10px] gap-[3px] w-full">
              <div className="flex flex-col gap-[5px]">
                <span className="text-[30px] font-medium text-gray-800">0%</span>
                <span className="text-base text-gray-800">Missed handling rate</span>
              </div>
              <span className="text-[11px] text-gray-800 leading-[13px]">You have shipped or canceled 0% of orders after 3 business days.</span>
            </div>

            <div className="flex flex-col px-[10px] gap-[3px] w-full">
              <div className="flex flex-col gap-[5px]">
                <span className="text-[30px] font-medium text-gray-800">0%</span>
                <span className="text-base text-gray-800">Claim escalation</span>
              </div>
              <span className="text-[11px] text-gray-800 leading-[13px]">0% of your orders covered by Durchase Protection are escalated to Facebook</span>
            </div>

            <div className="flex flex-col px-[10px] gap-[3px] w-full">
              <div className="flex flex-col gap-[5px]">
                <span className="text-[30px] font-medium text-gray-800">0%</span>
                <span className="text-base text-gray-800">Chargeback rate</span>
              </div>
              <span className="text-[11px] text-gray-800 leading-[13px]">0% of your orders are charged back through the buyers payment method</span>
            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div>
          <div className="px-[10px] py-[5px] mb-4">
            <h2 className="text-lg font-medium" style={{ color: '#1F3A93' }}>Orders</h2>
          </div>

          {/* Table Header */}
          <div className="w-full overflow-x-auto"></div>
          <div className="flex items-center px-5 py-[10px] gap-[30px] bg-gray-200 bg-opacity-50 rounded-[5px] mb-[10px]">
            <span className="text-sm w-[55px]">ID</span>
            <span className="text-sm w-[71px]">Date</span>
            <span className="text-sm w-[155px]">Customer</span>
            <span className="text-sm w-[140px]">Products</span>
            <span className="text-sm w-[92px]">Adress</span>
            <span className="text-sm w-[95px]">Fulfilment</span>
            <span className="text-sm w-[61px]">Total</span>
            <span className="text-sm w-[104px]">Status</span>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col gap-[10px]">
            {orders.map((order, index) => (
              <div key={index} className="flex items-center px-5 py-[5px] gap-[30px] border-b border-gray-300">
                <span className="text-xs w-[55px]">{order.id}</span>
                <span className="text-xs w-[71px]">{order.date}</span>
                <div className="flex items-center gap-2 w-[155px]">
                  <div className="w-[25px] h-[25px] bg-gray-300 rounded-full"><img src="/jackson.svg" alt="" /></div>
                  <span className="text-[11.2px]">{order.customer}</span>
                </div>
                <span className="text-xs w-[140px]">{order.product}</span>
                <span className="text-sm w-[92px]">{order.address}</span>
                <div className="w-[95px]">
                  <span className={`inline-flex items-center justify-center px-[10px] py-[3px] rounded-lg text-[10px] font-medium ${getStatusColor(order.fulfilment)}`}>
                    {order.fulfilment}
                  </span>
                </div>
                <span className="text-xs w-[61px]">{order.total}</span>
                <div className="w-[104px]">
                  <span className={`inline-flex items-center justify-center px-[10px] py-[3px] rounded-lg text-[10px] font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}