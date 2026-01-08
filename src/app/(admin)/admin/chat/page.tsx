// 'use client';

// import React, { useState } from 'react';

// interface ChatItem {
//   id: number;
//   name: string;
//   message: string;
//   time: string;
//   avatar: string;
//   hasUnread: boolean;
// }

// interface Message {
//   id: number;
//   text: string;
//   time: string;
//   isSent: boolean;
// }

// export default function ChatContent() {
//   const [selectedChat, setSelectedChat] = useState(3); // 4th item is selected (index 3)
//   const [activeFilter, setActiveFilter] = useState('all');

//   // 8 chat items
//   const chatItems: ChatItem[] = Array(8).fill(null).map((_, i) => ({
//     id: i + 1,
//     name: 'Jennifer Garnet',
//     message: "Perfect, I'll take it! How do I proceed with ...",
//     time: '18:05',
//     avatar: '/jenifer.svg',
//     hasUnread: i < 5 && i !== 3 // First 5 have unread, except selected one
//   }));

//   // Sample messages for the conversation
//   const messages: Message[] = [
//     { id: 1, text: "Hi, I'm interested in the blue sofa.Can you provide more details?", time: '18:05', isSent: false },
//     { id: 2, text: "Hello! Certainly, it's a premium velvet sofa with modern design and sturdy construction. Seats three comfortably.", time: '18:10', isSent: true },
//     { id: 3, text: "Great! What are the dimensions?", time: '18:15', isSent: false },
//     { id: 4, text: 'It\'s 84" long, 36" deep, and 32 high.', time: '18:15', isSent: true },
//     { id: 5, text: "Perfect, I'll take it! How do I proceed with the purchase?", time: '18:15', isSent: false }
//   ];

//   return (
//     <div 
//       className="relative bg-white"
//       style={{ 
//         width: '100%',
//         minHeight: '832px',
//         padding: '20px 25px 0px'
//       }}
//     >
//       <div className="flex justify-between items-center mb-6">
//       {/* Top Right Actions */}
//       <div 
//         className="flex items-center"
//       >
//         {/* Notification Icon */}
//         <button>
//           <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//             <path d="M9 16.5c.41 0 .75-.34.75-.75h-1.5c0 .41.34.75.75.75zm3.75-3.75V8.625c0-2.03-1.1-3.73-3-4.185V4.125c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.315c-1.905.455-3 2.145-3 4.185v4.125L3.75 13.5v.75h10.5v-.75l-1.5-1.5z" fill="#333333"/>
//           </svg>
//         </button>

//         {/* Go to marketplace */}
//         <a 
//           href="#"
//           className="flex items-center"
//           style={{ 
//             gap: '8px',
//             fontFamily: 'Inter',
//             fontWeight: 400,
//             fontSize: '16px',
//             lineHeight: '19px',
//             color: '#333333'
//           }}
//         >
//           Go to marketplace
//           <svg 
//             width="16" 
//             height="16" 
//             viewBox="0 0 16 16"
//             style={{ transform: 'rotate(45deg)' }}
//           >
//             <path d="M8 2l-1.41 1.41L11.17 8H2v2h9.17l-4.58 4.59L8 16l7-7z" fill="#000000"/>
//           </svg>
//         </a>
//       </div>

