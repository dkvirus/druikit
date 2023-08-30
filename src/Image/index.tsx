import { Property } from 'csstype';
import React, { CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import { classnames } from '../utils/cssUtils';
import './styles.css';

export interface ImageProps {
  style?: CSSProperties;
  className?: string;
  alt?: string;
  src: string;
  width?: number | string;
  height?: number | string;
  /**
   * @description 加载失败时容错地址
   */
  fallback?: string;
  lazy?: boolean;
  objectFit?: Property.ObjectFit;
}

/**
 * 特性:
 * 1. 懒加载
 * 2. 加载失败占位图片
 * 3. 加载过程动画效果
 */
const Image = ({
  style,
  className,
  alt,
  src,
  width = 'auto',
  height = 'auto',
  objectFit = 'cover',
  fallback,
  lazy = true,
  ...props
}: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState(false);

  /* *************************** 监听加载状态 ********************************** */
  useLayoutEffect(() => {
    const imgEl = imgRef.current;
    if (!imgEl) return;

    setLoading(true);

    const onImgError = () => {
      if (typeof fallback === 'string') {
        imgEl.src = fallback;
      }
      setLoading(false);
    };

    const onImgLoad = () => {
      setLoading(false);
    };

    imgEl.addEventListener('error', onImgError);
    imgEl.addEventListener('load', onImgLoad);

    return () => {
      if (!imgEl) return;
      imgEl.removeEventListener('error', onImgError);
      imgEl.removeEventListener('load', onImgLoad);
    };
  }, []);

  const rootSty: CSSProperties = {};
  if (typeof width === 'number') {
    rootSty.width = width;
  }
  if (typeof height === 'number') {
    rootSty.height = height;
  }

  return (
    <div style={rootSty} className="dr-image-wrapper">
      {loading ? <div className="dr-image-loading"></div> : null}
      <img
        ref={imgRef}
        loading={lazy ? 'lazy' : 'eager'}
        src={src}
        alt={alt}
        style={{ position: 'relative', objectFit, ...style }}
        className={classnames([className])}
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
};

export default Image;
