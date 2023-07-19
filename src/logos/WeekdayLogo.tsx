import React from 'react';

const WeekdayLogo = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.4232 10.9974L5.59164 4.06348H5.50128L4.55874 10.9974H1.91631L0 0.0859375H2.41851L3.42837 8.0579H3.51863L4.43092 0.0859375H6.7046L7.56213 8.0579H7.66465L8.66215 0.0859375H11.0241L9.06563 10.9974H6.4232Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3887 10.9974V0.0859375H17.8973V1.97414H14.7456V4.4682H17.5052V6.35584H14.7456V9.10954H18.0235V10.9974H12.3887Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3568 10.9974L30.1208 6.83558L29.3689 8.01476V10.9974H27.0957V0.0859375H29.3689V4.65928H29.4872L31.3522 0.0859375H33.8347L31.7 4.59973L33.867 10.9974H31.3568Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7422 10.9974V0.0859375H25.251V1.97414H22.099V4.4682H24.8588V6.35584H22.099V9.10954H25.377V10.9974H19.7422Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5914 9.35514H38.163C39.1456 9.35514 39.352 8.79177 39.352 8.31906V2.76444C39.352 2.29163 39.1456 1.72816 38.163 1.72816H37.5914V9.35514ZM35.2344 10.9974V0.0859375H39.0174C40.8786 0.0859375 41.7086 0.954179 41.7086 2.90108V8.30559C41.7086 10.2925 40.2589 10.9974 39.0174 10.9974H35.2344Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.6611 7.22655H47.4175L46.6699 1.88728H46.4674L45.6611 7.22655ZM47.9551 10.9974L47.6444 8.95061H45.4229L45.1039 10.9974H42.7832L44.8026 0.0859375H48.3542L50.3728 10.9974H47.9551Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.4895 10.9974V6.66574L50.3887 0.0859375H52.8291L53.5901 3.88084H53.7448L54.5518 0.0859375H56.9405L54.8463 6.48775V10.9974H52.4895Z"
        fill="black"
      />
    </svg>
  );
};

export default WeekdayLogo;
