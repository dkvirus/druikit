import React from 'react';

const OddmollyLogo = ({
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
      viewBox="0 0 64 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_338_52747)">
        <path
          d="M41.205 2.11769C40.3693 2.09303 39.5569 2.38841 38.9412 2.94074C38.6552 3.19595 38.4283 3.50787 38.2756 3.85562C38.123 4.20337 38.0482 4.57894 38.0562 4.9572C38.0433 5.34217 38.1157 5.72531 38.2684 6.08044C38.4212 6.43556 38.6507 6.75428 38.9412 7.01481C39.5804 7.5258 40.3796 7.80745 41.2057 7.8128C42.0318 7.81815 42.8347 7.54688 43.4808 7.04421C43.769 6.78219 43.9965 6.46305 44.1481 6.10819C44.2997 5.75332 44.3719 5.37092 44.3598 4.98659C44.3717 4.60403 44.2994 4.22342 44.1478 3.87048C43.9961 3.51754 43.7687 3.20049 43.4808 2.94074C42.8585 2.39142 42.0437 2.09675 41.205 2.11769V2.11769ZM42.6801 6.38577C42.2757 6.74024 41.7514 6.93631 41.208 6.93631C40.6646 6.93631 40.1403 6.74024 39.7359 6.38577C39.5399 6.20371 39.385 5.98359 39.2814 5.73958C39.1777 5.49557 39.1274 5.23306 39.1339 4.96896V4.83962C39.1573 4.32547 39.3884 3.84134 39.7766 3.49317C40.1647 3.145 40.6783 2.96117 41.205 2.98189H41.3134C41.5743 2.98799 41.8315 3.04424 42.0701 3.14741C42.3088 3.25059 42.5243 3.39867 42.7043 3.58321C42.8844 3.76774 43.0254 3.9851 43.1194 4.22287C43.2134 4.46064 43.2584 4.71417 43.252 4.96896C43.2624 5.23091 43.2169 5.49211 43.1184 5.736C43.0199 5.97989 42.8707 6.20115 42.6801 6.38577V6.38577ZM13.4135 6.77966L13.1786 6.80905V0.277597C13.1828 0.237772 13.1767 0.19757 13.1609 0.160621C13.1451 0.123671 13.1202 0.0911376 13.0883 0.0659571C13.0002 0.0182896 12.9 -0.00412446 12.7993 0.00128923H11.5952C11.4615 -0.00299797 11.3302 0.0363023 11.2219 0.112988C11.1737 0.15694 11.1361 0.210944 11.1122 0.270991C11.0882 0.331038 11.0784 0.395585 11.0834 0.459843C11.0768 0.528814 11.0888 0.598286 11.1184 0.661248C11.148 0.724211 11.1941 0.778437 11.252 0.818456C11.4687 0.907128 11.7046 0.941484 11.9384 0.918397L12.2153 0.877245L12.2876 3.07595C12.0569 2.80487 11.7668 2.58788 11.4387 2.44103C11.0838 2.29762 10.7029 2.22563 10.3188 2.22939C9.9413 2.22108 9.56604 2.28825 9.21608 2.42675C8.86613 2.56526 8.54888 2.77218 8.28382 3.0348C8.01795 3.30254 7.80919 3.61919 7.66966 3.96635C7.53013 4.31352 7.46261 4.68429 7.47103 5.05714C7.45529 5.4228 7.51426 5.78786 7.64451 6.13103C7.77475 6.47421 7.97366 6.78863 8.22964 7.05596C8.47395 7.30349 8.76796 7.49913 9.09325 7.63064C9.41854 7.76214 9.76813 7.82668 10.1201 7.82022C10.5344 7.81713 10.9438 7.73318 11.3243 7.57331C11.6728 7.43027 11.9644 7.18065 12.1551 6.86196V7.33227C12.144 7.42456 12.1653 7.51781 12.2153 7.59682C12.2417 7.6234 12.2736 7.64402 12.309 7.65723C12.3444 7.67043 12.3823 7.6759 12.42 7.67325H13.564C13.6248 7.67521 13.6854 7.6653 13.7423 7.6441C13.7991 7.6229 13.8511 7.59084 13.8951 7.54979C13.939 7.50563 13.9729 7.45301 13.9946 7.3953C14.0164 7.33759 14.0256 7.27607 14.0215 7.21469C14.0279 7.15236 14.018 7.08947 13.9928 7.03189C13.9675 6.97432 13.9277 6.92394 13.877 6.88548C13.7404 6.79732 13.576 6.75979 13.4135 6.77966V6.77966ZM11.7216 6.29171C11.5513 6.46338 11.3459 6.59815 11.1187 6.68728C10.8916 6.77641 10.6477 6.81789 10.4031 6.80905C10.1612 6.81586 9.92037 6.77514 9.6949 6.68929C9.46943 6.60345 9.26393 6.47424 9.0906 6.30934C8.9174 6.14384 8.78139 5.94494 8.69121 5.72531C8.60103 5.50568 8.55866 5.27012 8.5668 5.03362C8.55574 4.78683 8.59472 4.54033 8.68151 4.30828C8.7683 4.07624 8.90119 3.86323 9.07254 3.68148C9.2438 3.50935 9.45024 3.37434 9.67844 3.28521C9.90664 3.19608 10.1515 3.15483 10.3971 3.16413C10.8928 3.15131 11.3735 3.33102 11.7337 3.66384C12.0745 4.01554 12.2586 4.48491 12.2454 4.96896C12.2524 5.21235 12.2097 5.45466 12.1198 5.68176C12.0298 5.90886 11.8945 6.11621 11.7216 6.29171V6.29171ZM3.15419 2.11769C2.31502 2.09369 1.49908 2.38877 0.878368 2.94074C0.593117 3.19625 0.367112 3.50836 0.215507 3.85614C0.0639013 4.20392 -0.00979953 4.57933 -0.000653834 4.9572C-0.012727 5.34152 0.0594547 5.72393 0.211055 6.07879C0.362656 6.43366 0.590174 6.75279 0.878368 7.01481C1.50121 7.56145 2.31729 7.85026 3.15419 7.82022C3.98738 7.84967 4.79949 7.56074 5.41797 7.01481C5.70353 6.75704 5.92961 6.44284 6.08118 6.09314C6.23274 5.74343 6.30631 5.36622 6.29699 4.98659C6.3089 4.60403 6.23659 4.22342 6.08495 3.87048C5.93331 3.51754 5.70586 3.20049 5.41797 2.94074C4.79866 2.39425 3.98872 2.09978 3.15419 2.11769V2.11769ZM4.62324 6.37401C4.43014 6.55977 4.20027 6.7051 3.94768 6.80113C3.69508 6.89716 3.42508 6.94186 3.15419 6.93251C2.88447 6.94073 2.61575 6.89664 2.36359 6.80279C2.11143 6.70895 1.88083 6.56721 1.68514 6.38577C1.49657 6.19969 1.34865 5.97818 1.25034 5.73464C1.15202 5.49111 1.10536 5.23062 1.11317 4.96896V4.8455C1.12173 4.59223 1.18132 4.34309 1.28855 4.11232C1.39578 3.88156 1.54854 3.67369 1.73809 3.50061C1.92765 3.32753 2.15028 3.19263 2.39327 3.10363C2.63625 3.01462 2.89482 2.97325 3.15419 2.98189V2.94074C3.42668 2.93278 3.69782 2.98103 3.94992 3.08233C4.20201 3.18363 4.42939 3.3357 4.61722 3.52863C4.81542 3.71404 4.97145 3.9381 5.07518 4.18625C5.17891 4.43439 5.22801 4.70107 5.21929 4.96896C5.22483 5.23067 5.17472 5.49066 5.07212 5.7325C4.96953 5.97434 4.81668 6.19278 4.62324 6.37401V6.37401ZM63.8729 2.35285C63.7632 2.26519 63.6227 2.22298 63.4816 2.23527H62.0125C61.9171 2.21471 61.8184 2.21297 61.7222 2.23013C61.6261 2.24729 61.5344 2.28301 61.4526 2.33521C61.4061 2.38 61.3706 2.43445 61.3487 2.49451C61.3268 2.55457 61.3191 2.61869 61.3262 2.68207C61.3201 2.75158 61.3331 2.82142 61.3638 2.88443C61.3945 2.94744 61.4417 3.00136 61.5008 3.04068C61.6914 3.11661 61.8978 3.14685 62.1028 3.12886L62.3015 3.08183L60.7301 6.27995L59.0865 3.14062H59.3032C59.5095 3.1609 59.7175 3.12637 59.9053 3.04068C59.9623 2.99986 60.0077 2.94549 60.0372 2.88274C60.0667 2.81998 60.0793 2.75091 60.0739 2.68207C60.0786 2.62151 60.0697 2.56068 60.0479 2.50382C60.026 2.44696 59.9918 2.39544 59.9474 2.35285C59.8061 2.27071 59.6413 2.23564 59.4778 2.25291H57.798C57.6668 2.24646 57.5378 2.28843 57.4368 2.37048C57.3876 2.41564 57.3508 2.47214 57.3297 2.53479C57.3087 2.59745 57.3041 2.66426 57.3164 2.7291C57.3109 2.79794 57.3235 2.86701 57.353 2.92977C57.3825 2.99252 57.4279 3.04689 57.485 3.08771C57.6041 3.14681 57.7367 3.17515 57.8703 3.17001H58.0088L60.1882 7.28524L59.2671 9.1077H57.9726C57.9064 9.10182 57.8397 9.10922 57.7766 9.12944C57.7134 9.14966 57.6551 9.18227 57.6054 9.22528C57.5241 9.32119 57.4797 9.44177 57.4797 9.56625C57.4797 9.69073 57.5241 9.81131 57.6054 9.90723C57.7242 9.98975 57.8697 10.0274 58.0148 10.013H60.7602C60.8947 10.0236 61.0282 9.98362 61.1335 9.90135C61.1816 9.85856 61.2191 9.8056 61.2431 9.74651C61.2671 9.68742 61.277 9.62375 61.272 9.56037C61.2786 9.49078 61.2659 9.42073 61.2352 9.35761C61.2045 9.29448 61.1569 9.24064 61.0974 9.20176C60.9052 9.13164 60.7001 9.1016 60.4953 9.11358L60.2786 9.16061L63.3672 3.16413C63.5381 3.17279 63.7077 3.13188 63.8548 3.04656C63.9045 3.00495 63.9431 2.95217 63.9672 2.89277C63.9913 2.83336 64.0003 2.76912 63.9933 2.70558C64.0004 2.64179 63.9933 2.57727 63.9725 2.5164C63.9517 2.45554 63.9177 2.39975 63.8729 2.35285V2.35285ZM36.3583 6.82081H36.1235V4.19882C36.172 3.64379 36.0505 3.0872 35.7743 2.59976C35.6409 2.42906 35.4656 2.29384 35.2647 2.20653C35.0638 2.11921 34.8436 2.0826 34.6244 2.10005C34.359 2.09412 34.0962 2.15271 33.8597 2.27054C33.6261 2.39254 33.4431 2.58994 33.342 2.82904C33.2701 2.60496 33.1266 2.40924 32.9326 2.27054C32.721 2.13903 32.4726 2.07531 32.2221 2.0883C32.0045 2.08203 31.7883 2.12425 31.5899 2.21175C31.3902 2.29547 31.2235 2.43977 31.1143 2.62328C31.1214 2.51591 31.094 2.40905 31.036 2.31757C30.996 2.28562 30.9498 2.26186 30.9001 2.24772C30.8505 2.23358 30.7984 2.22935 30.747 2.23527H29.8319C29.6929 2.22631 29.5556 2.26823 29.4466 2.35285C29.4044 2.39647 29.3723 2.44846 29.3526 2.50527C29.3329 2.56209 29.3259 2.62239 29.3322 2.68207C29.3267 2.75091 29.3393 2.81998 29.3688 2.88274C29.3983 2.94549 29.4437 2.99986 29.5008 3.04068C29.6172 3.08675 29.7426 3.10683 29.868 3.09947H30.1329L30.0607 6.77966C29.868 6.76229 29.6739 6.79052 29.4947 6.86196C29.4386 6.90158 29.3944 6.95526 29.3669 7.01733C29.3393 7.07941 29.3294 7.14759 29.3382 7.21469C29.3329 7.27706 29.3415 7.33981 29.3633 7.39866C29.3851 7.4575 29.4197 7.51106 29.4646 7.55567C29.5144 7.59867 29.5727 7.63128 29.6358 7.6515C29.699 7.67172 29.7657 7.67912 29.8319 7.67325H31.4033C31.5476 7.68926 31.6931 7.65376 31.8127 7.57331C31.8923 7.47063 31.9309 7.34313 31.9211 7.21469C31.9273 7.1498 31.9174 7.08439 31.8923 7.02401C31.8671 6.96363 31.8274 6.91006 31.7766 6.86784C31.6213 6.79477 31.4485 6.76429 31.2769 6.77966L31.0902 6.80905V3.64033C31.1739 3.46624 31.3 3.31484 31.4575 3.19941C31.5872 3.10228 31.7456 3.04867 31.909 3.04656C32.0091 3.04151 32.1088 3.06091 32.1992 3.10299C32.2896 3.14508 32.3679 3.20853 32.4268 3.28759C32.5662 3.48162 32.636 3.71514 32.6255 3.95191V7.05596C32.6058 7.23578 32.6392 7.41735 32.7218 7.57919C32.7687 7.6305 32.8279 7.66969 32.8941 7.69328C32.9603 7.71687 33.0314 7.72412 33.1011 7.7144H33.8718C33.9333 7.71938 33.9952 7.71146 34.0534 7.69119C34.1115 7.67091 34.1646 7.63874 34.2089 7.59682C34.2885 7.49186 34.3269 7.36257 34.3173 7.23233C34.325 7.1684 34.317 7.1036 34.294 7.04329C34.2709 6.98298 34.2335 6.92888 34.1849 6.88548C34.0904 6.82561 33.9779 6.79868 33.8658 6.80905H33.6129V4.3987C33.5935 4.04842 33.6816 3.70046 33.8658 3.39929C33.9361 3.28968 34.0337 3.19929 34.1495 3.13657C34.2654 3.07385 34.3956 3.04085 34.528 3.04068C34.6268 3.03335 34.7256 3.05522 34.8115 3.10345C34.8974 3.15168 34.9665 3.22404 35.0097 3.31111C35.1345 3.65798 35.1857 4.02601 35.1602 4.39282V7.05596C35.1469 7.22032 35.1915 7.38419 35.2866 7.5204C35.3333 7.57485 35.3926 7.61766 35.4597 7.64526C35.5267 7.67287 35.5994 7.68448 35.672 7.67913H36.3644C36.4927 7.69398 36.6219 7.66032 36.7256 7.58506C36.7673 7.53759 36.7989 7.48245 36.8186 7.42289C36.8382 7.36334 36.8455 7.30055 36.84 7.23821C36.8451 7.17395 36.8352 7.1094 36.8113 7.04936C36.7873 6.98931 36.7498 6.93531 36.7015 6.89135C36.5968 6.83511 36.4774 6.81055 36.3583 6.82081V6.82081ZM50.1758 6.77966L48.3696 6.80905V0.277597C48.3728 0.237683 48.3643 0.197716 48.3451 0.162336C48.3259 0.126955 48.2968 0.0976131 48.2612 0.0777149C48.1845 0.0234798 48.091 -0.00348702 47.9963 0.00128923H46.0276C45.8939 -0.00299797 45.7626 0.0363023 45.6543 0.112988C45.606 0.15694 45.5685 0.210944 45.5445 0.270991C45.5206 0.331038 45.5107 0.395585 45.5158 0.459843C45.5014 0.534401 45.5097 0.611451 45.5396 0.681459C45.5696 0.751467 45.6199 0.811361 45.6844 0.853729C45.9192 0.945413 46.1734 0.97972 46.4249 0.95367L47.4003 0.912518L47.4424 6.79141H45.7928C45.6497 6.77855 45.5066 6.81609 45.3894 6.89723C45.3422 6.93793 45.3055 6.98901 45.2825 7.04625C45.2595 7.10349 45.2507 7.16525 45.2569 7.22645C45.2507 7.2894 45.2594 7.35291 45.2824 7.41205C45.3053 7.47118 45.3419 7.52435 45.3894 7.56743C45.496 7.65218 45.6315 7.69421 45.7687 7.685H50.1337C50.2758 7.69664 50.4178 7.66145 50.5371 7.58506C50.6167 7.48239 50.6552 7.35488 50.6454 7.22645C50.6544 7.18378 50.6544 7.13979 50.6454 7.09712C50.6376 7.0454 50.6189 6.99582 50.5907 6.95142C50.5624 6.90703 50.5251 6.86877 50.4811 6.83901C50.4371 6.80926 50.3873 6.78863 50.3348 6.77842C50.2823 6.76821 50.2282 6.76863 50.1758 6.77966ZM56.3711 6.77966L54.5649 6.80905V0.277597C54.5681 0.237683 54.5595 0.197716 54.5404 0.162336C54.5212 0.126955 54.4921 0.0976131 54.4565 0.0777149C54.3788 0.0207522 54.2825 -0.00643665 54.1856 0.00128923H52.259C52.1335 0.00208057 52.0114 0.041133 51.9098 0.112988C51.8651 0.159241 51.8304 0.213762 51.8076 0.273333C51.7849 0.332905 51.7746 0.396322 51.7773 0.459843C51.7583 0.530981 51.7606 0.605984 51.7841 0.67585C51.8076 0.745717 51.8512 0.80748 51.9098 0.853729C52.1454 0.942558 52.3989 0.976769 52.6503 0.95367L53.6257 0.912518L53.6678 6.79141H52.0242C51.8831 6.77997 51.7424 6.81744 51.6268 6.89723C51.5762 6.9357 51.5364 6.98608 51.5111 7.04365C51.4858 7.10123 51.4759 7.16412 51.4823 7.22645C51.4753 7.28999 51.4843 7.35424 51.5084 7.41364C51.5326 7.47304 51.5711 7.52582 51.6208 7.56743C51.7264 7.64976 51.8591 7.69158 51.9941 7.685H56.3169C56.4633 7.70248 56.6111 7.66692 56.7324 7.58506C56.8174 7.4849 56.8585 7.35604 56.8468 7.22645C56.8559 7.16461 56.8496 7.10154 56.8284 7.04258C56.8073 6.98362 56.7718 6.93053 56.7251 6.88782C56.6784 6.84511 56.6219 6.81404 56.5602 6.79725C56.4986 6.78047 56.4337 6.77847 56.3711 6.79141V6.77966ZM21.1019 6.77966L20.8671 6.80905V0.277597C20.8712 0.237772 20.8651 0.19757 20.8493 0.160621C20.8336 0.123671 20.8086 0.0911376 20.7768 0.0659571C20.6928 0.0186301 20.5966 -0.00383824 20.4998 0.00128923H19.2957C19.16 -0.004326 19.0263 0.0350393 18.9164 0.112988C18.8681 0.15694 18.8306 0.210944 18.8066 0.270991C18.7826 0.331038 18.7728 0.395585 18.7779 0.459843C18.7712 0.528814 18.7833 0.598286 18.8129 0.661248C18.8425 0.724211 18.8886 0.778437 18.9465 0.818456C19.1653 0.907141 19.4032 0.941479 19.6389 0.918397L19.9158 0.877245L19.982 3.07595C19.7522 2.80398 19.4619 2.58682 19.1331 2.44103C18.7801 2.29824 18.4013 2.22626 18.0193 2.22939C17.6409 2.22097 17.2647 2.28806 16.9137 2.42655C16.5628 2.56504 16.2445 2.77201 15.9783 3.0348C15.7124 3.30254 15.5036 3.61919 15.3641 3.96635C15.2246 4.31352 15.1571 4.68429 15.1655 5.05714C15.1509 5.42317 15.211 5.78838 15.3422 6.13153C15.4735 6.47468 15.6733 6.78892 15.9301 7.05596C16.1749 7.30293 16.4689 7.49819 16.7941 7.62965C17.1193 7.76111 17.4687 7.82598 17.8206 7.82022C18.2347 7.81634 18.644 7.73242 19.0247 7.57331C19.3784 7.43356 19.6748 7.18344 19.8676 6.86196V7.33227C19.8552 7.42388 19.8743 7.51693 19.9218 7.59682C19.9482 7.6234 19.9801 7.64402 20.0155 7.65723C20.0509 7.67043 20.0888 7.6759 20.1265 7.67325H21.2524C21.3132 7.67521 21.3739 7.6653 21.4307 7.6441C21.4876 7.6229 21.5395 7.59084 21.5835 7.54979C21.6274 7.50563 21.6613 7.45301 21.6831 7.3953C21.7048 7.33759 21.714 7.27607 21.71 7.21469C21.7164 7.15236 21.7065 7.08947 21.6812 7.03189C21.6559 6.97432 21.6161 6.92394 21.5655 6.88548C21.4288 6.79732 21.2644 6.75979 21.1019 6.77966V6.77966ZM19.38 6.27995C19.2096 6.45162 19.0042 6.5864 18.777 6.67552C18.5499 6.76465 18.3061 6.80614 18.0614 6.79729H17.9531C17.7229 6.79045 17.4965 6.73939 17.2866 6.64704C17.0767 6.55468 16.8875 6.42284 16.7298 6.25904C16.5721 6.09525 16.4491 5.90272 16.3676 5.69245C16.2862 5.48219 16.248 5.25831 16.2552 5.03362C16.2453 4.78646 16.2854 4.53981 16.3732 4.30779C16.461 4.07577 16.5948 3.86294 16.767 3.68148C16.9383 3.50935 17.1447 3.37434 17.3729 3.28521C17.6011 3.19608 17.8459 3.15483 18.0915 3.16413C18.3296 3.15813 18.5665 3.19815 18.7887 3.28189C19.0108 3.36563 19.2138 3.49144 19.386 3.65208C19.5559 3.82548 19.6886 4.03022 19.7765 4.25431C19.8644 4.47841 19.9056 4.71736 19.8977 4.9572C19.9072 5.20038 19.8662 5.44291 19.7773 5.67023C19.6883 5.89755 19.5531 6.10494 19.38 6.27995V6.27995Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_338_52747">
          <rect width="64" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OddmollyLogo;