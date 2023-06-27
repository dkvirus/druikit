import React, {
  CSSProperties,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export interface SpinProps {
  style?: CSSProperties; // 容器 style 样式
  className?: string; // 类名
  children?: ReactNode;
  spinning?: boolean; // 是否显示 loading 图标
  size?: 'small' | 'default' | 'large'; // loading 图标大小
  maskStyle?: CSSProperties; // 遮罩层 style 样式
  zIndex?: number; // 遮罩层 z-index 属性
  minHeight?: number; // 遮罩层最小高度
}

// 定义 LoadingIcon 展示模式
// LoadingMode.flex 容器高度小于浏览器可视窗口高度时，LoadingIcon 垂直水平居中展示
// LoadingMode.sticky 容器高度大于浏览器可视窗口高度时，
enum LoadingMode {
  flex = '垂直水平居中',
  sticky = '粘性定位',
}

export const Spin = ({
  style,
  className,
  children = null,
  spinning = true,
  size = 'default',
  maskStyle = {},
  zIndex = 101,
  minHeight = 300,
}: SpinProps) => {
  // spinWrap 默认样式
  const sty: CSSProperties = {
    minHeight,
    position: 'relative',
  };

  // LoadingIcon 根据该变量值进行展示
  const [loadingMode, setLoadingMode] = useState<LoadingMode>(LoadingMode.flex);
  // 容器 div，主要为了获取容器高度
  const divRef = useRef<HTMLDivElement>(null);

  // 计算 loadingMode 值
  useLayoutEffect(() => {
    if (!divRef.current) return;
    // 容器高度
    const { height } = divRef.current.getBoundingClientRect();

    // 浏览器可视窗口高度
    const bodyEleHeight = window.innerHeight;
    console.log('height', height);
    console.log('bodyEleHeight', bodyEleHeight);

    if (height <= bodyEleHeight) {
      setLoadingMode(LoadingMode.flex);
    } else {
      setLoadingMode(LoadingMode.sticky);
    }
  }, [children, LoadingMode.flex, LoadingMode.sticky]);

  /* ***************************** contentEl ******************************* */
  const sizeObj = {
    small: 30,
    default: 40,
    large: 50,
  };

  let contentEl: ReactNode = null;
  const iconEl = <LoadingIcon size={sizeObj[size]} />;

  const maskSty: CSSProperties = {
    zIndex,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,.8)',
  };

  const maskFlexSty: CSSProperties = {
    ...maskSty,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const maskStickySty: CSSProperties = {
    textAlign: 'center',
    position: 'sticky',
    top: 200,
    padding: '100px 0',
  };

  if (loadingMode === LoadingMode.flex) {
    contentEl = <div style={{ ...maskFlexSty, ...maskStyle }}>{iconEl}</div>;
  } else {
    contentEl = (
      <div style={{ ...maskSty, ...maskStyle }}>
        <div style={{ ...maskStickySty }}>{iconEl}</div>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{ ...sty, ...style }}
      ref={divRef}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {children}
      {spinning && contentEl}
    </div>
  );
};

const LoadingIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 135 135"
    xmlns="http://www.w3.org/2000/svg"
    fill="#DE183D"
  >
    <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 67 67"
        to="-360 67 67"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </path>
    <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 67 67"
        to="360 67 67"
        dur="8s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);
