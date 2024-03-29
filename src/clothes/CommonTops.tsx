import React from 'react';

const CommonTops = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <g data-name="Layer 3">
        <path d="M22.93,11.74l-4.5-7.5A.5.5,0,0,0,18.12,4l-4-1A.25.25,0,0,0,14,3H10a.25.25,0,0,0-.12,0l-4,1a.5.5,0,0,0-.31.22l-4.5,7.5a.51.51,0,0,0,.05.59l3.34,3.81-1,4.25a.53.53,0,0,0,.1.42A.51.51,0,0,0,4,21H20a.51.51,0,0,0,.39-.19.53.53,0,0,0,.1-.42l-.95-4.25,3.34-3.81A.51.51,0,0,0,22.93,11.74ZM19.3,14.9,18,7.91a.5.5,0,1,0-1,.18l1.5,8h0L19.38,20H4.62l.87-3.89h0l1.5-8a.5.5,0,1,0-1-.18l-1.31,7-2.58-3,4.2-7L10.06,4H13.5v.5a1.5,1.5,0,0,1-.44,1.06,1.53,1.53,0,0,1-2.12,0,.5.5,0,0,0-.71.71A2.5,2.5,0,0,0,14.5,4.5V4.14l3.18.8,4.2,7Z" />
      </g>
    </svg>
  );
};

export default CommonTops;
