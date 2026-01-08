'use client';

import React from 'react';

interface UserProfileData {
  name: string;
  email: string;
  profileImage: string;
  bannerImage?: string;
  joinDate: string;
  rating: number;
  reviewCount: number;
  location: string;
  zipCode?: string;
  address?: string;
  socialLinks?: {
    whatsapp?: string;
    facebook?: string;
    twitter?: string;
    messenger?: string;
    email?: string;
  };
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfileData;
}

export default function ProfileModal({ isOpen, onClose, user }: ProfileModalProps) {
  if (!isOpen) return null;

  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill={i < user.rating ? '#FF7F50' : '#D3D3D3'}
          style={{ flex: 'none', order: i, flexGrow: 0 }}
        >
          <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
        </svg>
      );
    }
    return stars;
  };

  // Handle outside click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}
    >
      {/* Modal Content */}
      <div 
        style={{ 
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '20px',
          gap: '30px',
          position: 'relative',
          width: '100%',
            maxWidth: '510px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#FFFFFF',
          border: '1px solid #D3D3D3',
          borderRadius: '10px'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ 
            position: 'absolute',
            right: '15px',
            top: '15px',
            width: '30px',
            height: '30px',
            border: 'none',
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Banner Section */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '10px',
            width: '100%',
            height: '220px',
            background: user.bannerImage 
              ? `linear-gradient(0deg, rgba(255, 127, 80, 0.05), rgba(255, 127, 80, 0.05)), url(${user.bannerImage})`
              : 'linear-gradient(0deg, rgba(255, 127, 80, 0.05), rgba(255, 127, 80, 0.05))',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            // position: 'relative'
          }}
        >
          {/* Profile Info Overlay */}
          
        </div>
        <div 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '0px',
              justifyContent: 'space-between',
            width: '100%',
 paddingRight: '15px',
              height: '95px',
             marginTop: '15px'
            }}
          >
            {/* Left Side: Profile Photo + Info */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px 0px 0px 15px',
                gap: '25px',
                width: 'auto',
                flex: 1,
                height: '95px'
              }}
            >
              {/* Profile Photo */}
              <div 
                style={{ 
                  boxSizing: 'border-box',
                  width: '95px',
                  height: '95px',
                  border: '1px solid #FF7F50',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#F0F0F0'
                }}
              >
                <img 
                  src={user.profileImage}
                  alt={user.name}
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Name, Email, Join Date */}
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '5px',
                  width: '100%',
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#333333'
                  }}
                >
                  {user.name}
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
                  {user.email}
                </span>
                <span 
                  style={{ 
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '10px',
                    lineHeight: '18px',
                    color: '#333333'
                  }}
                >
                  {user.joinDate}
                </span>
              </div>
            </div>

            {/* Right Side: Seller Rating */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '10px',
                width: 'auto',
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333'
                }}
              >
                Seller rating
              </span>
              
              {/* Stars and Count */}
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '5px',
                  width: '105px',
                  height: '18px'
                }}
              >
                <div 
                  style={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '2px',
                    width: '78px',
                    height: '14px'
                  }}
                >
                  {renderStars()}
                </div>
                <span 
                  style={{ 
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: '#333333'
                  }}
                >
                  ({user.reviewCount})
                </span>
              </div>
            </div>
          </div>

        {/* Location Section */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '10px',
            width: '470px'
          }}
        >
          {/* Location Header */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '5px 0px',
              gap: '10px',
              width: '58px',
              height: '27px'
            }}
          >
            <span 
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#1F3A93'
              }}
            >
              Location
            </span>
          </div>

          {/* Divider */}
          <div 
            style={{ 
              width: '470px',
              height: '0px',
              border: '1px solid #D3D3D3'
            }}
          />

          {/* Location Details */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px 0px 0px 50px',
              gap: '10px',
              width: '470px'
            }}
          >
            {/* Location Row */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '5px 0px',
                gap: '13px',
                width: '420px',
                height: '29px'
              }}
            >
              <span 
                style={{ 
                  width: '137px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333'
                }}
              >
                Location :
              </span>
              <span 
                style={{ 
                  width: '137px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333'
                }}
              >
                {user.location}
              </span>
            </div>

            {/* Zip Code Row */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '5px 0px',
                gap: '13px',
                width: '420px',
                height: '29px'
              }}
            >
              <span 
                style={{ 
                  width: '137px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333'
                }}
              >
                Zip Code :
              </span>
              <span 
                style={{ 
                  width: '137px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333'
                }}
              >
                {user.zipCode || '.'}
              </span>
            </div>

            {/* Address Row */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '5px 0px',
                gap: '13px',
                width: '420px',
                height: '29px'
              }}
            >
              <span 
                style={{ 
                  width: '137px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333'
                }}
              >
                Adress :
              </span>
              <span 
                style={{ 
                  width: '137px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#333333'
                }}
              >
                {user.address || '.'}
              </span>
            </div>
          </div>
        </div>

        {/* Social Profile Section */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '15px',
            width: '299.69px',
            height: '74px'
          }}
        >
          {/* Social Profile Header */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '5px',
              width: '100px',
              height: '19px'
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
              Social Profile
            </span>
          </div>

          {/* Social Icons */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '25px',
              width: '299.69px',
              height: '40px'
            }}
          >
            {/* WhatsApp */}
            {user.socialLinks?.whatsapp && (
              <a 
                href={user.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer'
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#25D366"/>
                  <path d="M29 10.8C27.4 9.2 25.3 8.1 23 7.6C20.7 7.1 18.3 7.3 16.1 8.1C13.9 8.9 12 10.3 10.6 12.1C9.2 13.9 8.4 16.1 8.3 18.3C8.2 20.5 8.8 22.7 10 24.6L8 32L15.6 30C17.3 30.9 19.1 31.4 21 31.4C23.3 31.4 25.5 30.7 27.4 29.4C29.3 28.1 30.8 26.3 31.6 24.2C32.4 22.1 32.6 19.8 32.1 17.6C31.6 15.4 30.6 13.4 29 11.8V10.8ZM25.2 24.7C24.9 25.3 24.4 25.8 23.8 26.1C23.2 26.4 22.5 26.5 21.9 26.4C21.2 26.3 20.5 26 19.9 25.6C17.8 24.3 16 22.5 14.7 20.4C14.3 19.8 14 19.1 13.9 18.4C13.8 17.7 13.9 17 14.2 16.4C14.5 15.8 15 15.3 15.6 15C16.2 14.7 16.9 14.6 17.5 14.7C17.6 14.7 17.8 14.7 17.9 14.8C18 14.9 18.1 15.1 18.2 15.3L19.1 17.4C19.2 17.6 19.2 17.8 19.2 18C19.2 18.2 19.1 18.4 19 18.5L18.3 19.3C18.2 19.4 18.2 19.5 18.2 19.7C18.2 19.8 18.3 19.9 18.3 20C18.9 21 19.7 21.9 20.6 22.6C21 23 21.5 23.3 22 23.5C22.1 23.5 22.3 23.6 22.4 23.6C22.6 23.6 22.7 23.5 22.8 23.4L23.5 22.6C23.7 22.4 23.9 22.3 24.1 22.3C24.3 22.3 24.5 22.4 24.7 22.5L26.8 23.5C27 23.6 27.1 23.7 27.2 23.8C27.3 23.9 27.3 24.1 27.3 24.3C27.2 24.4 27.2 24.5 27.2 24.7H25.2Z" fill="white"/>
                </svg>
              </a>
            )}

            {/* Facebook */}
            {user.socialLinks?.facebook && (
              <a 
                href={user.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer'
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#1877F2"/>
                  <path d="M23 13H26V8H23C21.6739 8 20.4021 8.52678 19.4645 9.46447C18.5268 10.4021 18 11.6739 18 13V16H15V21H18V32H23V21H26L27 16H23V13Z" fill="white"/>
                </svg>
              </a>
            )}

            {/* Twitter/X */}
            {user.socialLinks?.twitter && (
              <a 
                href={user.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer'
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#000000"/>
                  <path d="M23.5 13H26L20.5 19.5L27 27H22L18 21.5L13.5 27H11L16.9 20L11 13H16L19.6 18L23.5 13ZM22.5 25.5H24L15.5 14.5H13.9L22.5 25.5Z" fill="white"/>
                </svg>
              </a>
            )}

            {/* Messenger */}
            {user.socialLinks?.messenger && (
              <a 
                href={user.socialLinks.messenger}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer'
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="url(#messenger-gradient)"/>
                  <path d="M20 10C14.5 10 10 14.2 10 19.5C10 22.3 11.3 24.8 13.4 26.5V30L16.8 28.1C17.8 28.4 18.9 28.5 20 28.5C25.5 28.5 30 24.3 30 19C30 13.7 25.5 10 20 10ZM24.8 17.3L22.2 21.1C21.9 21.5 21.3 21.6 20.9 21.3L18.5 19.5C18.3 19.4 18.1 19.4 17.9 19.5L14.7 21.8C14.3 22.1 13.8 21.6 14.1 21.2L16.7 17.4C17 17 17.6 16.9 18 17.2L20.4 19C20.6 19.1 20.8 19.1 21 19L24.2 16.7C24.6 16.4 25.1 16.9 24.8 17.3Z" fill="white"/>
                  <defs>
                    <linearGradient id="messenger-gradient" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00B2FF"/>
                      <stop offset="1" stopColor="#006AFF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            )}

            {/* Email */}
            {user.socialLinks?.email && (
              <a 
                href={`mailto:${user.socialLinks.email}`}
                style={{ 
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  background: '#03B1FC',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white"/>
                  </svg>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}