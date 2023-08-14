import React from 'react';

const CommonTrousers = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 90 90"
      {...props}
    >
      <path d="M23.081055,76.720703c0,0.552246,0.447266,1,1,1h11.579102c0.479492,0,0.890625-0.339844,0.981445-0.810059  l7.332031-37.883301h2.057617l7.331055,37.883301c0.09082,0.470215,0.501953,0.810059,0.981445,0.810059h11.579102  c0.552734,0,1-0.447754,1-1V40.483887c0-14.430176-4.283203-21.885254-5.258789-23.395996v-3.808594c0-0.552246-0.447266-1-1-1  H29.339844c-0.552734,0-1,0.447754-1,1v3.808594c-0.975586,1.510742-5.258789,8.96582-5.258789,23.395996V76.720703z   M64.895264,39.134277c-0.251526,0.024048-0.5047,0.038086-0.758545,0.038086c-4.345703,0-7.880859-3.535645-7.880859-7.881348  c0-3.729614,2.601135-6.904785,6.166992-7.692383C63.601563,27.085815,64.756287,32.248108,64.895264,39.134277z   M27.581055,23.598572c3.566772,0.787476,6.167969,3.96228,6.167969,7.692444c0,4.345703-3.536133,7.881348-7.881836,7.881348  c-0.253723,0-0.507019-0.014099-0.758545-0.038025C25.24762,32.247986,26.402344,27.08551,27.581055,23.598572z M25.081055,41.13269  c0.261414,0.020691,0.523315,0.039673,0.786133,0.039673c5.449219,0,9.881836-4.432617,9.881836-9.881348  c0-4.581482-3.134155-8.488464-7.467896-9.574158c0.997925-2.469971,1.849915-3.711182,1.870239-3.739319  c0.12207-0.17041,0.188477-0.375,0.188477-0.584961v-3.113281h29.324219v3.113281c0,0.208496,0.066406,0.413574,0.1875,0.583008  c0.020752,0.028931,0.873047,1.270691,1.871155,3.741272c-4.333557,1.085693-7.466858,4.992676-7.466858,9.574158  c0,5.44873,4.432617,9.881348,9.880859,9.881348c0.262817,0,0.524719-0.018677,0.786133-0.039307v34.587646h-9.753906  l-7.331055-37.883301c-0.09082-0.470215-0.501953-0.810059-0.981445-0.810059h-0.854492V19.581055c0-0.552246-0.447266-1-1-1  s-1,0.447754-1,1v17.446289h-0.853516c-0.479492,0-0.890625,0.339844-0.981445,0.810059l-7.332031,37.883301h-9.753906V41.13269z" />
    </svg>
  );
};

export default CommonTrousers;
