import React from 'react';

export default function Preloader() {
    return (
        <div className="preloader">
            <svg viewBox="0 0 50 50">
                <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
            </svg>
        </div>
    )
}