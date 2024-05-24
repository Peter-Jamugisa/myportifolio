import React from 'react';

const ProfileComponent: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        {/* Hexagon shape */}
        <div className="w-24 h-24 bg-green-500 clip-hexagon"></div>
        {/* SVG Picture */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zM6.12 14.879a9 9 0 1111.76 0A6 6 0 0112 21c-1.356 0-2.624-.393-3.688-1.066A9.019 9.019 0 016.12 14.88z" />
          </svg>
        </div>
      </div>
      <span className="text-xl font-semibold">Jamugisa Peter Paul</span>
    </div>
  );
};

export default ProfileComponent;
