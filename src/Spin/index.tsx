import React, {
  CSSProperties,
  FC,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { LoadingOutlined } from '../icons';

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

const Spin: FC<SpinProps> = ({
  style,
  className,
  children = null,
  spinning = true,
  size = 'default',
  maskStyle = {},
  zIndex = 101,
  minHeight = 300,
}) => {
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
  const iconEl = <LoadingOutlined size={sizeObj[size]} />;

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

export default Spin;