//       {/* Page Title */}
//       <h1 
//         style={{ 
//           width: '51px',
//           height: '27px',
//           fontFamily: 'Inter',
//           fontWeight: 500,
//           fontSize: '22px',
//           lineHeight: '27px',
//           color: '#1F3A93'
//         }}
//       >
//         Chat
//       </h1>
//       </div>
//       <div className="flex justify-between items-center mb-6">
//       {/* Filter Tabs */}
//       <div 
//         className="flex gap-[10px] mb-4"
//       >
//         <button 
//           onClick={() => setActiveFilter('all')}
//           style={{ 
//             width: '37px',
//             height: '27px',
//             padding: '5px 10px',
//             background: activeFilter === 'all' ? 'rgba(31, 58, 147, 0.25)' : 'transparent',
//             borderRadius: '6px',
//             fontFamily: 'Inter',
//             fontWeight: activeFilter === 'all' ? 500 : 400,
//             fontSize: '14px',
//             lineHeight: '17px',
//             color: '#333333',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//         >
//           All
//         </button>
//         <button 
//           onClick={() => setActiveFilter('read')}
//           style={{ 
//             height: '27px',
//             padding: '5px 10px',
//             borderRadius: '6px',
//             fontFamily: 'Inter',
//             fontWeight: 400,
//             fontSize: '14px',
//             lineHeight: '17px',
//             color: '#333333'
//           }}
//         >
//           Read
//         </button>
//         <button 
//           onClick={() => setActiveFilter('unread')}
//           style={{ 
//             height: '27px',
//             padding: '5px 10px',
//             borderRadius: '6px',
//             fontFamily: 'Inter',
//             fontWeight: 400,
//             fontSize: '14px',
//             lineHeight: '17px',
//             color: '#333333'
//           }}
//         >
//           Unread
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div 
//         className="flex items-cente"
//         style={{ 
//           width: '406px',
//           height: '39px',
//           padding: '2px 2px 2px 10px',
//           gap: '296px',
//           border: '1px solid #D3D3D3',
//           borderRadius: '25px',
//           boxSizing: 'border-box'
//         }}
//       >
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/>
//         </svg>

//         <button 
//           className="flex items-center justify-center"
//           style={{ 
//             width: '74px',
//             height: '35px',
//             padding: '8px 10px',
//             background: '#FF7F50',
//             borderRadius: '20px',
//             flexGrow: 1
//           }}
//         >
//           <span 
//             style={{ 
//               fontFamily: 'Inter',
//               fontWeight: 500,
//               fontSize: '16px',
//               lineHeight: '19px',
//               color: '#FFFFFF'
//             }}
//           >
//             Search
//           </span>
//         </button>
//       </div>
//       </div>

//       {/* Two-Panel Chat Layout */}
//       <div 
//         className="flex gap-[10px] mt-2"
//       >
//         {/* Chat List Panel (Left) */}
//         <div 
//           style={{ 
//             width: '390px',
//             height: '645px',
//             border: '1px solid #D3D3D3',
//             boxSizing: 'border-box',
//             background: '#FFFFFF',
//             overflowY: 'auto',
//             position: 'relative'
//           }}
//         >
//           {/* Chat Items Container */}
//           <div 
//             className="flex flex-col"
//             style={{ 
//               // width: '390px',
//               gap: '0px'
//             }}
//           >
//             {chatItems.map((chat, index) => (
//               <div 
//                 key={chat.id}
//                 onClick={() => setSelectedChat(index)}
//                 style={{ 
//                   display: 'flex',
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   padding: '10px 15px',
//                   gap: '9px',
//                   // width: '390px',
//                   height: '70px',
//                   background: selectedChat === index ? '#D3D3D3' : '#FFFFFF',
//                   borderBottom: '1px solid #D3D3D3',
//                   boxSizing: 'border-box',
//                   cursor: 'pointer'
//                 }}
//               >
//                 {/* Avatar */}
//                 <div 
//                   className="bg-gray-300"
//                   style={{ 
//                     width: '50px',
//                     height: '50px',
//                     border: '1px solid #1F3A93',
//                     borderRadius: '50%',
//                     boxSizing: 'border-box',
//                     flexShrink: 0,
//                     backgroundImage: "url('/jenifer.svg')",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                   }}
//                 />

//                 {/* Chat Info */}
//                 <div 
//                   className="flex flex-col"
//                   style={{ 
//                     // width: '301px',
//                     height: selectedChat === index ? '35px' : '39px',
//                     gap: '2px'
//                   }}
//                 >
//                   {/* Name & Time Row */}
//                   <div 
//                     className="flex"
//                     style={{ 
//                       // width: '301px',
//                       height: selectedChat === index ? '19px' : '23px',
//                       gap: '155px',
//                       alignItems: selectedChat === index ? 'flex-start' : 'center'
//                     }}
//                   >
//                     <span 
//                       style={{ 
//                         width: '300px',
//                         height: '19px',
//                         fontFamily: 'Inter',
//                         fontWeight: 500,
//                         fontSize: '16px',
//                         lineHeight: '19px',
//                         color: '#333333'
//                       }}
//                     >
//                       {chat.name}
//                     </span>

