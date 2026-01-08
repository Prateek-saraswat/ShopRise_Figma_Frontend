'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PasswordValidation {
  minLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ newPassword?: string; confirmPassword?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password validation
  const validatePassword = (password: string): PasswordValidation => {
    return {
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  };

  const isPasswordValid = (password: string): boolean => {
    const validation = validatePassword(password);
    return Object.values(validation).every(v => v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});

    // Validate new password
    if (!newPassword) {
      setErrors(prev => ({ ...prev, newPassword: 'Password is required' }));
      return;
    }

    if (!isPasswordValid(newPassword)) {
      setErrors(prev => ({ 
        ...prev, 
        newPassword: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character' 
      }));
      return;
    }

    // Validate confirm password
    if (!confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Please confirm your password' }));
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      return;
    }

    setIsSubmitting(true);

    try {
      // API call to change password
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newPassword,
          rememberMe
        })
      });

      if (response.ok) {
        // Success - redirect to login or dashboard
        alert('Password changed successfully!');
        router.push('/login');
      } else {
        const data = await response.json();
        setErrors({ newPassword: data.message || 'Failed to change password' });
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setErrors({ newPassword: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    router.push('/login');
  };

  return (
    <div 
      style={{ 
        position: 'relative',
        width: '1280px',
        height: '832px',
        background: '#FFFFFF',
        margin: '0 auto'
      }}
    >
      {/* Back Arrow */}
      <button
        onClick={handleBack}
        style={{ 
          position: 'absolute',
          width: '24px',
          height: '24px',
          left: '25px',
          top: '17px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: '0'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path 
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" 
            fill="#333333"
          />
        </svg>
      </button>

      {/* Main Form Container */}
      <form
        onSubmit={handleSubmit}
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '25px',
          position: 'absolute',
          minWidth: '500px',
          minHeight: '286px',
          left: 'calc(50% - 250px)',
          top: 'calc(50% - 143px)'
        }}
      >
        {/* Title Section */}
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '15px',
            minWidth: '500px',
            height: '222px'
          }}
        >
          {/* Titles */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '5px',
              minWidth: '268px',
              height: '51px'
            }}
          >
            <h1 
              style={{ 
                minWidth: '268px',
                height: '29px',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '29px',
                color: '#333333',
                margin: '0',
                textAlign: 'center'
              }}
            >
              Change your password
            </h1>
            <p 
              style={{ 
                minWidth: '156px',
                height: '17px',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#333333',
                margin: '0'
              }}
            >
              Create a new password
            </p>
          </div>

          {/* Form Fields */}
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '15px',
              minWidth: '500px',
              height: '156px'
            }}
          >
            {/* New Password Field */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '5px',
                minWidth: '500px',
                height: '59px'
              }}
            >
              <label 
                style={{ 
                    minWidth: '100px',
                  height: '17px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333'
                }}
              >
                New password
              </label>
              <div 
                style={{ 
                  position: 'relative',
                  minWidth: '500px',
                  height: '37px'
                }}
              >
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="•••••••••"
                  style={{ 
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '10px',
                    gap: '13px',
                    minWidth: '500px',
                    height: '37px',
                    border: errors.newPassword ? '1px solid #FF0000' : '1px solid #D3D3D3',
                    borderRadius: '8px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#333333',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{ 
                    position: 'absolute',
                    minWidth: '16px',
                    height: '16px',
                    right: '22px',
                    top: 'calc(50% - 8px)',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: '0'
                  }}
                >
                  {showNewPassword ? (
                    // Eye open icon
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3C4.5 3 1.73 5.11 1 8c.73 2.89 3.5 5 7 5s6.27-2.11 7-5c-.73-2.89-3.5-5-7-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5S6.07 4.5 8 4.5s3.5 1.57 3.5 3.5S9.93 11.5 8 11.5z" fill="#333333"/>
                      <circle cx="8" cy="8" r="1.5" fill="#333333"/>
                    </svg>
                  ) : (
                    // Eye closed icon
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3C4.5 3 1.73 5.11 1 8c.73 2.89 3.5 5 7 5s6.27-2.11 7-5c-.73-2.89-3.5-5-7-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5S6.07 4.5 8 4.5s3.5 1.57 3.5 3.5S9.93 11.5 8 11.5z" fill="#333333"/>
                      <path d="M2 2l12 12" stroke="#333333" strokeWidth="1.5"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <span style={{ 
                  fontSize: '12px', 
                  color: '#FF0000',
                  fontFamily: 'Inter'
                }}>
                  {errors.newPassword}
                </span>
              )}
            </div>

            {/* Confirm Password Field */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '5px',
                minWidth: '500px',
                height: '59px'
              }}
            >
              <label 
                style={{ 
                    minWidth: '156px',
                  height: '17px',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333'
                }}
              >
                Confirm your password
              </label>
              <div 
                style={{ 
                  position: 'relative',
                  minWidth: '500px',
                  height: '37px'
                }}
              >
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="•••••••••"
                  style={{ 
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '10px',
                    gap: '13px',
                    minWidth: '500px',
                    height: '37px',
                    border: errors.confirmPassword ? '1px solid #FF0000' : '1px solid #D3D3D3',
                    borderRadius: '8px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#333333',
                    outline: 'none'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ 
                    position: 'absolute',
                    minWidth: '16px',
                    height: '16px',
                    right: '22px',
                    top: 'calc(50% - 8px)',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: '0'
                  }}
                >
                  {showConfirmPassword ? (
                    // Eye open icon
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3C4.5 3 1.73 5.11 1 8c.73 2.89 3.5 5 7 5s6.27-2.11 7-5c-.73-2.89-3.5-5-7-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5S6.07 4.5 8 4.5s3.5 1.57 3.5 3.5S9.93 11.5 8 11.5z" fill="#333333"/>
                      <circle cx="8" cy="8" r="1.5" fill="#333333"/>
                    </svg>
                  ) : (
                    // Eye closed icon
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3C4.5 3 1.73 5.11 1 8c.73 2.89 3.5 5 7 5s6.27-2.11 7-5c-.73-2.89-3.5-5-7-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5S6.07 4.5 8 4.5s3.5 1.57 3.5 3.5S9.93 11.5 8 11.5z" fill="#333333"/>
                      <path d="M2 2l12 12" stroke="#333333" strokeWidth="1.5"/>
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span style={{ 
                  fontSize: '12px', 
                  color: '#FF0000',
                  fontFamily: 'Inter'
                }}>
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div 
              style={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '14px',
                minWidth: '128px',
                height: '18px'
              }}
            >
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                style={{ 
                    minWidth: '18px',
                  height: '18px',
                  background: rememberMe ? '#1F3A93' : '#D9D9D9',
                  borderRadius: '3px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0'
                }}
              >
                {rememberMe && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <label 
                style={{ 
                    minWidth: '96px',
                  height: '17px',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#333333',
                  cursor: 'pointer'
                }}
                onClick={() => setRememberMe(!rememberMe)}
              >
                Remember me
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{ 
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 25px',
            gap: '10px',
            minWidth: '500px',
            height: '39px',
            background: isSubmitting ? '#8899CC' : '#1F3A93',
            borderRadius: '25px',
            border: 'none',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FFFFFF'
          }}
        >
          {isSubmitting ? 'Changing password...' : 'Change password'}
        </button>
      </form>
    </div>
  );
}