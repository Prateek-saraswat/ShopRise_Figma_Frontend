'use client';

import React, { useState } from 'react';
import ProfileModal from './ProfileModal';

interface UserProfile {
  name: string;
  email: string;
  profileImage: string;
  currentSales: number;
  currentPurchases: number;
  rating: number;
  reviewCount: number;
  // Extended profile data for modal
  bannerImage?: string;
  joinDate?: string;
  location?: string;
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

interface ProfileCardProps {
  user?: UserProfile;
  onViewProfile?: () => void;
  onShare?: () => void;
  onChangePhoto?: () => void;
}

export default function ProfileCard({
  user = {
    name: 'John DOE',
    email: 'johndoe@gmail.com',
    profileImage: '/profile-dp.png',
    currentSales: 12,
    currentPurchases: 4,
    rating: 5,
    reviewCount: 10,
    bannerImage: '/profile-banner.jpg',
    joinDate: 'Join oct 2023',
    location: 'Los angeles, CA',
    zipCode: '.',
    address: '.',
    socialLinks: {
      whatsapp: 'https://wa.me/1234567890',
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      messenger: 'https://m.me/johndoe',
      email: 'johndoe@gmail.com'
    }
  },
  onViewProfile,
  onShare,
  onChangePhoto
}: ProfileCardProps) {
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile();
    } else {
      // Open modal by default
      setIsModalOpen(true);
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      console.log('Share clicked');
      // Share functionality
      if (navigator.share) {
        navigator.share({
          title: user.name,
          text: `Check out ${user.name}'s profile!`,
          url: window.location.href
        });
      }
    }
  };

  const handleChangePhoto = () => {
    if (onChangePhoto) {
      onChangePhoto();
    } else {
      console.log('Change photo clicked');
      // Open file picker
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          // Handle file upload
          console.log('File selected:', file);
        }
      };
      input.click();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          style={{ 
            flex: 'none',
            order: i,
            flexGrow: 0
          }}
        >
          <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div 
      style={{ 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: '20px',
        width: '284px',
        height: '364px',
        border: '1px solid #D3D3D3',
        borderRadius: '10px',
        background: '#FFFFFF'
      }}
    >
      {/* Profile Section */}
      <div 
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '15px',
          width: '96px',
          height: '130px'
        }}
      >
        {/* Profile Image with Camera Button */}
        <div 
          style={{ 
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            padding: '0px',
            width: '80px',
            height: '80px'
          }}
          onMouseEnter={() => setIsHoveringPhoto(true)}
          onMouseLeave={() => setIsHoveringPhoto(false)}
        >
          {/* Profile Image */}
          <div
            style={{ 
              boxSizing: 'border-box',
              width: '80px',
              height: '80px',
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

          {/* Camera Button Overlay */}
          <button
            onClick={handleChangePhoto}
            style={{ 
              position: 'absolute',
              width: '30px',
              height: '30px',
              right: '0px',
              bottom: '0px',
              background: '#1F3A93',
              border: '1px solid #FFFFFF',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Camera Icon */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path 
                d="M14.5 11.5V3.5C14.5 2.95 14.05 2.5 13.5 2.5H10.75L9.5 1H5.5L4.25 2.5H1.5C0.95 2.5 0.5 2.95 0.5 3.5V11.5C0.5 12.05 0.95 12.5 1.5 12.5H13.5C14.05 12.5 14.5 12.05 14.5 11.5ZM7.5 10.5C5.85 10.5 4.5 9.15 4.5 7.5C4.5 5.85 5.85 4.5 7.5 4.5C9.15 4.5 10.5 5.85 10.5 7.5C10.5 9.15 9.15 10.5 7.5 10.5Z" 
                fill="#FFFFFF"
              />
            </svg>
          </button>
        </div>

        {/* Name and Email */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '6px',
            width: '96px',
            height: '35px'
          }}
        >
          <span 
            style={{ 
              width: '100px',
              height: '17px',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#333333',
              textAlign: 'center'
            }}
          >
            {user.name}
          </span>
          <span 
            style={{ 
              width: '200px',
              height: '12px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '10px',
              lineHeight: '12px',
              color: '#333333',
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {user.email}
          </span>
        </div>
      </div>

      {/* Divider Line */}
      <div 
        style={{ 
          width: '244px',
          height: '0px',
          border: '1px solid #D3D3D3'
        }}
      />

      {/* Stats and Rating Section */}
      <div 
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '30px',
          width: '244px',
          height: '154px'
        }}
      >
        {/* Stats */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '15px',
            width: '244px',
            height: '85px'
          }}
        >
          {/* Current Sales */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '138px',
              width: '244px',
              height: '17px'
            }}
          >
            <span 
              style={{ 
                width: '90px',
                height: '17px',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#333333'
              }}
            >
              current sales:
            </span>
            <span 
              style={{ 
                width: '16px',
                height: '17px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '17px',
                textAlign: 'right',
                color: '#1F3A93'
              }}
            >
              {String(user.currentSales).padStart(2, '0')}
            </span>
          </div>

          {/* Current Purchases */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '92px',
              width: '244px',
              height: '18px'
            }}
          >
            <span 
              style={{ 
                width: '133px',
                height: '18px',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '18px',
                color: '#333333'
              }}
            >
              current purchases:
            </span>
            <span 
              style={{ 
                width: '19px',
                height: '17px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '17px',
                textAlign: 'right',
                color: '#1F3A93'
              }}
            >
              {String(user.currentPurchases).padStart(2, '0')}
            </span>
          </div>

          {/* Rating */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '97px',
              width: '244px',
              height: '20px'
            }}
          >
            <span 
              style={{ 
                width: '42px',
                height: '20px',
                fontFamily: 'Open Sans',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '20px',
                color: '#333333'
              }}
            >
              Note :
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
              {/* Stars Container */}
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

              {/* Review Count */}
              <span 
                style={{ 
                  width: '22px',
                  height: '18px',
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

        {/* Action Buttons */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '10px',
            width: '214px',
            height: '39px'
          }}
        >
          {/* View Profile Button */}
          <button
            onClick={handleViewProfile}
            style={{ 
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              gap: '10px',
              width: '150px',
              height: '39px',
              border: '1px solid #1F3A93',
              borderRadius: '5px',
              background: '#FFFFFF',
              cursor: 'pointer',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#1F3A93',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F0F4FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
            }}
          >
            View profil
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            style={{ 
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              gap: '10px',
              width: '102px',
              height: '39px',
              background: '#1F3A93',
              border: '1px solid #1F3A93',
              borderRadius: '5px',
              cursor: 'pointer',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#FFFFFF',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#152B6B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1F3A93';
            }}
          >
            Share
          </button>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={{
          name: user.name,
          email: user.email,
          profileImage: user.profileImage,
          bannerImage: user.bannerImage || '/banner-placeholder.jpg',
          joinDate: user.joinDate || 'Join oct 2023',
          rating: user.rating,
          reviewCount: user.reviewCount,
          location: user.location || 'Los angeles, CA',
          zipCode: user.zipCode || '.',
          address: user.address || '.',
          socialLinks: user.socialLinks
        }}
      />
    </div>
  );
}