//                     {/* Time & Unread Indicator */}
//                     <div 
//                       className="flex flex-col items-end"
//                       style={{ 
//                         width: '27px',
//                         height: selectedChat === index ? '12px' : '23px',
//                         gap: '3px'
//                       }}
//                     >
//                       <span 
//                         style={{ 
//                           width: '27px',
//                           height: '12px',
//                           fontFamily: 'Inter',
//                           fontWeight: 500,
//                           fontSize: '10px',
//                           lineHeight: '12px',
//                           textAlign: 'right',
//                           color: '#1F3A93'
//                         }}
//                       >
//                         {chat.time}
//                       </span>
//                       {chat.hasUnread && selectedChat !== index && (
//                         <div 
//                           style={{ 
//                             width: '8px',
//                             height: '8px',
//                             background: '#1F3A93',
//                             borderRadius: '50%'
//                           }}
//                         />
//                       )}
//                     </div>
//                   </div>

//                   {/* Message Preview */}
//                   <span 
//                     style={{ 
//                       width: '300px',
//                       height: '14px',
//                       fontFamily: 'Inter',
//                       fontWeight: 400,
//                       fontSize: '14px',
//                       lineHeight: '17px',
//                       color: '#333333',
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                       whiteSpace: 'nowrap'
//                     }}
//                   >
//                     {chat.message}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Messages Panel (Right) */}
//         <div 
//           style={{ 
//             width: '623px',
//             height: '645px',
//             border: '1px solid #D3D3D3',
//             boxSizing: 'border-box',
//             background: '#FFFFFF',
//             position: 'relative'
//           }}
//         >
//           {/* Header */}
//           <div 
//             className="flex items-center"
//             style={{ 
//               position: 'absolute',
//               width: '623px',
//               height: '70px',
//               left: '0px',
//               top: '0px',
//               padding: '10px 20px',
//               gap: '10px',
//               background: '#FFFFFF',
//               boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)'
//             }}
//           >
//             <div 
//               className="bg-gray-300"
//               style={{ 
//                 width: '50px',
//                 height: '50px',
//                 border: '1px solid #1F3A93',
//                 borderRadius: '50%',
//                 boxSizing: 'border-box',
//                 backgroundImage: "url('/jenifer.svg')",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//               }}
//             />
//             <span 
//               style={{ 
//                 width: '119px',
//                 height: '19px',
//                 fontFamily: 'Inter',
//                 fontWeight: 500,
//                 fontSize: '16px',
//                 lineHeight: '19px',
//                 color: '#333333'
//               }}
//             >
//               Jennifer Garnet
//             </span>
//           </div>

//           {/* Date Divider */}
//           <div 
//             style={{ 
//               position: 'absolute',
//               width: '63px',
//               height: '15px',
//               left: 'calc(50% - 63px/2 + 117px)',
//               top: '86px',
//               fontFamily: 'Inter',
//               fontWeight: 400,
//               fontSize: '12px',
//               lineHeight: '15px',
//               color: '#333333',
//               textAlign: 'center'
//             }}
//           >
//             Aujourd'hui
//           </div>

//           {/* Messages Container */}
//           <div style={{
//     marginTop: '120px',
//     padding: '0 20px',
//     height: '430px',
//     overflowY: 'auto'
//   }}>
//             {/* Message 1 - Received */}
//             <div 
//               className="flex flex-col"
//               style={{ 
//                 alignItems: 'flex-start',
//                 gap: '4px',
//                 marginBottom: '10px'
//               }}
//             >
//               <div 
//                 className="flex items-center"
//                 style={{ 
//                   padding: '10px',
//                   gap: '10px',
//                   maxWidth: '282px',
//                   background: 'rgba(211, 211, 211, 0.4)',
//                   borderRadius: '6px'
//                 }}
//               >
//                 <span 
//                   style={{ 
//                     fontFamily: 'Inter',
//                     fontWeight: 400,
//                     fontSize: '14px',
//                     lineHeight: '17px',
//                     color: '#333333',
//                     flex: 1
//                   }}
//                 >
//                   {messages[0].text}
//                 </span>
//               </div>
//               <span 
//                 style={{ 
//                   fontFamily: 'Open Sans',
//                   fontWeight: 400,
//                   fontSize: '10px',
//                   lineHeight: '14px',
//                   color: '#333333'
//                 }}
//               >
//                 {messages[0].time}
//               </span>
//             </div>

