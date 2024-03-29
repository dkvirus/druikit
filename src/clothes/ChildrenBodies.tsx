import React from 'react';

const ChildrenBodies = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 130"
      {...props}
    >
      <g>
        <path
          id="svg_1"
          d="m116.5,69.8c-0.5,0 -1,-0.2 -1.4,-0.6l-26,-25c-0.4,-0.4 -0.6,-0.9 -0.6,-1.4l-0.1,-4.6c-2.3,-11.7 1.7,-26.4 2.2,-28.2c0.1,-0.3 0.2,-0.6 0.5,-0.9c0.4,-0.5 1,-0.7 1.6,-0.7c0.6,0 1.2,0.3 1.5,0.8l32.9,46.7c0.5,0.7 0.5,1.8 -0.1,2.5l-9,10.5c-0.3,0.6 -0.9,0.8 -1.5,0.9c0.1,0 0,0 0,0zm-24,-27.9l23.9,22.9l6.6,-7.7l-29.5,-41.9c-1.2,5.3 -2.7,14.8 -1.1,22.4c0,0.1 0,0.2 0,0.3l0.1,4z"
        />
        <path
          id="svg_2"
          d="m11.5,69.8c0,0 -0.1,0 0,0c-0.6,0 -1.2,-0.3 -1.5,-0.7l-9,-10.6c-0.6,-0.7 -0.6,-1.7 -0.1,-2.5l32.9,-46.7c0.4,-0.5 0.9,-0.8 1.6,-0.8c0.7,0 1.2,0.2 1.6,0.7c0.2,0.3 0.4,0.6 0.4,1c0.6,2 4.5,16.5 2.2,28.1l-0.1,4.6c0,0.5 -0.2,1 -0.6,1.4l-26,24.9c-0.4,0.4 -0.9,0.6 -1.4,0.6zm-6.5,-12.7l6.6,7.7l23.8,-22.9l0.1,-3.9c0,-0.1 0,-0.2 0,-0.3c1.6,-7.6 0,-17.1 -1.1,-22.4l-29.4,41.8z"
        />
        <path
          id="svg_3"
          d="m52.2,5.4c-0.4,0 -0.8,-0.1 -1.1,-0.3c-0.5,-0.3 -0.8,-0.9 -0.9,-1.5c0,-0.1 0,-0.2 0,-0.2c0,-1.1 0.9,-2 2,-2l0.1,0c1,0 1.8,0.7 2,1.6c0.2,0.9 -0.3,1.9 -1.2,2.2l-0.1,0.1c-0.3,0.1 -0.6,0.1 -0.8,0.1z"
        />
        <path
          id="svg_4"
          d="m90.8,126.6c-3.2,0 -6.9,-1 -10.5,-3.1c-6.3,-3.7 -10.2,-9.7 -9.4,-14.6c0.1,-0.9 0.1,-2 -0.2,-3.3l-3.3,-12.3c0,0 0,-0.1 0,-0.1c-0.4,-2.1 -2,-2.8 -3.4,-2.8l0,0c-1.4,0 -3,0.7 -3.4,2.8c0,0 0,0.1 0,0.1l-3.3,12.3c-0.3,1.3 -0.3,2.4 -0.2,3.3c0.8,4.9 -3.1,10.9 -9.4,14.6c-7.7,4.5 -16.2,4 -19.2,-1.1c-1.8,-3.1 -1.2,-7.2 1.5,-11c2.3,-3.3 3.6,-7.5 3.7,-12l1.9,-61.4c0,-0.1 0,-0.2 0,-0.3c2.3,-11.3 -2.1,-26.4 -2.1,-26.6c-0.3,-1 0.2,-2 1.1,-2.4l16.7,-7.1c1,-0.4 2.2,0 2.6,1.1c0.4,1 0,2.2 -1.1,2.6l-15,6.4c1.1,4.5 3.8,16.6 1.8,26.6l-1.9,61.2c-0.1,5.3 -1.7,10.3 -4.5,14.2c-1.8,2.5 -2.3,5.1 -1.3,6.7c1.8,3.1 8.1,3 13.7,-0.3c5.5,-3.2 7.9,-7.7 7.4,-10.5c-0.2,-1.4 -0.2,-3 0.2,-4.8c0,0 0,-0.1 0,-0.1l3.3,-12.3c0.7,-3.6 3.7,-6 7.3,-6c0,0 0,0 0,0c3.7,0 6.6,2.4 7.3,6l3.3,12.3c0,0 0,0.1 0,0.1c0.4,1.9 0.4,3.4 0.2,4.8c-0.4,2.8 2,7.3 7.4,10.5c5.6,3.3 11.9,3.4 13.7,0.3c1,-1.7 0.5,-4.2 -1.3,-6.7c-2.8,-4 -4.3,-8.9 -4.5,-14.2l-1.9,-61.2c-2,-10 0.6,-22.1 1.8,-26.6l-15,-6.4c-1,-0.4 -1.5,-1.6 -1.1,-2.6c0.4,-1 1.6,-1.5 2.6,-1.1l16.7,7.1c0.9,0.4 1.4,1.4 1.1,2.4c0,0.2 -4.5,15.3 -2.1,26.6c0,0.1 0,0.2 0,0.3l1.9,61.4c0.1,4.6 1.4,8.7 3.7,12c2.7,3.9 3.3,8 1.5,11c-1.2,2.8 -4.5,4.2 -8.3,4.2z"
        />
        <path
          id="svg_5"
          d="m63.9,10.9c-7.2,0 -12.9,-2.8 -13.7,-6.6c0,0 0,0 0,-0.1c-0.4,-1 0,-2.2 1,-2.6l0.1,0c0.6,-0.3 1.3,-0.2 1.9,0.2c0.6,0.4 0.9,1 0.9,1.6c0,1.2 3.5,3.5 9.8,3.5c6.1,0 9.8,-2.3 9.8,-3.5c0,-0.7 0.3,-1.3 0.9,-1.7c0.6,-0.4 1.3,-0.4 1.9,-0.2l0.2,0.1c1,0.4 1.5,1.6 1.1,2.6c-0.1,0.2 -0.1,0.3 -0.2,0.4c-1.2,3.7 -6.6,6.3 -13.7,6.3z"
        />
        <path
          id="svg_6"
          d="m64,18.6c-7.1,0 -12.9,-6.8 -12.9,-15.1c0,-0.6 0.4,-1 1,-1l0,0c0.6,0 1,0.4 1,1c0,7.2 4.9,13.1 10.9,13.1c6,0 10.9,-5.9 10.9,-13.1c0,-0.6 0.4,-1 1,-1l0,0c0.6,0 1,0.4 1,1c0,8.3 -5.8,15.1 -12.9,15.1z"
        />
        <path
          id="svg_7"
          d="m43.6,111.1c-0.5,0 -1,-0.4 -1,-1c-2.3,-87.9 20.3,-93.3 21.2,-93.5c0.5,-0.1 1.1,0.2 1.2,0.8c0.1,0.5 -0.2,1.1 -0.8,1.2c-0.3,0.1 -21.9,6.1 -19.6,91.5c0,0.5 -0.5,1 -1,1c0,0 0,0 0,0z"
        />
      </g>
    </svg>
  );
};

export default ChildrenBodies;
