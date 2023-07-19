import React from 'react';

const MajeLogo = ({
  width,
  height = 45,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9983 0C10.4287 0 9.00991 0.744124 8.29203 1.92084C7.29394 0.594283 6.13331 0 4.56718 0C3.38708 0 2.46094 0.381797 1.80655 1.13608V0.264126H0V11.5894H1.84634V4.89564C1.84634 2.84697 2.87068 1.6237 4.5858 1.6237C6.22389 1.6237 7.41331 2.99935 7.41331 4.89564V11.5894H9.19108V5.05056C9.19108 4.2675 9.28081 3.62327 9.44504 3.23808C9.84039 2.30687 10.9054 1.6237 11.9771 1.6237C13.6702 1.6237 14.8054 3.00105 14.8054 5.05056V11.5894H16.5832V4.89564C16.5841 2.10454 14.6124 0 11.9983 0Z"
        fill="black"
      />
      <path
        d="M46.6712 8.06769C45.9939 9.32906 44.4769 10.2095 42.981 10.2095C40.8968 10.2095 38.9734 8.56293 38.7525 6.63955H48.6851L48.6784 6.44315C48.6335 5.08358 48.5598 4.61966 48.2678 3.83152C47.4475 1.57544 45.1829 0 42.7651 0C39.5271 0 36.8926 2.66412 36.8926 5.9386C36.8926 9.21309 39.6354 11.8552 43.0073 11.8552C45.2024 11.8552 47.3095 10.6387 48.3744 8.75679L48.4845 8.56124L46.7516 7.92209L46.6712 8.06769ZM38.8219 4.99384C39.257 3.02814 40.8917 1.6237 42.7846 1.6237C44.6538 1.6237 46.1912 2.9384 46.7567 4.99384H38.8219Z"
        fill="black"
      />
      <path
        d="M28.5215 1.82602C27.5056 0.628992 26.0919 0 24.4064 0C21.0015 0 18.334 2.59893 18.334 5.91659C18.3323 6.70164 18.4888 7.47898 18.7943 8.20217C19.0997 8.92536 19.5478 9.57956 20.1118 10.1257C21.2618 11.2441 22.8056 11.8653 24.4097 11.8552C26.0783 11.8552 27.4574 11.2423 28.5249 10.0309V11.5894H30.3263V0.264126H28.5215V1.82602ZM24.4064 1.6237C26.6751 1.6237 28.5215 3.55977 28.5215 5.94114C28.5215 8.29626 26.6658 10.212 24.3843 10.212C22.069 10.212 20.1135 8.24547 20.1135 5.91913C20.1135 3.59279 22.0792 1.6237 24.4064 1.6237Z"
        fill="black"
      />
      <path
        d="M33.1231 10.1991C33.1231 12.3155 32.5898 13.1003 31.0846 13.1824L30.9043 13.1926V14.9898L31.0999 14.9839C31.9642 14.961 32.3003 14.8823 32.892 14.5606C33.4275 14.2879 33.8862 13.8854 34.2262 13.3898C34.7883 12.5703 34.9254 11.9439 34.9254 10.1966V0.265625H33.1231V10.1991Z"
        fill="black"
      />
      <path
        d="M17.2773 17.5632C17.2773 17.5383 17.2872 17.5144 17.3049 17.4968C17.3225 17.4791 17.3464 17.4692 17.3713 17.4692H18.504C18.652 17.4648 18.7994 17.4901 18.9375 17.5436C19.0756 17.5972 19.2016 17.6778 19.308 17.7808C19.4143 17.8839 19.499 18.0072 19.5569 18.1434C19.6148 18.2797 19.6449 18.4263 19.6452 18.5744C19.6455 18.7224 19.6162 18.8691 19.5589 19.0057C19.5016 19.1422 19.4175 19.2659 19.3116 19.3694C19.2057 19.4729 19.0801 19.5541 18.9423 19.6083C18.8044 19.6624 18.6571 19.6884 18.5091 19.6847H17.7887V20.8521C17.788 20.8769 17.778 20.9005 17.7605 20.9181C17.743 20.9358 17.7195 20.946 17.6947 20.9469H17.3713C17.3463 20.9467 17.3224 20.9366 17.3048 20.9188C17.2872 20.9011 17.2773 20.8771 17.2773 20.8521V17.5632ZM18.4744 19.1979C18.5576 19.1977 18.64 19.1811 18.7168 19.149C18.7936 19.1169 18.8633 19.07 18.9219 19.011C18.9806 18.9519 19.027 18.8819 19.0586 18.8049C19.0902 18.7279 19.1062 18.6454 19.1059 18.5621C19.1006 18.3999 19.0311 18.2463 18.9127 18.1352C18.7943 18.0241 18.6367 17.9645 18.4744 17.9696H17.7887V19.1979H18.4744Z"
        fill="black"
      />
      <path
        d="M19.9179 20.82L21.4417 17.4769C21.4509 17.4621 21.4632 17.4494 21.4778 17.4399C21.4925 17.4304 21.509 17.4242 21.5263 17.4219H21.5763C21.5936 17.4242 21.6101 17.4304 21.6247 17.4399C21.6394 17.4494 21.6517 17.4621 21.6609 17.4769L23.1754 20.82C23.1843 20.8337 23.189 20.8498 23.189 20.8661C23.1889 20.8825 23.1841 20.8985 23.1752 20.9122C23.1662 20.9259 23.1535 20.9368 23.1385 20.9434C23.1235 20.95 23.1069 20.9521 23.0908 20.9495H22.7809C22.7565 20.9506 22.7323 20.944 22.7118 20.9306C22.6913 20.9173 22.6755 20.8978 22.6666 20.875L22.3585 20.1977H20.7322C20.6332 20.4263 20.5291 20.6498 20.4292 20.875C20.4195 20.8972 20.4036 20.9162 20.3832 20.9294C20.3629 20.9427 20.3392 20.9496 20.3149 20.9495H20.0025C19.9863 20.9521 19.9698 20.95 19.9548 20.9434C19.9398 20.9368 19.9271 20.9259 19.9181 20.9122C19.9091 20.8985 19.9043 20.8825 19.9043 20.8661C19.9043 20.8498 19.909 20.8337 19.9179 20.82V20.82ZM22.168 19.7668L21.5568 18.4056H21.5322L20.9261 19.7668H22.168Z"
        fill="black"
      />
      <path
        d="M23.9961 17.5628C23.9961 17.5379 24.006 17.514 24.0236 17.4963C24.0412 17.4787 24.0651 17.4688 24.0901 17.4688H25.4446C25.5855 17.4674 25.7254 17.4937 25.8561 17.5464C25.9869 17.5991 26.1059 17.677 26.2065 17.7758C26.3071 17.8746 26.3872 17.9922 26.4423 18.122C26.4973 18.2518 26.5262 18.3911 26.5273 18.5321C26.5273 18.9892 26.2242 19.3659 25.7925 19.5403L26.4697 20.8017C26.4788 20.8164 26.4838 20.8332 26.484 20.8505C26.4842 20.8677 26.4798 20.8847 26.4711 20.8996C26.4623 20.9145 26.4497 20.9267 26.4346 20.935C26.4194 20.9432 26.4023 20.9472 26.3851 20.9465H25.9974C25.9814 20.9466 25.9658 20.9426 25.9519 20.9347C25.9381 20.9268 25.9266 20.9154 25.9186 20.9016L25.2575 19.5852H24.5074V20.855C24.5066 20.8799 24.4963 20.9035 24.4787 20.9211C24.4611 20.9387 24.4375 20.949 24.4126 20.9499H24.0901C24.0777 20.9499 24.0654 20.9474 24.0539 20.9426C24.0425 20.9378 24.0321 20.9308 24.0233 20.922C24.0146 20.9132 24.0077 20.9028 24.003 20.8913C23.9983 20.8798 23.996 20.8674 23.9961 20.855V17.5628ZM25.4048 19.1577C25.5664 19.1548 25.7204 19.0886 25.8338 18.9734C25.9471 18.8581 26.0107 18.703 26.0109 18.5414C26.0067 18.3832 25.9411 18.2329 25.828 18.1222C25.7148 18.0116 25.563 17.9494 25.4048 17.9488H24.5176V19.156L25.4048 19.1577Z"
        fill="black"
      />
      <path
        d="M27.6211 17.5627C27.6221 17.538 27.6325 17.5146 27.6501 17.4971C27.6677 17.4797 27.6912 17.4696 27.7159 17.4688H28.0435C28.0683 17.4696 28.0918 17.4797 28.1094 17.4971C28.1269 17.5146 28.1373 17.538 28.1383 17.5627V20.8516C28.1375 20.8765 28.1272 20.9001 28.1096 20.9177C28.092 20.9353 28.0684 20.9456 28.0435 20.9464H27.7159C27.691 20.9456 27.6674 20.9353 27.6498 20.9177C27.6322 20.9001 27.6219 20.8765 27.6211 20.8516V17.5627Z"
        fill="black"
      />
      <path
        d="M29.2001 20.4475C29.2449 20.3831 29.2847 20.3086 29.3296 20.2435C29.3369 20.2285 29.3475 20.2154 29.3605 20.2051C29.3735 20.1947 29.3887 20.1874 29.4049 20.1836C29.421 20.1798 29.4379 20.1796 29.4541 20.1831C29.4704 20.1865 29.4857 20.1936 29.4989 20.2037C29.5285 20.2291 29.9112 20.5465 30.2938 20.5465C30.6367 20.5465 30.8551 20.3383 30.8551 20.0851C30.8551 19.7863 30.5969 19.5975 30.105 19.3944C29.5971 19.181 29.2009 18.9177 29.2009 18.3412C29.2009 17.9535 29.4989 17.4219 30.2887 17.4219C30.6172 17.4279 30.9367 17.5297 31.2081 17.7148C31.2215 17.7237 31.2329 17.7352 31.2417 17.7487C31.2505 17.7621 31.2565 17.7772 31.2593 17.7931C31.262 17.8089 31.2616 17.8252 31.2579 17.8408C31.2542 17.8564 31.2473 17.8712 31.2377 17.8841C31.198 17.9434 31.1531 18.0136 31.1133 18.0729C31.1063 18.0886 31.096 18.1027 31.083 18.114C31.0701 18.1253 31.0547 18.1337 31.0382 18.1384C31.0216 18.1432 31.0043 18.1443 30.9872 18.1416C30.9702 18.1389 30.954 18.1325 30.9397 18.1228C30.905 18.1025 30.5571 17.8739 30.2693 17.8739C29.8519 17.8739 29.708 18.1372 29.708 18.3209C29.708 18.6045 29.9264 18.7781 30.3387 18.9474C30.9152 19.181 31.4071 19.4553 31.4071 20.0597C31.4071 20.577 30.9448 20.9986 30.2989 20.9986C29.9069 21.0025 29.527 20.8631 29.2305 20.6066C29.1857 20.5668 29.1501 20.5321 29.2001 20.4475Z"
        fill="black"
      />
    </svg>
  );
};

export default MajeLogo;