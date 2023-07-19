import React from 'react';

const NewbieLogo = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 58 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1364 11.1853C9.55733 11.5019 8.89046 11.651 8.22457 11.651C7.47031 11.651 6.69866 11.4511 6.08505 11.0357C6.08505 10.9857 6.06761 10.9356 6.06761 10.8861C6.06761 10.221 7.10218 10.4035 7.38272 9.75501C7.47057 9.53876 7.54051 8.39061 7.54051 8.10827C7.54051 7.52614 7.47083 6.94453 7.25998 6.37877C7.50541 6.31239 7.68069 6.07954 7.68069 5.8467C7.68069 5.68071 7.5928 5.4969 7.43573 5.41393C7.11958 4.96509 6.55878 4.74909 6.08531 4.46619C5.19113 5.28167 3.20918 4.94876 3.20918 6.54549C2.87611 6.86104 2.73547 7.31014 2.73547 7.75924C2.73547 8.39087 2.96449 8.97351 3.03418 9.58907C3.05161 9.68863 3.06904 9.77211 3.10438 9.8712C3.29655 10.4372 4.27933 10.3708 4.27933 11.1692C4.27933 11.2854 4.2619 11.4015 4.2258 11.5182C3.84046 11.6178 3.192 11.3855 3.20918 12C2.06934 11.0857 0.140894 12.2665 0 10.5534H0.210593C1.63122 10.5534 1.28049 8.69061 1.52543 7.82563C1.15702 7.0944 1.70117 5.58013 0.684055 5.26431C0.70148 5.21503 0.718906 5.14839 0.718906 5.09837C0.718906 4.86527 0.368662 4.69903 0.174997 4.6158H0C0.368413 4.26706 0.350989 3.81745 0.841375 3.50265C0.929749 3.48478 1.01687 3.46818 1.10524 3.46818C1.85899 3.46818 2.48978 4.05106 3.03394 4.46644C3.66522 4.06715 4.4187 3.93413 4.91013 3.33542L5.57725 3.81745V3.33593C5.69922 3.31959 5.82218 3.31959 5.94517 3.31959C6.76911 3.31959 7.33018 3.66809 7.97888 4.084C8.08418 4.15038 8.18922 4.21727 8.27762 4.29999C8.75058 4.71617 8.80333 5.91356 8.80333 6.49569C8.80333 6.81176 8.769 7.11099 8.769 7.41099C8.769 7.9599 9.04902 8.45777 9.04902 9.00746C9.04902 9.27351 8.96117 9.53927 8.78593 9.75553C9.18967 10.1046 10.206 10.2542 10.206 10.8866C10.206 10.9861 10.1712 11.0865 10.1364 11.1861V11.1853ZM19.1164 7.09517C18.4842 7.20904 17.9198 7.55091 17.253 7.55091C16.8763 7.55091 16.5522 7.37143 16.3125 7.09517C15.9025 7.25807 15.4582 7.30607 15.0136 7.30607C14.6208 7.30607 14.2275 7.25807 13.8344 7.25807C13.7826 7.09517 13.6467 6.9486 13.4586 6.9486C13.0652 6.9486 12.5699 7.43679 12.194 7.56699C12.3645 8.5926 13.3049 9.37333 14.159 9.92687C14.6893 10.2526 15.1846 10.3992 15.8176 10.3992C16.6715 10.3992 17.2871 9.0639 18.0057 9.0639C18.3816 9.0639 18.6375 9.48771 18.7749 9.76423C18.0057 11.0017 16.9963 11.245 15.5948 11.4084C15.2874 11.4404 14.9795 11.4894 14.6546 11.4894C14.45 11.4894 13.989 11.3592 13.8008 11.278C12.0402 10.5291 11.5104 8.7552 11.2018 7.09517C11.5274 6.13517 11.3735 4.58901 12.6894 4.27957L13.6806 3.33542C13.7826 3.4332 13.92 3.48146 14.057 3.48146C14.3988 3.48146 14.7233 3.31908 15.0477 3.31908C15.3051 3.31908 15.5269 3.44929 15.6469 3.64512L16.3128 3.33542C16.5353 3.54682 16.843 3.71073 17.1681 3.71073C17.2701 3.71073 17.3727 3.69286 17.4583 3.64512C18.2101 4.47437 19.1675 5.38586 19.1675 6.55826C19.1675 6.73697 19.15 6.93253 19.1164 7.09517ZM16.6376 4.58901C16.4497 4.4583 16.1935 4.37709 15.9535 4.37709C15.4756 4.37709 15.0644 4.65386 14.587 4.65386C14.4495 4.65386 14.2957 4.63779 14.1588 4.58901C13.0655 4.73503 12.7748 5.82574 12.3478 6.63917C12.4499 6.72086 12.5868 6.80259 12.7232 6.80259C13.0822 6.80259 13.3385 6.3951 13.6636 6.3951C13.818 6.3951 13.937 6.50923 14.0057 6.63917C15.2702 6.4773 16.5353 6.33077 17.7993 6.16736C17.6637 5.66284 17.0645 4.89793 16.6376 4.58901ZM22.9549 11.3581C22.7991 11.424 22.6438 11.4891 22.4715 11.4891C21.7284 11.4891 21.8661 10.1656 21.4683 9.7734C21.5037 9.69171 21.5211 9.59366 21.5211 9.51197C21.5211 8.89106 20.8472 8.41667 20.8472 7.79627C20.8472 7.66504 20.8821 7.53454 20.9675 7.42093C20.6919 6.89756 20.5704 6.14567 20.5704 5.57374C20.5704 5.39451 20.5704 5.21426 20.6227 5.05114C20.5704 5.06773 20.5194 5.06773 20.4676 5.06773C19.9319 5.06773 20.0183 4.44733 19.9665 4.1034C19.9491 4.00562 19.9143 3.89098 19.9143 3.79345C19.9143 3.48273 20.1047 3.36784 20.4151 3.36784C20.7606 3.36784 21.1061 3.49857 21.4514 3.49857C21.5211 3.49857 21.5734 3.49857 21.6244 3.48248C21.7284 3.79294 21.9356 3.7429 22.2119 3.7429C22.2985 3.7429 22.3846 3.76026 22.4533 3.79294C22.0565 4.41334 21.9878 5.16574 21.9878 5.88394C21.9878 6.81587 22.1262 7.74699 22.1262 8.67913C22.3503 9.00596 22.6955 9.46294 23.1617 9.46294C23.3343 9.46294 23.4899 9.39784 23.6285 9.29906H23.8017C23.2317 9.83876 22.9554 10.6233 22.9554 11.3581H22.9549ZM28.2757 7.56724C28.2757 7.89403 28.3449 8.22086 28.448 8.51447C28.2409 8.56371 28.1368 8.71106 28.1368 8.92371C28.1368 9.02177 28.1548 9.13564 28.1548 9.25054C28.1548 9.36467 28.103 9.47901 27.9646 9.46294C27.9646 10.2309 27.878 11.2277 26.8071 11.2277C26.3926 11.2277 26.237 10.9009 26.1156 10.5577L26.4616 10.4107C25.8741 10.1324 25.6675 9.36467 25.4771 8.82519C25.4081 8.67887 25.3389 8.51473 25.2866 8.35157C25.0967 7.71403 25.2002 6.81536 24.4577 6.47246C24.3713 6.55414 24.2162 6.66801 24.2162 6.79924C24.2162 6.91414 24.3713 7.02801 24.4577 7.09363C24.164 7.50214 23.7669 7.91066 23.7669 8.41667C23.7669 8.51473 23.7669 8.59667 23.8017 8.67887H23.6285C23.6459 8.62959 23.6459 8.58009 23.6459 8.53183C23.6459 8.13964 23.3701 7.8126 23.3701 7.42046C23.3701 7.24071 23.4732 7.06046 23.629 6.94659C23.8535 6.27561 23.8182 5.36109 24.6307 5.05037C24.5789 5.11573 24.5271 5.18134 24.5271 5.26277C24.5271 5.62277 25.6154 5.39374 25.788 5.68787C25.7364 5.96541 25.65 6.2598 25.65 6.57026C25.65 7.02776 25.8923 7.33873 26.2898 7.56673C26.2898 8.28596 26.2898 9.13513 26.6176 9.77263C27.1016 9.78926 27.1362 9.29829 27.2915 8.98881C27.1016 8.80907 27.0321 8.56324 27.0321 8.31836C27.0321 7.95917 27.17 7.59917 27.2915 7.25627C27.2566 7.1424 27.2397 7.01117 27.2397 6.89679C27.2397 6.29246 27.5509 5.75297 27.5509 5.16501C27.5509 4.59231 27.1531 4.28212 26.6174 4.10238C26.6348 3.79243 26.8942 3.53099 27.1185 3.31857C27.2561 3.48197 27.4637 3.54707 27.6885 3.54707C28.0858 3.54707 28.4657 3.36682 28.8801 3.36682C29.3466 3.36682 29.5366 3.71047 29.6227 4.10213C29.2431 5.27837 28.276 6.30853 28.276 7.56673L28.2757 7.56724ZM39.4755 7.17536C39.4929 7.3617 39.5104 7.54757 39.5104 7.71711C39.5104 9.0363 38.9279 10.34 37.9396 11.2537C37.5692 11.592 37.1107 11.7444 36.5986 11.7444C35.9447 11.7444 35.2925 11.5248 34.7101 11.2537L34.5512 11.5749C34.3745 10.7298 33.4385 10.9999 33.0153 10.594L31.9917 11.5749C31.6213 11.4906 31.4267 11.169 31.4267 10.8141C31.4267 10.5606 31.515 10.3226 31.6557 10.1033C31.6387 9.93373 31.6213 9.76474 31.6213 9.5781C31.6213 8.78331 31.7973 7.97091 31.7973 7.17557C31.7973 6.66801 31.7095 6.15943 31.4802 5.70321C31.4802 4.78916 31.868 3.89251 31.868 2.979C31.868 2.50463 31.7446 2.03051 31.4804 1.62456C30.9686 1.45503 30.5626 1.09989 30.1206 0.812666C30.2973 0.321695 31.1095 0.321695 31.4804 0C32.1506 0 32.7507 0.558116 33.1749 0.981424C33.2272 1.15044 33.2628 1.31997 33.2628 1.50609C33.2628 2.09842 32.9979 2.67365 32.9979 3.28257C32.9979 3.62137 33.1214 3.97651 33.3509 4.2308C33.7923 4.2308 33.8801 3.72273 34.3391 3.72273C34.4098 3.72273 34.4805 3.74009 34.5512 3.74009C34.6035 3.85754 34.6391 3.97651 34.6391 4.09498C34.6391 4.85657 33.3688 5.1954 33.5264 6.19367C33.2272 6.65014 32.9265 7.19194 32.9265 7.75003C32.9265 8.00383 33.0153 8.27524 33.1746 8.4777C34.1629 8.88364 33.9862 10.9323 35.1163 10.9323C35.4864 10.9323 35.7511 10.7293 36.0689 10.5937C36.3161 10.4924 36.5805 10.4247 36.8107 10.2891C37.7985 9.67997 38.3815 8.39396 38.6287 7.34434C38.3108 6.56563 37.9222 5.82116 37.6051 5.05929C37.3223 4.95896 36.7219 4.70443 36.7219 4.36611C36.7219 4.31559 36.7401 4.28187 36.7575 4.23132C36.5633 4.28238 36.3692 4.31559 36.1745 4.31559C35.8571 4.31559 35.5397 4.24791 35.2218 4.23132C35.1865 4.14655 35.1512 4.04493 35.1512 3.92596C35.1512 3.46971 35.6806 3.28308 36.0861 3.28308C36.9693 3.28308 37.5344 4.09574 38.2757 4.09574C38.3454 4.09574 38.3986 4.09574 38.4524 4.07915C38.8403 4.78916 39.8285 5.55051 39.8285 6.37954C39.8285 6.66801 39.6692 6.9555 39.4755 7.17536ZM48.5409 11.4764C46.9203 11.797 45.2455 11.8144 43.6079 11.8144C43.3785 11.9323 43.1145 11.9997 42.868 11.9997C42.4632 11.9997 42.093 11.881 41.7062 11.881C41.5294 11.881 41.3708 11.8984 41.2297 11.9661C40.9659 11.8481 40.8245 11.5611 40.8245 11.291C40.8245 10.7684 41.5123 10.583 41.9521 10.583C42.3922 10.583 42.833 10.6673 43.274 10.6673L43.7849 11.0043C43.9606 10.8189 44.0659 10.5667 44.0659 10.3139C44.0659 9.77391 43.7482 9.26841 43.7482 8.71183C43.7482 8.49223 43.8194 8.25634 43.9431 8.07047C44.0135 7.66581 44.083 7.24453 44.083 6.82273C44.083 6.23246 43.9602 5.60871 43.5021 5.16986C43.4497 5.1198 43.3439 5.01819 43.2735 4.98501C43.1844 4.95077 43.0966 4.95077 43.0096 4.95077C42.6038 4.95077 42.1985 5.08611 41.793 5.08611C41.3529 5.08611 41.0005 4.84993 41.0005 4.39419C41.0005 4.07379 41.2822 3.82103 41.564 3.68622C41.7572 3.82103 42.0039 3.87183 42.2503 3.87183C42.5508 3.87183 42.8509 3.82077 43.1669 3.82077C43.4322 3.82077 43.7132 3.87183 43.9427 4.00638C44.0826 3.87158 44.2595 3.73626 44.4706 3.73626C44.8583 3.73626 45.1227 4.24255 45.2989 4.49533C45.2989 5.59136 45.6161 6.68769 45.6161 7.78453C45.6161 8.32423 45.5104 8.86346 45.2989 9.36926C45.4221 10.162 45.8626 10.4482 46.6734 10.4482C46.9544 10.4482 47.2542 10.415 47.5361 10.415C48.2052 10.415 48.54 10.6346 48.54 11.3086V11.4771L48.5409 11.4764ZM44.7884 3.02802C43.9956 3.02802 42.9213 2.87586 42.9213 1.89775C43.1499 1.32482 43.3256 1.18951 43.9431 1.0884C44.1005 1.05444 44.2416 1.02126 44.4007 1.02126C44.9291 1.02126 45.3347 1.34142 45.6515 1.7295C45.5104 2.13391 45.1935 2.82479 44.7879 3.02777L44.7884 3.02802ZM57.9492 7.09517C57.3164 7.20904 56.7526 7.55091 56.0856 7.55091C55.709 7.55091 55.3849 7.37143 55.1452 7.09517C54.7349 7.25807 54.2906 7.30607 53.8457 7.30607C53.4534 7.30607 53.0602 7.25807 52.667 7.25807C52.6154 7.09517 52.4793 6.9486 52.2913 6.9486C51.8976 6.9486 51.4025 7.43679 51.0264 7.56699C51.1974 8.5926 52.1377 9.37333 52.9915 9.92687C53.5216 10.2526 54.0168 10.3992 54.6501 10.3992C55.5039 10.3992 56.1193 9.0639 56.8379 9.0639C57.214 9.0639 57.4699 9.48771 57.6072 9.76423C56.8379 11.0017 55.8284 11.245 54.427 11.4084C54.1195 11.4404 53.8116 11.4894 53.4871 11.4894C53.2824 11.4894 52.8214 11.3592 52.6333 11.278C50.8724 10.5291 50.3423 8.75546 50.0344 7.09543C50.3594 6.13543 50.2062 4.58927 51.5219 4.27983L52.513 3.33567C52.6154 3.43346 52.7523 3.48171 52.8896 3.48171C53.2312 3.48171 53.5557 3.31933 53.8803 3.31933C54.1375 3.31933 54.3592 3.44955 54.4795 3.64537L55.1452 3.33567C55.3678 3.54707 55.6753 3.71099 56.0007 3.71099C56.1026 3.71099 56.2054 3.69311 56.2907 3.64537C57.0426 4.47463 58 5.38611 58 6.55851C58 6.73723 57.9825 6.93279 57.9488 7.09543L57.9492 7.09517ZM55.4702 4.58927C55.2825 4.45856 55.0262 4.37734 54.7861 4.37734C54.308 4.37734 53.8969 4.65411 53.4189 4.65411C53.282 4.65411 53.1284 4.63804 52.9907 4.58927C51.8976 4.73529 51.6068 5.826 51.1803 6.63943C51.2822 6.72111 51.4191 6.80284 51.5556 6.80284C51.9147 6.80284 52.171 6.39536 52.4964 6.39536C52.6499 6.39536 52.7693 6.50949 52.8384 6.63943C54.1029 6.47756 55.3678 6.33103 56.6319 6.16761C56.4958 5.6631 55.8971 4.89819 55.4702 4.58927Z"
        fill="#56545E"
      />
    </svg>
  );
};

export default NewbieLogo;