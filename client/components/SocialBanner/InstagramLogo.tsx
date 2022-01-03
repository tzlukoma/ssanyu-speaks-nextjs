import React from 'react';
import CustomLink from '../CustomLink';

const InstagramLogo = () => {
    return (
        <CustomLink
            className="social-link"
            destination={'https://www.instagram.com/ssanyuspeaks'}
            active={false}
            noPadding={true}
            borderBottom={false}
        >
            <div style={{ margin: "0.125em 0.5em" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </div>
        </CustomLink>

    );
};

export default InstagramLogo;
