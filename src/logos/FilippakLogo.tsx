import React from 'react';

const FilippakLogo = ({
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
      viewBox="0 0 65 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.9954 4.35379L56.6566 0.109375H54.9639L50.5001 5.40524V0.109375H49.0887V10.9425H50.4996V7.23634L52.0781 5.41875L55.4702 10.9425H57.1131L52.9954 4.35379ZM43.4639 8.08744C43.4639 8.87724 43.1026 9.44496 42.38 9.79303C41.9673 9.99852 41.5117 10.106 41.0496 10.1068C40.6737 10.1068 40.3485 10.0001 40.0742 9.78579C39.7998 9.57144 39.6621 9.27986 39.6621 8.9091C39.6621 8.41958 39.8633 8.06234 40.2656 7.83979C40.5033 7.70655 40.8578 7.60903 41.3289 7.54724L42.1149 7.44731C42.3551 7.41834 42.6002 7.37103 42.8502 7.30393C43.1007 7.23731 43.3042 7.15282 43.4639 7.05289V8.08744V8.08744ZM44.7645 9.07469V5.21889C44.7645 4.49475 44.4828 3.96131 43.9199 3.61855C43.3521 3.27482 42.6134 3.10344 41.7039 3.10344C40.9193 3.10344 40.2304 3.28882 39.6357 3.65862C39.0884 4.00041 38.7833 4.58696 38.7198 5.41682L39.9404 5.50565C39.9941 5.17158 40.0913 4.91427 40.2324 4.73517C40.516 4.37165 40.9969 4.18965 41.675 4.18965C42.2609 4.18965 42.712 4.2891 43.0274 4.48751C43.3423 4.68593 43.4995 5.00503 43.4995 5.44531C43.4995 5.66062 43.4712 5.82524 43.4131 5.94013C43.3116 6.14917 43.1119 6.27324 42.8136 6.31089L40.7386 6.5682C40.0117 6.658 39.4234 6.89889 38.9762 7.28896C38.5275 7.67903 38.3034 8.22841 38.3034 8.93758C38.3034 9.58448 38.5314 10.1237 38.9869 10.5543C39.4414 10.984 40.0283 11.1998 40.7464 11.1998C41.3435 11.1998 41.8904 11.0733 42.3869 10.8213C42.8829 10.5688 43.2779 10.1295 43.5425 9.78675L43.5464 9.78193C43.5742 10.4134 43.6831 10.8435 43.7549 10.9425H45.139C44.911 10.5881 44.7645 10.0252 44.7645 9.07469ZM36.0083 9.24703C36.4071 8.75075 36.6058 8.00924 36.6058 7.02151C36.6058 6.41951 36.5175 5.90248 36.3407 5.46993C36.0073 4.63765 35.396 4.22103 34.5089 4.22103C33.6165 4.22103 33.0057 4.66131 32.6766 5.54041C32.5009 6.01062 32.412 6.60779 32.412 7.33193C32.412 7.91462 32.5004 8.41089 32.6766 8.82027C33.0106 9.60041 33.6213 9.99048 34.5089 9.99048C35.1104 9.99048 35.6099 9.74282 36.0083 9.24703V9.24703ZM31.1905 3.326H32.4335V4.32675C32.6908 3.984 32.972 3.71848 33.2772 3.52972C33.7112 3.24779 34.2209 3.10634 34.8072 3.10634C35.6753 3.10634 36.412 3.4351 37.0174 4.0902C37.6228 4.74675 37.9255 5.68331 37.9255 6.90131C37.9255 8.54751 37.4885 9.72255 36.6146 10.4279C36.061 10.8744 35.417 11.0974 34.6813 11.0974C34.1042 11.0974 33.6194 10.9729 33.2278 10.7238C32.9994 10.5828 32.7435 10.3405 32.4623 9.99724V13.9945H31.1905V3.32551V3.326ZM28.6522 9.24703C29.0506 8.75075 29.2498 8.00924 29.2498 7.02151C29.2498 6.41951 29.1614 5.90248 28.9847 5.46993C28.6503 4.63765 28.04 4.22103 27.1524 4.22103C26.2604 4.22103 25.6497 4.66131 25.3201 5.54041C25.1439 6.01062 25.055 6.60779 25.055 7.33193C25.055 7.91462 25.1439 8.41089 25.3201 8.82027C25.6541 9.60041 26.2648 9.99048 27.1524 9.99048C27.7539 9.99048 28.2534 9.74282 28.6522 9.24703ZM23.8335 3.326H25.077V4.32675C25.3343 3.984 25.6155 3.71848 25.9206 3.52972C26.3542 3.24779 26.8644 3.10634 27.4512 3.10634C28.3188 3.10634 29.0555 3.4351 29.6609 4.0902C30.2663 4.74675 30.569 5.68331 30.569 6.90131C30.569 8.54751 30.132 9.72255 29.2586 10.4279C28.705 10.8744 28.0605 11.0974 27.3252 11.0974C26.7472 11.0974 26.2629 10.9729 25.8718 10.7238C25.6423 10.5828 25.387 10.3405 25.1053 9.99724V13.9945H23.834V3.32551L23.8335 3.326ZM21.1771 10.9425H22.4357V3.326H21.1771V10.9425ZM21.1771 1.60641H22.4357V0.109858H21.1771V1.60641ZM18.3932 10.9425H19.6519V0.109375H18.3932V10.9425ZM15.6572 10.9425H16.9159V3.326H15.6572V10.9425ZM15.6572 1.60641H16.9159V0.109858H15.6572V1.60641ZM9.25813 1.32351V4.69751H13.9929V5.86579H9.25813V10.9425H7.8457V0.109375H14.6871V1.324H9.25813"
        fill="black"
      />
    </svg>
  );
};

export default FilippakLogo;
