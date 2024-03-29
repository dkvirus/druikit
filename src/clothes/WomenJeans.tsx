import React from 'react';

const WomenJeans = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 130"
      {...props}
    >
      <path d="M38,127.5c-0.6,0-1.1-0.2-1.5-0.7L7,92.9c-0.7-0.8-0.6-2,0.1-2.7l19.5-19.8c0.8-0.8,2-0.8,2.8,0l9.9,9.8    c0.4,0.4,0.6,0.9,0.6,1.4v44c0,0.8-0.5,1.6-1.3,1.9C38.4,127.5,38.2,127.5,38,127.5z M11.2,91.7L36,120.1V82.3l-7.9-7.8L11.2,91.7    z" />
      <path d="M99.4,13.7c-0.6,0-1-0.4-1-1V2.5c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v10.2C100.4,13.3,100,13.7,99.4,13.7z" />
      <path d="M57.9,13.7c-0.6,0-1-0.4-1-1V2.5c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v10.2C58.9,13.3,58.5,13.7,57.9,13.7z" />
      <path d="M119.5,127.5H86.7c-1,0-1.9-0.8-2-1.8l-6-54.3l-6,54.3c-0.1,1-1,1.8-2,1.8H38c-1.1,0-2-0.9-2-2V37.2    c0-0.1,0-0.2,0-0.3l3.5-24.4l0-10.1c0-0.5,0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.4-0.6h74.4c1.1,0,2,0.9,2,2v10.1l3.5,24.4    c0,0.1,0,0.2,0,0.3v88.3C121.5,126.6,120.6,127.5,119.5,127.5z M88.5,123.5h29V37.4L113.9,13c0-0.1,0-0.2,0-0.3V4.5H43.5v8.2    c0,0.1,0,0.2,0,0.3L40,37.4v86.1h29l7.7-70.7c0.1-1,1-1.8,2-1.8c1,0,1.9,0.8,2,1.8L88.5,123.5z" />
      <path d="M86.7,127.5c-0.6,0-1.1-0.2-1.5-0.7l-14.1-16.2c-0.4-0.4-0.5-1-0.5-1.5l4.1-37.4c0-0.4,0.2-0.9,0.6-1.2    l0.1-0.1c0.4-0.4,0.9-0.6,1.4-0.6c0.5-0.1,1,0.2,1.4,0.6l4.5,4.4c0.3,0.3,0.5,0.7,0.6,1.2l5.4,49.3c0,0.1,0,0.1,0,0.2    c0,0.8-0.5,1.6-1.3,1.9C87.1,127.4,86.9,127.5,86.7,127.5z M74.6,108.6l9.3,10.8l-4.6-42.3L78.2,76L74.6,108.6z" />
      <path d="M59.2,57.2c-0.1,0-0.3,0-0.4-0.1l-11.1-4.7c-0.4-0.2-0.6-0.5-0.6-0.9v-26c0-0.6,0.4-1,1-1h22.2    c0.6,0,1,0.4,1,1v26c0,0.4-0.2,0.8-0.6,0.9l-11.1,4.7C59.5,57.2,59.3,57.2,59.2,57.2z M49.1,50.8l10.1,4.3l10.1-4.3V26.5H49.1    V50.8z" />
      <path d="M98.3,57.2c-0.1,0-0.3,0-0.4-0.1l-11.1-4.7c-0.4-0.2-0.6-0.5-0.6-0.9v-26c0-0.6,0.4-1,1-1h22.2    c0.6,0,1,0.4,1,1v26c0,0.4-0.2,0.8-0.6,0.9l-11.1,4.7C98.5,57.2,98.4,57.2,98.3,57.2z M88.2,50.8l10.1,4.3l10.1-4.3V26.5H88.2    V50.8z" />
      <path d="M115.9,13.7H41.5c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h74.4c0.6,0,1,0.4,1,1C116.9,13.3,116.5,13.7,115.9,13.7z" />
    </svg>
  );
};

export default WomenJeans;