//             {/* Message 2 - Sent */}
//             <div 
//               className="flex flex-col"
//               style={{ 
//                 alignItems: 'flex-end',
//                 gap: '3px',
//                 marginBottom: '10px'
//               }}
//             >
//               <div 
//                 className="flex items-center"
//                 style={{ 
//                   padding: '10px',
//                   gap: '10px',
//                   maxWidth: '333px',
//                   background: '#1F3A93',
//                   borderRadius: '6px'
//                 }}
//               >
//                 <span 
//                   style={{ 
//                     fontFamily: 'Inter',
//                     fontWeight: 400,
//                     fontSize: '14px',
//                     lineHeight: '17px',
//                     color: '#FFFFFF',
//                     flex: 1
//                   }}
//                 >
//                   {messages[1].text}
//                 </span>
//               </div>
//               <span 
//                 style={{ 
//                   fontFamily: 'Open Sans',
//                   fontWeight: 400,
//                   fontSize: '10px',
//                   lineHeight: '14px',
//                   color: '#333333',
//                   textAlign: 'right'
//                 }}
//               >
//                 {messages[1].time}
//               </span>
//             </div>

//             {/* Message 3 - Received */}
//             <div 
//               className="flex flex-col"
//               style={{ 
//                 alignItems: 'flex-start',
//                 gap: '4px',
//                 marginBottom: '10px'
//               }}
//             >
//               <div 
//                 className="flex items-center"
//                 style={{ 
//                   padding: '10px',
//                   gap: '10px',
//                   maxWidth: '236px',
//                   background: 'rgba(211, 211, 211, 0.4)',
//                   borderRadius: '6px'
//                 }}
//               >
//                 <span 
//                   style={{ 
//                     fontFamily: 'Inter',
//                     fontWeight: 400,
//                     fontSize: '14px',
//                     lineHeight: '17px',
//                     color: '#333333'
//                   }}
//                 >
//                   {messages[2].text}
//                 </span>
//               </div>
//               <span 
//                 style={{ 
//                   fontFamily: 'Open Sans',
//                   fontWeight: 400,
//                   fontSize: '10px',
//                   lineHeight: '14px',
//                   color: '#333333'
//                 }}
//               >
//                 {messages[2].time}
//               </span>
//             </div>

//             {/* Message 4 - Sent */}
//             <div 
//               className="flex flex-col"
//               style={{ 
//                 alignItems: 'flex-end',
//                 gap: '3px',
//                 marginBottom: '10px'
//               }}
//             >
//               <div 
//                 className="flex items-center"
//                 style={{ 
//                   padding: '10px',
//                   gap: '10px',
//                   maxWidth: '259px',
//                   background: '#1F3A93',
//                   borderRadius: '6px'
//                 }}
//               >
//                 <span 
//                   style={{ 
//                     fontFamily: 'Inter',
//                     fontWeight: 400,
//                     fontSize: '14px',
//                     lineHeight: '17px',
//                     color: '#FFFFFF'
//                   }}
//                 >
//                   {messages[3].text}
//                 </span>
//               </div>
//               <span 
//                 style={{ 
//                   fontFamily: 'Open Sans',
//                   fontWeight: 400,
//                   fontSize: '10px',
//                   lineHeight: '14px',
//                   color: '#333333',
//                   textAlign: 'right'
//                 }}
//               >
//                 {messages[3].time}
//               </span>
//             </div>

//             {/* Message 5 - Received */}
//             <div 
//               className="flex flex-col"
//               style={{ 
//                 alignItems: 'flex-start',
//                 gap: '4px'
//               }}
//             >
//               <div 
//                 className="flex items-center"
//                 style={{ 
//                   padding: '10px',
//                   gap: '10px',
//                   maxWidth: '205px',
//                   background: 'rgba(211, 211, 211, 0.4)',
//                   borderRadius: '6px'
//                 }}
//               >
//                 <span 
//                   style={{ 
//                     fontFamily: 'Inter',
//                     fontWeight: 400,
//                     fontSize: '14px',
//                     lineHeight: '17px',
//                     color: '#333333'
//                   }}
//                 >
//                   {messages[4].text}
//                 </span>
//               </div>
//               <span 
//                 style={{ 
//                   fontFamily: 'Open Sans',
//                   fontWeight: 400,
//                   fontSize: '10px',
//                   lineHeight: '14px',
//                   color: '#333333'
//                 }}
//               >
//                 {messages[4].time}
//               </span>
//             </div>
//           </div>

//           {/* Input Footer */}
//           <div 
//             className="flex items-center"
//             style={{ 
//               position: 'absolute',
//               width: '623px',
//               height: '67px',
//               left: '0px',
//               bottom: '0px',
//               padding: '15px 20px',
//               gap: '6px',
//               background: '#FFFFFF',
//               boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.25)'
//             }}
//           >
//             {/* Image Icon */}
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <rect width="24" height="24" stroke="#1F3A93" strokeWidth="1"/>
//               <rect y="8.57" width="24" height="15.43" stroke="#1F3A93" strokeWidth="1"/>
//               <circle cx="19.5" cy="6.5" r="2.5" fill="#1F3A93"/>
//             </svg>

//             {/* Input Field */}
//             <div 
//               className="flex items-center"
//               style={{ 
//                 width: '573px',
//                 height: '37px',
//                 padding: '10px',
//                 gap: '10px',
//                 background: 'rgba(211, 211, 211, 0.5)',
//                 borderRadius: '5px'
//               }}
//             >
//               <input 
//                 type="text"
//                 placeholder="Send a chat"
//                 style={{ 
//                   width: '100%',
//                   height: '17px',
//                   fontFamily: 'Inter',
//                   fontWeight: 400,
//                   fontSize: '14px',
//                   lineHeight: '17px',
//                   color: 'rgba(51, 51, 51, 0.5)',
//                   background: 'transparent',
//                   border: 'none',
//                   outline: 'none'
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';

interface ChatItem {
  id: number;
  name: string;
  message: string;
  time: string;
  avatar: string;
  hasUnread: boolean;
}

interface Message {
  id: number;
  text: string;
  time: string;
  isSent: boolean;
}

export default function ChatContent() {
  const [selectedChat, setSelectedChat] = useState(3); // 4th item is selected (index 3)
  const [activeFilter, setActiveFilter] = useState('all');

  // 8 chat items
  const chatItems: ChatItem[] = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    name: 'Jennifer Garnet',
    message: "Perfect, I'll take it! How do I proceed with ...",
    time: '18:05',
    avatar: '/jenifer.svg',
    hasUnread: i < 5 && i !== 3 // First 5 have unread, except selected one
  }));

  // Sample messages for the conversation
  const messages: Message[] = [
    { id: 1, text: "Hi, I'm interested in the blue sofa.Can you provide more details?", time: '18:05', isSent: false },
    { id: 2, text: "Hello! Certainly, it's a premium velvet sofa with modern design and sturdy construction. Seats three comfortably.", time: '18:10', isSent: true },
    { id: 3, text: "Great! What are the dimensions?", time: '18:15', isSent: false },
    { id: 4, text: 'It\'s 84" long, 36" deep, and 32 high.', time: '18:15', isSent: true },
    { id: 5, text: "Perfect, I'll take it! How do I proceed with the purchase?", time: '18:15', isSent: false }
  ];

  return (
    <div className="relative bg-white w-full min-h-[832px] md:p-[25px] pt-[10px] font-sans">
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
             {/* Notification Icon */}
             <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 16.5c.41 0 .75-.34.75-.75h-1.5c0 .41.34.75.75.75zm3.75-3.75V8.625c0-2.03-1.1-3.73-3-4.185V4.125c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.315c-1.905.455-3 2.145-3 4.185v4.125L3.75 13.5v.75h10.5v-.75l-1.5-1.5z" fill="#333333"/>
              </svg>
            </button>

            {/* Go to marketplace */}
            <a href="#" className="flex items-center gap-2 text-[16px] font-normal leading-[19px] text-[#333333] hover:text-[#1F3A93] transition-colors">
              Go to marketplace
              <svg width="16" height="16" viewBox="0 0 16 16" className="rotate-45">
                <path d="M8 2l-1.41 1.41L11.17 8H2v2h9.17l-4.58 4.59L8 16l7-7z" fill="#000000"/>
              </svg>
            </a>
          </div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        
        {/* Left: Title & Filters */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[22px] font-semibold leading-[27px] text-[#1F3A93]">
            Chat
          </h1>
          
          <div className="flex gap-[10px]">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-[10px] py-[5px] rounded-[6px] text-[14px] font-medium leading-[17px] flex items-center justify-center w-[37px] h-[27px] transition-colors ${
                activeFilter === 'all' ? 'bg-[rgba(31,58,147,0.25)]' : 'bg-transparent'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('read')}
              className="px-[10px] py-[5px] rounded-[6px] text-[14px] font-normal leading-[17px] text-[#333333]"
            >
              Read
            </button>
            <button 
              onClick={() => setActiveFilter('unread')}
              className="px-[10px] py-[5px] rounded-[6px] text-[14px] font-normal leading-[17px] text-[#333333]"
            >
              Unread
            </button>
          </div>
        </div>

        {/* Right: Search & Actions */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          
          {/* Search Bar */}
          <div className="flex items-center justify-between w-full md:w-[406px] h-[39px] px-[2px] pl-[10px] py-[2px] border border-[#D3D3D3] rounded-[25px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#333333"/>
            </svg>
            <button className="bg-[#FF7F50] text-white px-[10px] py-[8px] rounded-[20px] w-[74px] h-[35px] text-[16px] font-semibold leading-[19px] flex items-center justify-center">
              Search
            </button>
          </div>

          {/* Actions Group */}
          
        </div>
      </div>

      {/* Two-Panel Chat Layout */}
      <div className="flex flex-col lg:flex-row gap-[10px] mt-2">
        
        {/* Chat List Panel (Left) */}
        <div className="w-full lg:w-[390px] h-[500px] lg:h-[645px] border border-[#D3D3D3] bg-white overflow-y-auto">
          <div className="flex flex-col">
            {chatItems.map((chat, index) => (
              <div 
                key={chat.id}
                onClick={() => setSelectedChat(index)}
                className={`flex flex-row items-center p-[10px_15px] gap-[9px] h-[70px] border-b border-[#D3D3D3] cursor-pointer transition-colors ${
                  selectedChat === index ? 'bg-[#D3D3D3]' : 'bg-white hover:bg-gray-50'
                }`}
              >
                {/* Avatar */}
                <div 
                  className="bg-gray-300 shrink-0 w-[50px] h-[50px] rounded-full border border-[#1F3A93] bg-cover bg-center"
                  style={{ backgroundImage: "url('/jenifer.svg')" }}
                />

                {/* Chat Info */}
                <div className="flex flex-col justify-center h-full w-full gap-[2px]">
                  {/* Name & Time Row */}
                  <div className="flex justify-between items-center w-full h-[19px]">
                    <span className="text-[16px] font-semibold leading-[19px] text-[#333333] truncate max-w-[60%]">
                      {chat.name}
                    </span>
                    <span className="text-[10px] font-medium leading-[12px] text-[#1F3A93]">
                      {chat.time}
                    </span>
                  </div>
                  
                  {/* Message Preview */}
                  <div className="flex justify-between items-center w-full h-[14px]">
                    <p className="text-[14px] font-normal leading-[17px] text-[#333333] truncate w-full pr-2">
                      {chat.message}
                    </p>
                    {chat.hasUnread && selectedChat !== index && (
                      <div className="w-2 h-2 rounded-full bg-[#1F3A93] shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Panel (Right) */}
        <div className="w-full lg:w-[623px] h-[500px] lg:h-[645px] border border-[#D3D3D3] bg-white relative flex flex-col">
          
          {/* Header */}
          <div className="h-[70px] flex items-center px-5 bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.25)] z-10 shrink-0">
            <div 
              className="bg-gray-300 w-[50px] h-[50px] rounded-full border border-[#1F3A93] bg-cover bg-center shrink-0"
              style={{ backgroundImage: "url('/jenifer.svg')" }}
            />
            <span className="text-[16px] font-medium leading-[19px] text-[#333333] ml-[10px]">
              Jennifer Garnet
            </span>
          </div>

          {/* Date Divider */}
          <div className="absolute top-[86px] left-1/2 -translate-x-1/2 lg:translate-x-[117px] text-[12px] font-normal leading-[15px] text-[#333333] w-[63px] h-[15px] text-center">
          </div>

          {/* Messages Container - Responsive Flow instead of absolute positioning for better UX */}
          <div className="flex-1 overflow-y-auto p-5 lg:mt-[40px] space-y-4">
            
            {/* Message 1 - Received */}
            <div className="flex flex-col items-start gap-1 max-w-[90%] lg:max-w-[282px]">
              <div className="flex items-center p-[10px] bg-[rgba(211,211,211,0.4)] rounded-[6px] rounded-tl-none">
                <span className="text-[14px] font-normal leading-[17px] text-[#333333]">
                  {messages[0].text}
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[14px] text-[#333333] ml-1">
                {messages[0].time}
              </span>
            </div>

            {/* Message 2 - Sent */}
            <div className="flex flex-col items-end gap-1 max-w-[90%] lg:max-w-[333px] self-end">
              <div className="flex items-center p-[10px] bg-[#1F3A93] rounded-[6px] rounded-tr-none">
                <span className="text-[14px] font-normal leading-[17px] text-[#FFFFFF]">
                  {messages[1].text}
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[14px] text-[#333333] mr-1">
                {messages[1].time}
              </span>
            </div>

            {/* Message 3 - Received */}
            <div className="flex flex-col items-start gap-1 max-w-[90%] lg:max-w-[236px]">
              <div className="flex items-center p-[10px] bg-[rgba(211,211,211,0.4)] rounded-[6px]">
                <span className="text-[14px] font-normal leading-[17px] text-[#333333]">
                  {messages[2].text}
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[14px] text-[#333333] ml-1">
                {messages[2].time}
              </span>
            </div>

            {/* Message 4 - Sent */}
            <div className="flex flex-col items-end gap-1 max-w-[90%] lg:max-w-[259px] self-end">
              <div className="flex items-center p-[10px] bg-[#1F3A93] rounded-[6px]">
                <span className="text-[14px] font-normal leading-[17px] text-[#FFFFFF]">
                  {messages[3].text}
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[14px] text-[#333333] mr-1">
                {messages[3].time}
              </span>
            </div>

            {/* Message 5 - Received */}
            <div className="flex flex-col items-start gap-1 max-w-[90%] lg:max-w-[205px]">
              <div className="flex items-center p-[10px] bg-[rgba(211,211,211,0.4)] rounded-[6px]">
                <span className="text-[14px] font-normal leading-[17px] text-[#333333]">
                  {messages[4].text}
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[14px] text-[#333333] ml-1">
                {messages[4].time}
              </span>
            </div>
          </div>

          {/* Input Footer */}
          <div className="h-[67px] flex items-center px-5 bg-white shadow-[0px_-1px_4px_rgba(0,0,0,0.25)] shrink-0">
            {/* Image Icon */}
            <button className="mr-[6px] shrink-0 text-[#1F3A93]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" stroke="#1F3A93" strokeWidth="1"/>
                <rect y="8.57" width="24" height="15.43" stroke="#1F3A93" strokeWidth="1"/>
                <circle cx="19.5" cy="6.5" r="2.5" fill="#1F3A93"/>
              </svg>
            </button>

            {/* Input Field */}
            <div className="flex items-center w-full h-[37px] px-[10px] bg-[rgba(211,211,211,0.5)] rounded-[5px]">
              <input 
                type="text"
                placeholder="Send a chat"
                className="w-full h-full bg-transparent border-none outline-none text-[14px] font-normal leading-[17px] text-[#333333] placeholder:text-[rgba(51,51,51,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

